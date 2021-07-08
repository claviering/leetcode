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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  let result = [];
  if (!root) return result;
  swap(root);
  invertTree(root.left);
  result.push(root.val);
  invertTree(root.right);
  return result;
};

const swap = function (root) {
  [root.left, root.right] = [root.right, root.left];
};
