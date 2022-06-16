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
 var levelOrder = function(root) {
  if (!root) return []
  if (root && !root.left && !root.right) return [[root.val]];
  let curList = [root];
  let res = []
  while (curList.length) {
    let nextList = [];
    let tmp = []
    curList.forEach(item => {
      tmp.push(item.val)
      if (item.left) nextList.push(item.left)
      if (item.right) nextList.push(item.right)
    })
    curList = nextList;
    res.push(tmp)
  }
  return res;
};
let root = {
  val: 3,
  left: {
    val: 9
  },
  right: {
    val: 20,
    left: {
      val: 15
    },
    right: {
      val: 7,
    }
  }
}
console.log(levelOrder(root));