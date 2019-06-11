function alphabetSubsequence(s: string): boolean {
  const str: string[] = s.split("");
  const charCodes: number[] = str.map(char => char.charCodeAt(0));

  let count: number = 0;
  charCodes.reduce((a, b) => {
    if (a >= b) {
      count++;
      return b;
    }
    return b;
  });
  return count === 0;
}

console.log(alphabetSubsequence("zab"));
console.log(alphabetSubsequence("effg"));
console.log(alphabetSubsequence("cdce"));
console.log(alphabetSubsequence("ace"));
console.log(alphabetSubsequence("bxz"));
