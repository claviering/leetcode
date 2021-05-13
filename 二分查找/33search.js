/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    let value = nums[mid];
    let inLeft =
      (nums[0] <= value && nums[0] <= target && target < value) ||
      (nums[0] > value && (target < value || target > nums[right]));
    let inRight = !inLeft;
    if (target === value) {
      return mid;
    } else if (inLeft) {
      right = mid - 1;
    } else if (inRight) {
      left = mid + 1;
    }
  }
  return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0) === 4);
console.log(search([4, 5, 6, 7, 0, 1, 2], 3) === -1);
console.log(search([1], 0) === -1);
console.log(search([4, 5, 6, 7, 0, 1, 2], 5) === 1);
console.log(search([4, 5, 6, 7, 0, 1, 2], 2) === 6);
console.log(search([6, 7, 0, 1, 2, 4, 5], 4) === 5);
console.log(search([6, 7, 0, 1, 2, 4, 5], 6) === 0);
console.log(search([6, 7, 0], 6) === 0);
console.log(search([6], 6) === 0);
console.log(search([3, 1], 1) === 1);
