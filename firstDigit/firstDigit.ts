// 1st SOLUTION
function firstDigit(inputString: string): string {
  for (let i = 0; i < inputString.length; i++) {
    if (parseInt(inputString[i]) >= 0) {
      return inputString[i];
    }
  }
}

// 2nd SOLUTION
function firstDigit2(inputString: string): string {
  for (let i = 0; i < inputString.length; i++) {
    if (!isNaN(inputString[i])) return inputString[i];
  }
}

console.log(firstDigit("var_1__Int"));
console.log(firstDigit("q2q-q"));
console.log(firstDigit("0ss"));

console.log(firstDigit2("var_1__Int"));
console.log(firstDigit2("q2q-q"));
console.log(firstDigit2("0ss"));
