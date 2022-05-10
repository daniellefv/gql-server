const book = require("./book");
const annotation = require("./annotation");
const user = require("./user");

module.exports = {
  ...book,
  ...annotation,
  ...user,
};
