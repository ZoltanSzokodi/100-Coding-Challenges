function extractMatrixColumn(matrix: number[][], column: number): number[] {
  const myColumn: number[] = [];

  matrix.forEach(array => myColumn.push(array[column]));

  return myColumn;
}

console.log(extractMatrixColumn([[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]], 3));
