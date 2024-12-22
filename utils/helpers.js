export const helpers = {
  format: (response) => {
    if (response.docs) {
      return response.docs.map(helpers.getDoc);
    } else {
      return helpers.getDoc(response);
    }
  },
  getDoc: (doc) => {
    return doc.exists ? { id: doc.id, ...doc.data() } : null;
  },
  shorttext: (text) => {
    return text.slice(0, 40) + "...";
  },
  sleep: (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  },
  isInWallOrNot: (arr, node) => {
    if (arr.some((e) => e.col === node.col && e.row === node.row)) {
      return arr.filter((e) => e.col !== node.col || e.row !== node.row);
    } else {
      arr.push({ ...node });
    }
    return arr;
  },
};
