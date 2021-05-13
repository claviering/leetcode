function nextGreatestLetter(letters: string[], target: string): string {
  let left = 0;
  let right = letters.length - 1;
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    let value = letters[mid];
    if (value === target) {
      left = mid + 1;
    } else if (value < target) {
      left = mid + 1;
    } else if (target < value) {
      right = mid - 1;
    }
  }
  return letters[left % letters.length];
}

console.log(nextGreatestLetter(["c", "f", "j"], "a") === "c");
console.log(nextGreatestLetter(["c", "f", "j"], "c") === "f");
console.log(nextGreatestLetter(["c", "f", "j"], "d") === "f");
console.log(nextGreatestLetter(["c", "f", "j"], "g") === "j");
console.log(nextGreatestLetter(["c", "f", "j"], "j") === "c");
console.log(nextGreatestLetter(["c", "f", "j"], "k") === "c");
console.log(nextGreatestLetter(["e", "e", "n", "n"], "e") === "n");
