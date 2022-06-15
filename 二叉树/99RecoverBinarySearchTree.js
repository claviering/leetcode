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
 * @return {void} Do not return anything, modify root in-place instead.
 */
let rootTmp = {
  val: 3,
  left: {
    val: 1,
  },
  right: {
    val: 4,
    left: {
      val: 2
    }
  }
}
function tr(root, list) {
  if (root) {
    tr(root.left, list);
    list.push(root);
    tr(root.right, list);
  }
}
// Runtime O(n) Memory O(n)
var recoverTree = function (root) {
  let list = [];
  tr(root, list);
  let a = null;
  let b = null;
  for (let i = 0; i < list.length - 1; i++) {
    if (list[i].val > list[i + 1].val) {
      if (!a) {
        a = list[i]
      }
      b = list[i+1]
    }
  }
  if (a && b) {
    [a.val, b.val] = [b.val, a.val];
  }
};

// Runtime O(n) Memory O(1)
var recoverTree = function(root) {
  let first, second, prev;

  function inOrder(node) {
      if (!node) return;
      inOrder(node.left);
      if (prev && prev.val > node.val) {
          if (!first) first = prev;
          second = node;
      }
      prev = node;
      inOrder(node.right);
  }
  
  inOrder(root);
  [first.val, second.val] = [second.val, first.val];
};

recoverTree(rootTmp)
