const { books, generateNextId } = require("../../data/db");

module.exports = {
  createBook(_, args) {
    const isExistentTitle = books.some((book) => book.title === args.title);
    if (isExistentTitle) {
      throw new Error("This book title already exists");
    }
    const newBook = {
      id: generateNextId(),
      createdAt: new Date().toISOString(),
      ...args,
    };
    books.push(newBook);
    return newBook;
  },
  updateBook(_, args) {
    const index = books.findIndex((book) => book.id === args.id);
    if (index < 0) {
      throw new Error("Book doesn't exist");
    }
    const updatedBook = {
      ...books[index],
      ...args,
    };

    books.splice(index, 1, updatedBook);
    return updatedBook;
  },
};
