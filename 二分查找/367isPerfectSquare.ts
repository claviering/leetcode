function isPerfectSquare(num: number): boolean {
  if (num === 1) return true;
  let left = 1;
  let right = num / 2;
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    let mid2 = mid * mid;
    if (mid2 === num) {
      return true;
    } else if (mid2 < num) {
      left = mid + 1;
    } else if (num < mid2) {
      right = mid - 1;
    }
  }
  return false;
}

console.log(isPerfectSquare(16) === true);
console.log(isPerfectSquare(14) === false);
console.log(isPerfectSquare(100) === true);
console.log(isPerfectSquare(1) === true);
console.log(isPerfectSquare(2) === false);
console.log(isPerfectSquare(4) === true);
