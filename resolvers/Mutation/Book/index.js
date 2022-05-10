const { books, generateNextId } = require("../../../data/db");

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
  updateBook(_, { input, filter }) {
    const index = books.findIndex((book) =>
      filter.id ? book.id === filter.id : book.title === filter.title
    );
    if (index < 0) {
      throw new Error("Book doesn't exist");
    }
    const updatedBook = {
      ...books[index],
      ...input,
    };

    books.splice(index, 1, updatedBook);
    return updatedBook;
  },
  deleteBook(_, { filter }) {
    const index = books.findIndex((book) => book.id === filter.id);
    if (index < 0) {
      throw new Error("Book doesn't exist");
    }
    books.splice(index, 1);
    return true;
  },
};
