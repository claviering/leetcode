function arrangeCoins(sum: number): number {
  let n = Math.floor((Math.sqrt(8 * sum + 1) - 1) / 2);
  return n;
}

console.log(arrangeCoins(5) === 2);
console.log(arrangeCoins(8) === 3);
console.log(arrangeCoins(1) === 1);
console.log(arrangeCoins(6) === 3);
