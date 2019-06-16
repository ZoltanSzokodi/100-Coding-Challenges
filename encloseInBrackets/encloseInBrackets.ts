function encloseInBrackets(inputString: string): string {
  // const arr = inputString.split("");
  // arr.push(")");
  // arr.unshift("(");
  // return arr.join("");

  return `(${inputString})`;
}

console.log(encloseInBrackets("abacaba"));
