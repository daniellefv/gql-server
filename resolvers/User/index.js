const { roles } = require("../../data/db");

module.exports = {
  role(user) {
    const selected = roles.find((role) => role.id === user.roleId);
    return selected || null;
  },
};
