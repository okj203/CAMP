// const express = require("express");
// const router = express.Router();
// const Validator = require("validator");
// const validText = require("../../validation/valid-text");
// const passport = require("passport");
// const Schedule = require("../../models/Schedule");


// router.get("/", (req, res) => {
//   res
//     .json({ schedule: schedule.req.body })
//     .sort({ date: -1 })
//     .then((schedule) => res.json(schedule));
// });

// router.get("/schedules/new", (req, res) => { // click on calendar to open a schedule form at the clicked time? //
//   res
//     .json({ schedule: schedule.req.body })
//     .sort({ date: -1 })
//     .then((schedule) => res.json(schedule));

// });

// router.post(
//   "/:student_id",
//   passport.authenticate("jwt", { session: false }),
//   (req, res) => {
//     const { errors, isValid } = validateReviewInput(req.body);

//     if (!isValid) {
//       return res.status(400).json(errors);
//     }

//     const newReview = new Review({
//       text: req.body.text,
//       user: req.user.id,
//     });

//     newReview.save().then((review) => res.json(review));
//   }
// );

// module.exports = router;
