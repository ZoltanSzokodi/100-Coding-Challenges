function isCaseInsensitivePalindrome(inputString: string): boolean {
  const lowerCaseOriginal = inputString.toLowerCase();
  const revStr = lowerCaseOriginal
    .split("")
    .reverse()
    .join("");

  return lowerCaseOriginal === revStr;
}

console.log(isCaseInsensitivePalindrome("AaBaa"));
console.log(isCaseInsensitivePalindrome("abac"));
