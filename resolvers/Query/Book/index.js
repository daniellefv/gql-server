const { books } = require("../../../data/db");

module.exports = {
  books() {
    return books;
  },
  book(_, { id }) {
    const selected = books.find((book) => book.id === id);
    return selected || null;
  },
};
