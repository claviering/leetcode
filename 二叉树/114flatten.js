var flatten = function(root) {
    let list = [];
    function help(r){
      if (!r) return;
      list.push(r);
      help(r.left)
      help(r.right)
    }
    help(root)
    for (let i = 0; i < list.length; i++) {
      const el = list[i];
      el.left = null;
      el.right = list[i+1] || null
    }
};