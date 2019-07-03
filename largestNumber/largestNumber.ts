function largestNumber(n: number): number {
  let count = n;
  let number = "";

  while (count > 0) {
    number += "9";
    count--;
  }

  return parseInt(number);
}

console.log(largestNumber(5));
