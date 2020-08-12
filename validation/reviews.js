const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateReviewInput(data) {

  let errors = {};

  data.description = validText(data.description) ? data.description : "";

  // if (!Validator.isLength(data.description, { min: 1, max: 500 })) {
  //   errors.description = "Review must be between 1 and 500 characters";
  // }

  // if (Validator.isEmpty(data.description)) {
  //   errors.description = "Description field is required";
  // }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
