function integerToStringOfFixedWidth(number: number, width: number): string {
  let string = number.toString();

  if (width <= string.length) {
    return string.slice(string.length - width);
  } else {
    let difference = width - string.length;
    while (difference > 0) {
      string = "0" + string;
      difference--;
    }
    return string;
  }
}

console.log(integerToStringOfFixedWidth(1234, 2));
console.log(integerToStringOfFixedWidth(1234, 4));
console.log(integerToStringOfFixedWidth(1234, 7));
