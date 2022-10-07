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
 * @return {number}
 */
 var countNodes = function(root) {
    if (!root) return 0;
    let cl = 0;
    let cr = 0;
    let l = root;
    let r = root;
    while (l) {
      cl++;
      l = l.left
    }
    while (r) {
      cr++;
      r = r.right
    }
    if (cl === cr) {
      return 2 ** cl - 1; 
    }
    return 1 + countNodes(root.left) + countNodes(root.right);
};