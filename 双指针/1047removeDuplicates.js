/**
 * @param {string} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
function removeDuplicates(s) {
  s = s.split("");
  let fast = 0;
  let slow = 0;
  while (fast < s.length) {
    // 直接用fast指针覆盖slow指针的值
    s[slow] = s[fast];
    // 遇到前后相同值的，就跳过，即slow指针后退一步，下次循环就可以直接被覆盖掉了
    if (slow > 0 && s[slow] == s[slow - 1]) {
      slow--;
    } else {
      slow++;
    }
    fast++;
  }
  return s.slice(0, slow).join("");
}
console.log(removeDuplicates("abbaca"));
