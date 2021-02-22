const emptyList = null;

exports.second = (ls) => {
  if (ls === emptyList || ls.tail === emptyList) {
    return null;
  } else {
    return ls.tail.head;
  }
};
