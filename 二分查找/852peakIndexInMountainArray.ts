function peakIndexInMountainArray(arr: number[]): number {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    let leftValue = arr[mid - 1];
    let value = arr[mid];
    let rightValue = arr[mid + 1];
    if (leftValue < value && value > rightValue) {
      return mid;
    } else if (leftValue > value && value > rightValue) {
      right = mid;
    } else if (leftValue < value && value < rightValue) {
      left = mid;
    }
  }
  return left;
}

console.log(peakIndexInMountainArray([0, 1, 0]) === 1);
console.log(peakIndexInMountainArray([0, 2, 1, 0]) === 1);
console.log(peakIndexInMountainArray([0, 10, 5, 2]) === 1);
console.log(peakIndexInMountainArray([3, 4, 5, 2]) === 2);
console.log(peakIndexInMountainArray([3, 5, 3, 2, 0]) === 1);
console.log(peakIndexInMountainArray([0, 2, 4, 5, 2]) === 3);
console.log(peakIndexInMountainArray([0, 2, 4, 3, 2]) === 2);
