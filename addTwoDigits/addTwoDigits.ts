// 1st SOLUTION
function addTwoDigits(n: any): number {
  const stringify = n.toString();
  const arrOfStr = stringify.split("");

  let total = 0;
  arrOfStr.forEach((val: string) => (total += parseInt(val)));

  return total;
}

// 2nd SOLUTION
function addTwoDigits2(n: any): number {
  const toString = n.toString().split("");

  return toString.reduce((a: string, b: string) => parseInt(a) + parseInt(b));
}

console.log(addTwoDigits(23));
console.log(addTwoDigits2(523));
