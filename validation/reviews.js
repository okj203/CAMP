const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateReviewInput(data) {

  let errors = {};

  data.description = validText(data.description) ? data.description : "";

  if (!Validator.isLength(data.description, { min: 1, max: 100 })) {
    errors.description = "Review must be between 1 and 100 characters";
  }

  if (!Validator.isLength(data.rating, { min: 1, max: 1 })) {
    errors.description = "Rating is required";
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = "Description is required";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
