function allLongestStrings(inputArray: string[]): string[] {
  const sortedArr = inputArray.sort((a, b) => b.length - a.length);

  return sortedArr.filter(el => el.length === inputArray[0].length);
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
