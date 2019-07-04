// 1st SOLUTION
function maxMultiple(divisor: number, bound: number): number {
  let largestNumber = 0;

  for (let i = divisor; i < bound; i++) {
    if (i % divisor === 0) {
      largestNumber = i;
      console.log(i);
    }
  }

  return largestNumber;
}

// 2nd SOLUTION

function maxMultiple2(divisor: number, bound: number): number {
  let remainder = bound % divisor;

  return bound - remainder;
}

console.log(maxMultiple(3, 10));
console.log(maxMultiple2(3, 10));
