/**
 * 322. 零钱兑换 选择-状态-DP数组定义
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  // 选择: 拿/不拿
  // 状态: amount 减少/不变
  // DP 数组定义 dp[i]: 总金额为 i，需要最少的硬币数量
  // base case
  if (amount === 0) return 0;
  if (amount < 0) return -1;
  let dp = new Array(amount + 1).fill(amount + 1);
  dp[0] = 0;
  // 递归推导
  for (let i = 0; i <= amount; i++) {
    for (const coin of coins) {
      if (i < coin) {
        // 不拿
        continue;
      } else {
        // 拿
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }
  return dp[amount] === amount + 1 ? -1 : dp[amount];
};

console.log(coinChange([1, 2, 5], 11));
