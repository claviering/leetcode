var preorderTraversal = function(root) {
    let res = []
    function help(r) {
      if (!r) return;
      help(r.left)
      help(r.right)
      res.push(r.val)
    }
    help(root)
    return res;
};