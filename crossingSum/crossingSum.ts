function crossingSum(matrix: number[][], a: number, b: number): number {
  const rowTotal = matrix[a].reduce((acc, cur) => acc + cur);
  // const reduceCol = matrix[0][b] + matrix[1][b] + matrix[2][b] - matrix[a][b];
  let colTotal = 0;

  for (let i = 0; i < matrix.length; i++) {
    colTotal += i !== a ? matrix[i][b] : 0;
  }

  return rowTotal + colTotal;
}

console.log(crossingSum([[1, 1, 1, 1], [2, 2, 2, 2], [3, 3, 3, 3]], 1, 3));
