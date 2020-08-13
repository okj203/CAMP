const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const event = require("../../models/events");
const validateEventInput = require("../../validation/events");


//teacher events index
router.get("/:user_id", (req, res) => {
    event.find({
            student_id: req.params.user_id
    })
        .then((events) => res.json(events))
        .catch((err) => res
            .status(404)
            .json({
                noeventsfound: "No events found for the user"
            })
        );
});

//teacher event form
router.post(
    "/:user_id",
    passport.authenticate("jwt", {
        session: false
    }),
    (req, res) => {
        const {
            errors,
            isValid
        } = validateEventInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newEvent = new Event({
            title: req.body.title,
            student_id: req.body.student_id, 
            teacher_id: req.body.teacher_id,
            start_time: req.body.start_time,
            end_time: req.body.end_time,
        });
        console.log(newEvent)
        newEvent.save().then((event) => res.json(event));
    }
);

module.exports = router;