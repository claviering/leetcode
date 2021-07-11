/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
let pre = null;
let result = Number.POSITIVE_INFINITY;
function traversal(root) {
  if (!root) return;
  traversal(root.left);
  if (pre) {
    result = Math.min(result, root.val - pre.val);
  }
  pre = root;
  traversal(root.right);
  return;
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function (root) {
  pre = null;
  result = Number.POSITIVE_INFINITY;
  traversal(root);
  return result;
};
