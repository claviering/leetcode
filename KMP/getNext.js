/**
 * 生成前缀表, 对应下标
 * @param {String} s 需要生成前缀表的字符串
 * @returns {Array} next 前缀表
 */
const getNext = function (s) {
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
};

console.log(getNext("aabaaf"));
export default getNext;
