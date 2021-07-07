function getNext(s) {
  if (!s) return [];
  let len = s.length;
  let next = new Array(len);
  let j = 0;
  next[0] = j; // 1. 初始化 next 数组
  for (let i = 1; i < len; i++) {
    // 2. 不相等
    while (j > 0 && s[i] !== s[j]) {
      j = next[j - 1];
    }
    // 3. 相等
    if (s[i] === s[j]) {
      j++;
    }
    // 4. 更新
    next[i] = j;
  }
  return next;
}

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (!needle) return 0;
  let next = getNext(needle);
  let j = 0;
  for (let i = 0; i < haystack.length; i++) {
    while (j > 0 && haystack[i] !== needle[j]) {
      j = next[j - 1];
    }
    if (haystack[i] === needle[j]) {
      j++;
    }
    if (j === needle.length) {
      return i - needle.length + 1;
    }
  }
  return -1;
};
console.log(strStr("hello", "ll"));
console.log(strStr("aaaaa", "bba"));
