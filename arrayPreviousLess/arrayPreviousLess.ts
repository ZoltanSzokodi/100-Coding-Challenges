function arrayPreviousLess(items: number[]): number[] {
  const lessThanList: number[] = [];

  for (let i = items.length - 1; i >= 0; i--) {
    for (let j = i; j >= 0; j--) {
      if (items[i] > items[j]) {
        lessThanList.unshift(items[j]);
        break;
      } else if (j === 0) {
        lessThanList.unshift(-1);
      }
    }
  }
  return lessThanList;
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));
console.log(arrayPreviousLess([0, 9, 4, 11, 9]));
console.log(arrayPreviousLess([52, 95, 21, 3, 55]));
console.log(arrayPreviousLess([69, 13, 200, 350, 60]));
