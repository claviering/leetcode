/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var connect = function (root) {
  if (!root) return root; // 为了过测试
  let queue = [];
  queue.push(root);
  while (queue.length > 0) {
    let levelLen = queue.length;
    let leftNode = null;
    for (let index = 0; index < levelLen; index++) {
      let node = queue.shift();
      if (leftNode) {
        leftNode.next = node;
        leftNode = node;
      } else {
        leftNode = node;
      }
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    leftNode.next = null;
  }
  return root;
};
