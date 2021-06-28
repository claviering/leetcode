function generateMatrix(n) {
  if (n === 1) return [[1]];
  let m = new Array(n);
  for (let i = 0; i < n; i++) {
    m[i] = new Array(n);
    for (let j = 0; j < n; j++) {
      m[i][j] = 0;
    }
  }
  let mid = Math.floor(m.length / 2);
  m[mid][mid] = n * n;
  while (n > m.length / 2) {
    leftToRight(m, m.length - n, m.length - n, n);
    topToDown(m, m.length - n, n - 1, n);
    rightToLeft(m, n - 1, n - 1, n);
    downToTop(m, n - 1, m.length - n, n);
    n -= 1;
  }

  // console.table(m);
  return m;
}
// generateMatrix(5);

/**
 *
 * @param {*} matreix 二维数组
 * @param {*} i 从 i 开始
 * @param {*} j 从 j 开始
 * @param {*} n 矩阵大小
 */
function leftToRight(matreix, i, j, n) {
  let startNum = matreix[i][j - 1] || 0;
  for (let index = j; index <= n - 2; index++) {
    matreix[i][index] = startNum + 1;
    startNum += 1;
  }
}

/**
 *
 * @param {*} matreix 二维数组
 * @param {*} i 从 i 开始
 * @param {*} j 从 j 开始
 * @param {*} n 矩阵大小
 */
function topToDown(matreix, i, j, n) {
  let startNum = matreix[i][j - 1];
  for (let index = i; index <= n - 2; index++) {
    matreix[index][j] = startNum + 1;
    startNum += 1;
  }
}

/**
 *
 * @param {*} matreix 二维数组
 * @param {*} i 从 i 开始
 * @param {*} j 从 j 开始
 * @param {*} n 矩阵大小
 */
function rightToLeft(matreix, i, j, n) {
  let startNum = matreix[i - 1][j];
  for (let index = j; index >= matreix.length - n + 1; index--) {
    matreix[i][index] = startNum + 1;
    startNum += 1;
  }
}

/**
 *
 * @param {*} matreix 二维数组
 * @param {*} i 从 i 开始
 * @param {*} j 从 j 开始
 */
function downToTop(matreix, i, j, n) {
  let startNum = matreix[i][j + 1];
  for (let index = i; index >= matreix.length - n + 1; index--) {
    matreix[index][j] = startNum + 1;
    startNum += 1;
  }
}
