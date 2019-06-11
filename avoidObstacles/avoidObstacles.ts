function avoidObstacles(inputArray: number[]): number {
  inputArray = inputArray.sort((a, b) => a - b);

  const largestArrVal = inputArray[inputArray.length - 1];

  for (let i = 1; i <= largestArrVal + 1; i++) {
    if (inputArray.every(el => el % i !== 0)) {
      return i;
    }
  }
}

console.log(avoidObstacles([5, 3, 6, 7, 9]));
