/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let newNumber = String(n).split('').reduce((initial, number) => {
    let reInitial = initial;
    reInitial += Number(number);
    return reInitial;
  }, 0);
  if (newNumber >= 10) {
    newNumber = String(newNumber).split('').reduce((initial, number) => {
      let reInitial = initial;
      reInitial += Number(number);
      return reInitial;
    }, 0);
  }
  return newNumber;
}

module.exports = getSumOfDigits;
