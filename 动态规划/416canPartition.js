function canPartition(nums) {
  let sum = nums.reduce((a, b) => a + b, 0);
  if (sum % 2 !== 0) return false;
  let target = sum / 2;
  let last = testWeightBagProblem2(nums, nums, target);
  return last === target;
}

// canPartition([1, 5, 11, 5]);

/**
 * 01背包问题, 二维数组
 * @param wight 物品重量
 * @param value 物品价值
 * @param size 背包大小
 * @returns max 最多装多重
 */
function testWeightBagProblem(wight, value, size) {
  // 1. 定义 dp[i][j] // 表示 前 1-i 个物品，背包容量j最多装 dp[i][j] 价值
  let dp = Array.from({ length: wight.length }).map(
    () => Array(size + 1).fill(0) // 背包大小n，数组长度 n+1
  );
  // 2. 初始化
  for (let j = 0; j <= size; j++) {
    dp[0][j] = j >= wight[0] ? value[0] : 0;
  }
  // 递推
  // 不取: dp[i][j] = dp[i-1][j]
  // 取:   dp[i][j] = dp[i][j-wight[i]] + value[i]
  for (let i = 1; i < wight.length; i++) {
    for (let j = 0; j <= size; j++) {
      if (j < wight[i]) {
        // 当前背包装不下
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - wight[i]] + value[i]);
      }
    }
  }
  return dp[wight.length - 1][size];
}
/**
 * 01背包问题, 一维数组
 * @param wight 物品重量
 * @param value 物品价值
 * @param size 背包大小
 * @returns max 最多装多重
 */
function testWeightBagProblem2(wight, value, size) {
  // 1. 定义 dp[j] // 表示背包容量j最多装 dp[j] 价值
  let dp = Array.from({ length: size + 1 });
  // 2. 初始化
  for (let j = 0; j <= size; j++) {
    dp[j] = j >= wight[0] ? value[0] : 0;
  }
  // 递推
  // 不取: dp[j] = dp[j - 1]
  // 取:   dp[j] = dp[j-wight[i]] + value[i]
  for (let i = 1; i < wight.length; i++) {
    for (let j = size; j >= wight[i]; j--) { // 背包从大到小，防止重复添加物品
      dp[j] = Math.max(dp[j], dp[j - wight[i]] + value[i]);
    }
  }
  return dp[size];
}
