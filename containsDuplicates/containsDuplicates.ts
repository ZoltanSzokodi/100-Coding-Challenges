function containsDuplicates(a: number[]): boolean {
  const sortedArr = a.sort();
  console.log(sortedArr);

  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] === sortedArr[i + 1]) {
      return true;
    }
  }
  return false;
}

console.log(containsDuplicates([1, 2, 3, 1]));
console.log(containsDuplicates([3, 1, 2, 4]));
