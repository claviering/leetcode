function sortedSquares(nums: number[]): number[] {
  let result: number[] = new Array(nums.length);
  let left = 0;
  let right = nums.length - 1;
  let resultRight = right;
  while (left <= right) {
    let leftsqrt = nums[left] * nums[left];
    let rightsqrt = nums[right] * nums[right];
    if (leftsqrt < rightsqrt) {
      result[resultRight] = rightsqrt;
      right -= 1;
    } else {
      result[resultRight] = leftsqrt;
      left += 1;
    }
    resultRight -= 1;
  }
  return result;
}
console.log(sortedSquares([-4, -1, 0, 3, 10]));
console.log(sortedSquares([-7, -3, 2, 3, 11]));
