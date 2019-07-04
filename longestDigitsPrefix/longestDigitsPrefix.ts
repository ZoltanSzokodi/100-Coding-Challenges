function longestDigitsPrefix(inputString: string): string {
  const splitString = inputString.split("");
  let prefix = [];

  for (let i = 0; i < splitString.length; i++) {
    if (parseInt(splitString[i])) {
      prefix.push(splitString[i]);
    } else {
      break;
    }
  }

  return prefix.join("");
}

console.log(longestDigitsPrefix("65748g123aa1"));
