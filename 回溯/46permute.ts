/**
 * 46. 全排列
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums: number[]): number[][] {
  let list: number[][] = [];
  function help(res: number[], nums: number[]) {
    if (res.length === nums.length) {
      list.push(res.slice());
      return;
    }
    for (const num of nums) {
      if (res.includes(num)) continue;
      res.push(num);
      help(res, nums);
      res.pop();
    }
  }
  help([], nums);
  return list;
};
console.log(permute([1, 2, 3]));
