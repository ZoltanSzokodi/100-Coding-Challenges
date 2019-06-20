function findClosestPair(numbers: number[], sum: number): number {
  let distance: number = -1;
  let myNums: number[] = [];

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const absDistance = Math.abs(i - j);

      if (numbers[i] + numbers[j] === sum) {
        if (distance === -1 || absDistance < distance) {
          distance = absDistance;
        }
      }
    }
  }
  return distance;
}

console.log(findClosestPair([1, 0, 2, 4, 3, 0], 5));
console.log(findClosestPair([2, 3, 7], 8));
