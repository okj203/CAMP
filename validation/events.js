const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateEventnput(data) {
    let errors = {};

    data.title = validText(data.title) ? data.title : "";

    if (!Validator.isLength(data.title, {
            min: 1,
            max: 500
        })) {
        errors.title = "Event must be between 1 and 500 characters";
    }

    if (Validator.isEmpty(data.title)) {
        errors.title = "Title field is required";
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0,
    };
};