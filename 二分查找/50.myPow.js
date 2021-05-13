/**
 * n = 2^0 + 2^1 + 2^2 + ... + 2^(k-1)
 * x^n = x^(2^0 + 2^1 + 2^2 + ... + 2^(k-1))
 *     = x^(2^0) * x^(2^1) * x^(2^2) * ... * x^(2^(k-1))
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (x === 1 || x === -1) return x ** n;
  if (n === -2147483648 || n === 2147483647) return 0;
  function quickMul(x, n) {
    let ans = 1;
    let con = x;
    while (n > 0) {
      if (n & 1) {
        ans = ans * con;
      }
      con = con * con;
      n >>= 1;
    }
    return ans;
  }
  let res = n >= 0 ? quickMul(x, n) : 1 / quickMul(x, -n);
  return res;
};

console.log(myPow(1, 1) === 1);
console.log(myPow(1, 0) === 1);
console.log(myPow(2, 0) === 1);
console.log(myPow(2, 2) === 4);
console.log(myPow(2, 4) === 16);
console.log(myPow(2, 3) === 8);
console.log(myPow(2, -2) === 0.25);
console.log(myPow(2, 10) === 1024);
