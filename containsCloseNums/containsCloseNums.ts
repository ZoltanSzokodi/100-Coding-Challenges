function containsCloseNums(nums: number[], k: number): boolean {
  let minus: number;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        minus = Math.abs(i - j);
        break;
      }
    }
  }
  console.log(minus);
  return minus <= k;
}

console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 3));
console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 2));
