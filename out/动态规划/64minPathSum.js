"use strict";
// function minPathSum(grid: number[][]): number {
//   // base case
//   let n = grid.length;
//   let m = grid[0].length;
//   if (n === 1 && m === 1) return grid[0][0];
//   for (let i = 1; i < n; i++) {
//     grid[i][0] = grid[i - 1][0] + grid[i][0];
//   }
//   for (let i = 1; i < m; i++) {
//     grid[0][i] = grid[0][i - 1] + grid[0][i];
//   }
//   for (let i = 1; i < n; i++) {
//     for (let j = 1; j < m; j++) {
//       grid[i][j] = Math.min(grid[i - 1][j], grid[i][j - 1]) + grid[i][j];
//     }
//   }
//   return grid[n - 1][m - 1];
// }
// 状态压缩
function minPathSum(grid) {
    // base case
    let n = grid.length;
    let m = grid[0].length;
    let res = grid[0];
    if (n === 1 && m === 1)
        return grid[0][0];
    for (let i = 1; i < m; i++) {
        res[i] = res[i - 1] + res[i];
    }
    for (let i = 1; i < n; i++) {
        res[0] = res[0] + grid[i][0];
        for (let j = 1; j < m; j++) {
            res[j] = Math.min(res[j], res[j - 1]) + grid[i][j];
        }
    }
    return res[m - 1];
}
console.log(7, minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
]));
console.log(12, minPathSum([
    [1, 2, 3],
    [4, 5, 6],
]));
//# sourceMappingURL=64minPathSum.js.map