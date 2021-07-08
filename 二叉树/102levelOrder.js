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
var levelOrder = function (root) {
  if (!root) return [];
  let result = [];
  let queue = [];
  queue.push(root);
  while (queue.length > 0) {
    let levelLen = queue.length;
    let curLevel = [];
    for (let index = 0; index < levelLen; index++) {
      let node = queue.shift();
      curLevel.push(node.val);
      for (const item of node.children) {
        if (item) {
          queue.push(item);
        }
      }
    }
    result.push(curLevel);
  }
  return result;
};
