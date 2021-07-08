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
 * @return {number[][]}
 */
var largestValues = function (root) {
  if (!root) return [];
  let result = [];
  let queue = [];
  queue.push(root);
  while (queue.length > 0) {
    let levelLen = queue.length;
    let max = Number.NEGATIVE_INFINITY;
    for (let index = 0; index < levelLen; index++) {
      let node = queue.shift();
      max = max > node.val ? max : node.val;
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    result.push(max);
  }
  return result;
};
