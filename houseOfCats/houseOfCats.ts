function houseOfCats(legs: number): number[] {
  if (legs >= 4) {
    if (legs % 4 === 2) {
      return [(legs - 2) / 4, legs / 2];
    } else if (legs % 4 === 0) {
      return [legs / 4, legs / 2];
    }
  } else {
    return [legs / 2];
  }
}

console.log(houseOfCats(6));
console.log(houseOfCats(2));
