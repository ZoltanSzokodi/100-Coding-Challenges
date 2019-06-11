function arrayMaximalAdjacentDifference(inputArray: number[]): number {
  let differences: number[] = [];

  for (let i = 0; i < inputArray.length - 1; i++) {
    differences.push(Math.abs(inputArray[i] - inputArray[i + 1]));
  }
  console.log(differences);

  return Math.max(...differences);
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0, 22, 13, 44, 67]));
