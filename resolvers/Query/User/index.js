const { users, roles } = require("../../../data/db");

module.exports = {
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
