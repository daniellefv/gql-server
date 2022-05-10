const { annotations } = require("../../../data/db");

module.exports = {
  annotations(_, { bookId }) {
    const selected = annotations.filter(
      (annotation) => annotation.bookId === bookId
    );
    return selected || [];
  },
};
