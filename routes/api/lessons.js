const express = require("express");
const router = express.Router();
const Lesson = require("../../models/Lesson");

router.get("/test", (req, res) =>
  res.json({ msg: "This is the lessons route" })
);

router.get("/", (req, res) => {
  // res.json({ msg: "No lessons found" });
  Lesson.find()
    .sort({ number: -1 })
    .then((lessons) => res.json(lessons))
    .catch((err) =>
      res.status(404).json({ nolessonsfound: "No lessons found" })
    );
});

router.get("/:lesson_id", (req, res) => {
  Lesson.find({ lesson: req.params.lesson_id })
    .sort({ number: -1 })
    .then((lesson) => res.json(lesson))
    .catch((err) =>
      res.status(404).json({ nolessonsfound: "Lesson number not found" })
    );
});

module.exports = router;
