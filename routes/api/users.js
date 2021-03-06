const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));

router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      email: req.user.email,
      fname: req.user.fname,
      lname: req.user.lname,
      accountType: req.user.accountType,
    });
  }
);

router.get(
  "/", (req, res) => {
    User.find()
      .sort({
        date: -1
      })
      .then(users => res.json(users))
      .catch(err => res.status(400).json(err))
  }
)


router.get(
  "/:id", (req, res) => {
    User
      .findById(req.params.id)
      .then(user => res.json(user))
      .catch((err) => console.log(err));
  }
)

// router.get(
//   "/all",
//   passport.authenticate("jwt", { session: false }),
//   (req, res) => {
//     res.json({
//       id: req.user.id,
//       email: req.user.email,
//       fname: req.user.fname,
//       lname: req.user.lname,
//       accountType: req.user.accountType,
//     });
//   }
// );

router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  console.log(isValid)
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      errors.email = "User already exists";
      return res.status(400).json(errors);
    } else {
      const newUser = new User({
        email: req.body.email.toLowerCase(),
        password: req.body.password,
        fname: req.body.fname,
        lname: req.body.lname,
        accountType: req.body.accountType,
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => {
              const payload = { id: user.id, email: user.email, fname: user.fname, lname: user.lname, accountType: user.accountType };
              
              jwt.sign(
                payload,
                keys.secretOrKey,
                { expiresIn: 3600 },
                (err, token) => {
                  res.json({
                    success: true,
                    token: "Bearer " + token,
                  });
                }
              );
            })
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email.toLowerCase();
  const password = req.body.password;

  User.findOne({ email }).then((user) => {
    if (!user) {
      errors.email = "This user does not exist";
      return res.status(400).json(errors);
    }

    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        const payload = { id: user.id, email: user.email, fname: user.fname, lname: user.lname, accountType: user.accountType };

        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
            });
          }
        );
      } else {
        errors.password = "Incorrect password";
        return res.status(400).json(errors);
      }
    });
  });
});

module.exports = router;
