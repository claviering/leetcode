/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    let value = nums[mid];
    let leftValue = nums[mid - 1] || Number.NEGATIVE_INFINITY;
    let rightValue = nums[mid + 1] || Number.NEGATIVE_INFINITY;
    if (leftValue < value && value > rightValue) {
      return mid;
    } else if (leftValue > value && value > rightValue) {
      right = mid - 1;
    } else if (leftValue < value && value < rightValue) {
      left = mid + 1;
    } else if (leftValue > value && value < rightValue) {
      // 最低点处理，不然会死循环
      left = mid + 1;
    }
  }
};

console.log(findPeakElement([1, 2, 3, 1]) === 2);
console.log(
  findPeakElement([1, 2, 1, 3, 5, 6, 4]) === 1 ||
    findPeakElement([1, 2, 1, 3, 5, 6, 4]) === 5
);
console.log(findPeakElement([1]) === 0);
console.log(findPeakElement([1, 2]) === 1);
console.log(
  findPeakElement([3, 1, 2]) === 0 || findPeakElement([3, 1, 2]) === 2
);
