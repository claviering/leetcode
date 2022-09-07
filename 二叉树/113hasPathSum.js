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
 * @param {number} targetSum
 * @return {boolean}
 */
var pathSum = function (root, targetSum) {
  let result = [];
  let res = [];
  if (!root) return result;
  function help(root, targetSum) {
    res.push(root && root.val);
    if (!root) return;
    if (!root.left && !root.right && targetSum === root.val) {
      result.push(res.slice());
    }
    // 有负数，不能判断大小， && root.left.val <= targetSum - root.val
    help(root.left, targetSum - root.val);
    res.pop();
    // 有负数，不能判断大小， && root.right.val <= targetSum - root.val
    help(root.right, targetSum - root.val);
    res.pop();
  }
  help(root, targetSum);
  return result;
};

