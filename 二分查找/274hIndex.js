/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  let left = 0;
  let right = citations.length - 1;
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    let midValue = citations[mid];
    let rightLen = citations.length - mid;
    if (midValue === rightLen) {
      return midValue;
    } else if (midValue < rightLen) {
      left = mid + 1;
    } else if (midValue > rightLen) {
      right = mid - 1;
    }
  }
  return citations.length - left;
};

console.log(hIndex([0, 1, 3, 5, 6]) === 3);
console.log(hIndex([10]) === 1);
console.log(hIndex([2, 3]) === 2);
console.log(hIndex([0]) === 0);
console.log(hIndex([11, 15]) === 2);
console.log(hIndex([1, 2]) === 1);
