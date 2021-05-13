/**
 * 给一个 n * m 的矩阵，输出 从左上角到右下角的路径数量，只能往下走一步或者往右走一步
 * 算法复杂度 O(nm)
 * 空间复杂度 O(nm)
 * @param n
 * @param m
 */
function walk_leftTop_to_rightDown(n: number, m: number): number {
  // base case
  if (n <= 0 || m <= 0) return 0;
  if (n === 1 || m === 1) return 1;
  let mar: Array<number[]> = new Array(n).fill(new Array(m).fill(1));
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      mar[i][j] = mar[i - 1][j] + mar[i][j - 1];
    }
  }
  return mar[n - 1][m - 1];
}

/**
 * 给一个 n * m 的矩阵，输出 从左上角到右下角的路径数量，只能往下走一步或者往右走一步
 * 状态压缩
 * 算法复杂度 O(nm)
 * 空间复杂度 O(m)
 * @param n
 * @param m
 */
function walk_leftTop_to_rightDown_comp(n: number, m: number): number {
  // base case
  if (n <= 0 || m <= 0) return 0;
  if (n === 1 || m === 1) return 1;
  let m_list: number[] = new Array(m).fill(1);
  for (let i = 1; i < n; i++) {
    let left: number = 1;
    for (let j = 1; j < m; j++) {
      m_list[j] = left + m_list[j];
      left = m_list[j];
    }
  }
  return m_list[m - 1];
}

function test() {
  let testCase: Array<number[]> = [
    [0, 0],
    [1, 0],
    [1, 1],
    [2, 3],
    [5, 6],
    [10, 10],
  ];
  for (const item of testCase) {
    let a = walk_leftTop_to_rightDown(item[0], item[1]);
    let b = walk_leftTop_to_rightDown_comp(item[0], item[1]);
    console.log(a, b, a === b);
  }
}
test();
