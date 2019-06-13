function compareIntegers(a: string, b: string): string {
  if (parseInt(a) === parseInt(b)) {
    return `${a} and ${b} are equal.`;
  } else if (parseInt(a) > parseInt(b)) {
    return `${a} is greater than ${b}.`;
  } else {
    return `${a} is less than ${b}.`;
  }
}

console.log(compareIntegers("12", "13"));
console.log(compareIntegers("875", "799"));
console.log(compareIntegers("1000", "1000"));
