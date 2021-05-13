/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let res = [searchRangeLeft(nums, target), searchRangeRight(nums, target)];
  return res;
};

/**
 * 右边界
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRangeRight = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    let value = nums[mid];
    if (target === value) {
      left = mid + 1;
    } else if (target < value) {
      right = mid - 1;
    } else if (target > value) {
      left = mid + 1;
    }
  }
  if (right >= nums.length || nums[right] !== target) {
    return -1;
  }
  return right;
};

/**
 * 左边界
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRangeLeft = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    let value = nums[mid];
    if (target === value) {
      right = mid - 1;
    } else if (target < value) {
      right = mid - 1;
    } else if (target > value) {
      left = mid + 1;
    }
  }
  if (left < 0 || nums[left] !== target) {
    return -1;
  }
  return left;
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8), [3, 4]);
console.log(searchRange([5, 7, 7, 8, 8, 10], 6), [-1, -1]);
console.log(searchRange([5, 7, 7, 8, 8, 10], 7), [1, 2]);
console.log(searchRange([], 0), [-1, -1]);
console.log(searchRange([1], 0), [-1, -1]);
