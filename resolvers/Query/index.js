const Book = require("./Book");
const Annotation = require("./Annotation");
const User = require("./User");

module.exports = {
  ...Book,
  ...Annotation,
  ...User,
};
