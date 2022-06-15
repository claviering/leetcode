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
let root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 2
    }
  },
  right: {
    val: 2,
    left: {
      val: 2
    }
  }
}
var isSymmetric = function(root) {
  const helper = (leftNode, rightNode) =>{
      if(!leftNode && !rightNode) return true;
      if(!leftNode || !rightNode) return false;
      return (leftNode.val == rightNode.val) && helper(leftNode.left, rightNode.right) && helper(leftNode.right, rightNode.left);
  }
  return helper(root.left, root.right);
};