const { users, roles, books, annotations } = require("../../data/db");

module.exports = {
  books() {
    return books;
  },
  annotations(_, { bookId }) {
    const selected = annotations.filter(
      (annotation) => annotation.bookId === bookId
    );
    return selected || [];
  },
  book(_, { id }) {
    const selected = books.find((book) => book.id === id);
    return selected || null;
  },
  roles() {
    return roles;
  },
  role(_, { id }) {
    const selected = roles.find((role) => role.id === id);
    return selected || null;
  },
  users() {
    return users;
  },
  user(_, { id }) {
    const selected = users.find((user) => user.id === id);
    return selected || null;
  },
};
