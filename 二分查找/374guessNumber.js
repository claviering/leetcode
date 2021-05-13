/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let left = 1;
  let right = n;
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    let value = guess(mid);
    if (0 === value) {
      return mid;
    } else if (-1 === value) {
      right = mid - 1;
    } else if (1 === value) {
      left = mid + 1;
    }
  }
};
