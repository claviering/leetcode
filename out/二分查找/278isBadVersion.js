"use strict";
/**
 * 找左边界, 第一个 true
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */
var solution = function (isBadVersion) {
    return function (n) {
        let left = 1;
        let right = n;
        while (left <= right) {
            let mid = Math.floor(left + (right - left) / 2);
            let isBad = isBadVersion(mid);
            if (isBad) {
                right = mid - 1;
            }
            else {
                left = mid + 1;
            }
        }
        return left;
    };
};
console.log(solution(function (n) {
    let list = [false, false, true, true, true];
    return list[n - 1];
})(5) === 3);
console.log(solution(function (n) {
    let list = [false, true, true, true];
    return list[n - 1];
})(5) === 2);
console.log(solution(function (n) {
    let list = [true, true, true, true];
    return list[n - 1];
})(5) === 1);
console.log(solution(function (n) {
    let list = [false, false, false, false];
    return list[n - 1];
})(5) === 6);
//# sourceMappingURL=278isBadVersion.js.map