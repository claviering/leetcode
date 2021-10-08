/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  // 1. 定义 dp[i] 到达 i 台阶的最低花费
  // 2. 初始化 dp[0] = cost [0] dp[1] = cost[1]
  // 3. 遍历顺序 2 -> i
  let dp = new Array({ length: cost.length });
  dp[0] = cost[0];
  dp[1] = cost[1];
  let len = cost.length;
  for (let i = 2; i < len; i++) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i]; // 可以优化空间，因为只和前两个状态有关
  }
  return Math.min(dp[len - 1], dp[len - 2]);
};

/**
 * 优化空间
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs2 = function (cost) {
  // 1. 定义 dp[i] 到达 i 台阶的最低花费
  // 2. 初始化 dp[0] = cost [0] dp[1] = cost[1]
  // 3. 遍历顺序 2 -> i
  let a = cost[0];
  let b = cost[1];
  let len = cost.length;
  for (let i = 2; i < len; i++) {
    let c = Math.min(a, b) + cost[i]; // 可以优化空间，因为只和前两个状态有关
    [a, b] = [b, c];
  }
  return Math.min(a, b);
};
