const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
const users = require("./routes/api/users");
const lessons = require("./routes/api/lessons");
const schedules = require("./routes/api/schedules");
const reviews = require("./routes/api/reviews");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");

const express = require("express");
const app = express();
// app.get("/", (req, res) => res.send("CAMP")); // request response- gets printed



mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));


app.use(passport.initialize());
require("./config/passport")(passport);

const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

app.listen(port, () => console.log(`Server is running on port ${port}`));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parses data into json and passes it to the routes (order matters!)

app.use("/api/users", users);
app.use("/api/lessons", lessons);
app.use("/api/schedules", schedules);
app.use("/api/reviews", reviews);
