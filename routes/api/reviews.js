const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Review = require("../../models/Review");
const validateReviewInput = require("../../validation/reviews");

router.get("/test", (req, res) =>
  res.json({ msg: "This is the reviews route" })
);

//teacher reviews index
router.get("/:teacher_id", (req, res) => {
  Review.find({ teacher_id: req.params.teacher_id })
    // .sort({ date: -1 })
    .then((reviews) => res.json(reviews))
    .catch((err) =>
      res
        .status(404)
        .json({ noreviewsfound: "No reviews found for the teacher" })
    );
});

//teacher review form
router.post(
  "/:teacher_id",
  // passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateReviewInput(req.body);
    
    if (!isValid) {
      return res.status(400).json(errors);
    }
    // debugger
    const newReview = new Review({
      rating: req.body.rating,
      description: req.body.description,
      reviewer_id: req.body.reviewer_id.reviewer_id, // user object id; cf) Schema.Types.ObjectId
      teacher_id: req.body.teacher_id.teacher_id, // teacher_id is found from params/url, which is a number;
    });
    console.log(newReview)
    newReview.save().then((review) => res.json(review));
  }
);

module.exports = router;

// { user: {id: 1}  body: { rating: 5, description: "good" } params: {teacher_id: 1}}
