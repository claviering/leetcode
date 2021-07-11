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
 * @return {boolean}
 */
let max = Number.NEGATIVE_INFINITY;
var isValidBST = function (root) {
  max = Number.NEGATIVE_INFINITY;
  return traveral(root, max);
};

function traveral(root) {
  if (!root) return true;
  let left = traveral(root.left);
  if (max < root.val) {
    max = root.val;
  } else {
    return false;
  }
  let right = traveral(root.right);
  return left && right;
}
