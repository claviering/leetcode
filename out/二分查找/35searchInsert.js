"use strict";
function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        let value = nums[mid];
        if (target === value) {
            return mid;
        }
        else if (target < value) {
            right = mid - 1;
        }
        else if (target > value) {
            left = mid + 1;
        }
    }
    return left;
}
console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));
console.log(searchInsert([1, 3, 5, 6], 0));
//# sourceMappingURL=35searchInsert.js.map