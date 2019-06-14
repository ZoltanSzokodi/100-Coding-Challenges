// 1st SOLUTION
function differentSymbolsNaive(s: string): number {
  const myArr = Array.from(s);
  let unique: string[] = [];

  for (let i = 0; i < myArr.length; i++) {
    if (unique.indexOf(myArr[i]) === -1) {
      unique.push(myArr[i]);
    }
  }
  return unique.length;
}

// 2nd SOLUTION
function differentSymbolsNaive2(s: string): number {
  const uniqueChars = new Set(s);

  return uniqueChars.size;
}

console.log(differentSymbolsNaive("cabcb"));
console.log(differentSymbolsNaive2("cabcxub"));
