const book = require("./book");
const annotation = require("./annotation");

module.exports = {
  ...book,
  ...annotation,
};
