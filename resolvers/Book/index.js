const { annotations } = require("../../data/db");

module.exports = {
  annotations(book) {
    const selected = annotations.filter(
      (annotation) => annotation.bookId === book.id
    );
    return selected || [];
  },
};
