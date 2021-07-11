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
var sumOfLeftLeaves = function (root) {
  if (!root) return 0;
  let mid = 0;
  if (root.left && !root.left.left && !root.left.right) {
    mid = mid + root.left.val;
  }
  return mid + sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
};
