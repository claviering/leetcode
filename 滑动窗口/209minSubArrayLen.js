function minSubArrayLen(target, nums) {
  let sum = 0;
  let l = 0;
  let r = 0;
  let len = nums.length;
  let res = len + 1;
  while (r < len) {
    sum += nums[r];
    r += 1;
    while (sum >= target) {
      res = res < r - l ? res : r - l;
      sum -= nums[l];
      l += 1;
    }
  }
  return res > len ? 0 : res;
}
