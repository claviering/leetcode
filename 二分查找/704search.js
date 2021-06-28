function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    let value = nums[mid];
    if (target === value) {
      return mid;
    } else if (target < value) {
      right = mid - 1;
    } else if (target > value) {
      left = mid + 1;
    }
  }
  return -1;
}
console.log(search([1, 3, 5, 6], 5) === 2);
console.log(search([1, 3], 1) === 0);
console.log(search([1, 3], 3) === 1);
console.log(search([1, 3, 5, 6], 2) === -1);
console.log(search([1, 3, 5, 6], 7) === -1);
console.log(search([1, 3, 5, 6, 7], 7) === 4);
console.log(search([1, 3, 5, 6], 0) === -1);
