function circleOfNumbers(n: number, firstNumber: number): number {
  const halfCircle = n / 2;
  let opposite;

  if (firstNumber < halfCircle) {
    opposite = firstNumber + halfCircle;
  } else if (firstNumber === halfCircle) {
    opposite = 0;
  } else {
    opposite = firstNumber - halfCircle;
  }

  return opposite;
}

console.log(circleOfNumbers(10, 2));
