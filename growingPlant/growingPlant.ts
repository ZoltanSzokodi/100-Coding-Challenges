function growingPlant(
  upSpeed: number,
  downSpeed: number,
  desiredHeight: number
): number {
  let days = 0;
  let totalHeight = 0;

  while (totalHeight < desiredHeight) {
    days++;
    totalHeight += upSpeed;

    if (totalHeight < desiredHeight) {
      totalHeight -= downSpeed;
    }
  }

  return days;
}

console.log(growingPlant(100, 10, 910));
console.log(growingPlant(10, 1, 1000));
console.log(growingPlant(15, 11, 910));
console.log(growingPlant(5, 2, 100));
