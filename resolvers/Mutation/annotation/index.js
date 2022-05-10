const { annotations } = require("../../../data/db");

module.exports = {
  createAnnotation(_, { bookId, input }) {
    const newAnnotation = {
      ...input,
      bookId,
    };
    return annotations.push(newAnnotation);
  },
  updateAnnotation(_, { id, input }) {
    const selectedIndex = annotations.findIndex(
      (annotation) => annotation.id === id
    );
    if (selectedIndex < 0) {
      throw new Error("Annotation doesn't exist");
    }
    const updatedAnnotation = {
      ...annotations[selectedIndex],
      ...input,
    };
    annotations.splice(selectedIndex, 1, updatedAnnotation);
    return updatedAnnotation;
  },
  deleteAnnotation(_, { id }) {
    const selectedIndex = annotations.findIndex(
      (annotation) => annotation.id === id
    );
    if (selectedIndex < 0) {
      throw new Error("Annotation doesn't exist");
    }
    annotations.splice(selectedIndex, 1);
    return true;
  },
};
