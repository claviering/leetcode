/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// var countNodes = function (root) {
//   if (!root) return 0;
//   if (!root.left && !root.right) return 1;
//   return countNodes(root.left) + countNodes(root.right) + 1;
// };

/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
  let high = calcHigh(root);
  let left = 1 << high;
  let right = (1 << (high + 1)) - 1;
  console.log("left", left);
  console.log("right", right);
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (exists(root, high, mid)) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left - 1;
};

var exists = function (root, high, mid) {
  let bit = 1 << (high - 1);
  while (root && bit > 0) {
    if (bit & mid) {
      root = root.right;
    } else {
      root = root.left;
    }
    bit >>= 1;
  }
  return root;
};

var calcHigh = function (root) {
  if (!root) return 0;
  let high = 0;
  while (root) {
    high++;
    root = root.left;
  }
  return high - 1;
};
