let firstId = 1;
const generateNextId = () => {
  return `${firstId++}`;
};

const books = [
  {
    id: generateNextId(),
    title: "Atomic habits",
    author: "James Clear",
    createdAt: "2022-04-14T11:20:43.718Z",
  },
  {
    id: generateNextId(),
    title: "Sprint",
    author: "Jake Knapp",
    createdAt: "2022-04-11T11:20:43.718Z",
  },
  {
    id: generateNextId(),
    title: "The Servant",
    author: "James C. Hunter",
    createdAt: "2022-05-11T11:20:43.718Z",
  },
];

const annotations = [
  {
    id: "1",
    note: "interesting notes",
    createdAt: "2022-05-11T11:20:43.718Z",
    bookId: "2",
  },
  {
    id: "2",
    note: "a lot of cool stuff about this book",
    createdAt: "2022-05-08T11:20:43.718Z",
    bookId: "1",
  },
  {
    id: "3",
    note: "nice things about this book",
    createdAt: "2022-05-01T11:20:43.718Z",
    bookId: "3",
  },
  {
    id: "4",
    note: "another one",
    createdAt: "2022-05-03T11:20:43.718Z",
    bookId: "1",
  },
];

const roles = [
  { id: "1", type: "Admin" },
  { id: "2", type: "Regular" },
];

const users = [
  {
    id: "1",
    email: "first@wemail.com",
    name: "First user",
    books: books,
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
    books: [books[0], books[2]],
    roleId: "2",
  },
];

module.exports = { users, roles, annotations, books, generateNextId };
