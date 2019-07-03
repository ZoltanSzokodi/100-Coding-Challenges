function isLucky(n: number): boolean {
  const array = n
    .toString()
    .split("")
    .map(value => parseInt(value));

  let firstHalf = 0;
  let secondHalf = 0;

  for (let i = 0; i < array.length / 2; i++) {
    firstHalf += array[i];
  }

  for (let j = array.length / 2; j < array.length; j++) {
    secondHalf += array[j];
  }

  return firstHalf === secondHalf;
}

console.log(isLucky(1230));
console.log(isLucky(239017));
