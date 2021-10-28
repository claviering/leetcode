/**
 * 暴力
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
 var corpFlightBookings = function(bookings, n) {
  let res = new Array(n).fill(0);
  for (let i = 0; i < bookings.length; i++) {
    const books = bookings[i];
    const seats = books[2];
    for (let j = books[0] - 1; j < books[1]; j++) {
      res[j] = res[j] + seats;
    }
  }
  return res;
};
/**
 * 差分数组
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
 var corpFlightBookings = function(bookings, n) {
  let res = new Array(n).fill(0);
  for (const book of bookings) {
    let l = book[0];
    let r = book[1];
    let num = book[2];
    res[l-1] = res[l-1] + num;
    if (r < n) {
      res[r] = res[r] - num
    }
  }
  for (let i = 1; i < res.length; i++) {
    res[i] += res[i-1];
  }
  return res;
};