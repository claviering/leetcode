/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
  s = s.split("");
  reverseString(0, n - 1, s);
  reverseString(n, s.length - 1, s);
  reverseString(0, s.length - 1, s);
  return s.join("");
};

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (i, j, s) {
  while (i < j) {
    let tmp = s[i];
    s[i] = s[j];
    s[j] = tmp;
    i += 1;
    j -= 1;
  }
  return s;
};
console.log(reverseLeftWords("abcdefg", 2));
