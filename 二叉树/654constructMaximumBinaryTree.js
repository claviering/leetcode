/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  if (!nums || !nums.length) return null;
  let max = Number.NEGATIVE_INFINITY;
  let maxIndex = 0;
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] > max) {
      max = nums[index];
      maxIndex = index;
    }
  }
  let root = new TreeNode(max, null, null);
  let leftNums = nums.slice(0, maxIndex);
  let rightNums = nums.slice(maxIndex + 1);
  root.left = constructMaximumBinaryTree(leftNums);
  root.right = constructMaximumBinaryTree(rightNums);
  return root;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

constructMaximumBinaryTree([3, 2, 1, 6, 0, 5]);
