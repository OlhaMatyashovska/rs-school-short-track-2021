/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const filtered = arr.filter((x) => x !== -1).sort((a, b) => {
    if (a > b) {
      return 1;
    }
    return -1;
  });
  const mapped = arr.map((x) => {
    const elem = x;
    if (elem === -1) {
      return -1;
    }
    return null;
  });
  const sortedByHeight = mapped.map((x) => {
    let elem = x;
    if (elem === -1) {
      elem = -1;
      return elem;
    }
    elem = filtered.shift();
    return elem;
  });
  return sortedByHeight;
}

module.exports = sortByHeight;
