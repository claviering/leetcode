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
 var zigzagLevelOrder = function(root) {
  if (!root) return []
  if (root && !root.left && !root.right) return [[root.val]];
  let curList = [root];
  let res = [];
  let flag = true;
  while (curList.length) {
    let nextList = [];
    let tmp = []
    curList.forEach(item => {
      tmp.push(item.val)
      if (item.left) nextList.push(item.left)
      if (item.right) nextList.push(item.right)
    })
    curList = nextList
    res.push(flag ? tmp : tmp.reverse())
    flag = !flag
  }
  return res;
};
let root = {
  val: 3,
  left: {
    val: 9,
    left: {
      val: 15
    },
  },
  right: {
    val: 20,
    right: {
      val: 7,
    }
  }
}
console.log(zigzagLevelOrder(root));