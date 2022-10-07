/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
  if (!root) return 0;
  let sum = 0;
  let pathSum = 0;
  function help(r) {
    pathSum = pathSum * 10 + r.val
    if (!r.left && !r.right) {
      sum += pathSum;
      return;
    }
    if (r.left) {
      help(r.left)
      pathSum = ~~(pathSum / 10)
    }
    if (r.right) {
      help(r.right)
      pathSum = ~~(pathSum / 10)
    }
  }
  help(root)
  return sum;
};

let r = {
  val: 4,
  left: {
    val: 9,
    left: {
      val: 5
    },
    right: {
      val: 1
    }
  },
  right: {
    val: 0
  }
}
sumNumbers(r)