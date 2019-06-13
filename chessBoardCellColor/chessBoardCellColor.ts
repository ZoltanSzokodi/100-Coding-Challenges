// 1st SOLUTION
function chessBoardCellColor(cell1: string, cell2: string): boolean {
  const color1 = whichColor(cell1);
  const color2 = whichColor(cell2);

  function whichColor(cell) {
    if (
      (cell[0] === "A" ||
        cell[0] === "C" ||
        cell[0] === "E" ||
        cell[0] === "G") &&
      parseInt(cell[1]) % 2 !== 0
    ) {
      return "Black";
    } else if (
      (cell[0] === "A" ||
        cell[0] === "C" ||
        cell[0] === "E" ||
        cell[0] === "G") &&
      parseInt(cell[1]) % 2 === 0
    ) {
      return "White";
    } else if (
      (cell[0] === "B" ||
        cell[0] === "D" ||
        cell[0] === "F" ||
        cell[0] === "H") &&
      parseInt(cell[1]) % 2 !== 0
    ) {
      return "White";
    } else {
      return "Black";
    }
  }

  return color1 === color2;
}

// 2nd SOLUTION
function chessBoardCellColor2(cell1: string, cell2: string): boolean {
  const board = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8
  };

  const total1 = (board[cell1[0]] + parseInt(cell1[1])) % 2;
  const total2 = (board[cell2[0]] + parseInt(cell2[1])) % 2;

  return total1 === total2;
}

console.log(chessBoardCellColor("A2", "H5"));
console.log(chessBoardCellColor("A1", "H3"));

console.log(chessBoardCellColor2("A2", "H5"));
console.log(chessBoardCellColor2("A1", "H3"));
