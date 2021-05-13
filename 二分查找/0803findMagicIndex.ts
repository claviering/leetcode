// 左边界
function findMagicIndex(nums: number[]): number {
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if (element === index) return index;
  }
  return -1;
}

console.log(findMagicIndex([1, 1, 1]) === 1);
console.log(findMagicIndex([0, 2, 3, 4, 5]) === 0);
console.log(findMagicIndex([0, 1, 2, 3, 4]) === 0);
console.log(findMagicIndex([1, 1, 2, 3, 4]) === 1);
console.log(findMagicIndex([1, 1, 2, 3]) === 1);
