function almostIncreasingSequence(sequence: number[]): boolean {
  let strikes = 0;
  let max = Math.pow(-10, 5); // -infiniti
  let secondMax = Math.pow(-10, 5);

  sequence.map(el => {
    if (el > max) {
      secondMax = max;
      max = el;
    } else if (el > secondMax) {
      max = el;
      strikes++;
    } else strikes++;
  });

  return strikes <= 1;
}

console.log(almostIncreasingSequence([1, 3, 2, 1]));
console.log(almostIncreasingSequence([1, 3, 2]));
