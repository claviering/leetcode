/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let m = matrix.length;
  let n = matrix[0].length;
  let left = 0;
  let right = m * n - 1;
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    let mid_m = Math.floor(mid / n);
    let mid_n = mid % n;
    let value = matrix[mid_m][mid_n];
    if (target === value) {
      return true;
    } else if (target < value) {
      right = mid - 1;
    } else if (target > value) {
      left = mid + 1;
    }
  }
  return false;
};

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  ) === true
);
console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
    ],
    0
  ) === false
);
console.log(searchMatrix([[1, 3, 5, 7]], 5) === true);
console.log(searchMatrix([[1, 3, 5, 7]], 8) === false);
console.log(searchMatrix([[1]], 2) === false);
console.log(searchMatrix([[1]], 1) === true);
