const { users } = require("../../data/db");

module.exports = {
  books() {
    return [];
  },
  annotations(_, { bookId }) {
    return [];
  },
  book(_, { bookId }) {
    return null;
  },
  roles() {
    return [
      { id: "123", type: "Admin" },
      { id: "12423", type: "Regular" },
    ];
  },
  role(_, { id }) {
    return { id: "123", type: "Admin" };
  },
  users() {
    return users;
  },
  user(_, { id }) {
    const selected = users.find((user) => user.id === id);
    return selected || null;
  },
};
