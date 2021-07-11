/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  if (!inorder || !inorder.length) return null;
  let root = new TreeNode(postorder[postorder.length - 1], null, null);
  let inorderLeft = [];
  let inorderRight = [];
  for (let index = 0; index < inorder.length; index++) {
    const element = inorder[index];
    if (element === root.val) {
      inorderLeft = inorder.splice(0, index);
      inorderRight = inorder.splice(1);
    }
  }
  postorder.pop();
  let postorderLeft = postorder.slice(0, inorderLeft.length);
  let postorderRight = postorder.slice(inorderLeft.length);
  root.left = buildTree(inorderLeft, postorderLeft);
  root.right = buildTree(inorderRight, postorderRight);
  return root;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]);
buildTree([1, 2], [2, 1]);
