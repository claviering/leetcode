/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let m = new Set();
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if (m.has(element)) return element;
    m.add(element);
  }
};
