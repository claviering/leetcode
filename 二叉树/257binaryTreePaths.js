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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  if (!root) return "";
  let result = [];
  let path = [];
  traversal(root, path, result);
  return result;
};

function traversal(root, path, result) {
  path.push(root.val);
  if (!root.left && !root.right) {
    result.push(path.join("->"));
    return;
  }
  if (root.left) {
    traversal(root.left, path, result);
    path.pop();
  }
  if (root.right) {
    traversal(root.right, path, result);
    path.pop();
  }
}
