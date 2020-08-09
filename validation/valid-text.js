const validText = (str) => {
  return typeof str === "string" && str.trim().length > 0;
  // .trim takes all the spaces off of the str (input box)
};

module.exports = validText;
