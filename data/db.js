const roles = [
  { id: "1", type: "Admin" },
  { id: "2", type: "Regular" },
];

const users = [
  {
    id: "1",
    email: "first@wemail.com",
    name: "First user",
    books: [],
    roleId: "1",
  },
  {
    id: "2",
    email: "second@wemail.com",
    name: "Second user",
    books: [],
    roleId: "1",
  },
  {
    id: "3",
    email: "third@wemail.com",
    name: "Third user",
    books: [],
    roleId: "2",
  },
];

module.exports = { users, roles };
