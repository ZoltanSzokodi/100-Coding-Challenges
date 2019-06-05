// 1st SOLUTION
function add(param1: number, param2: number): number {
  const inputArr = Array.from(arguments);

  return inputArr.reduce((a, b) => a + b);
}

// 2nd SOLUTION
function add2(...param: number): number {
  let total = 0;

  param.forEach(num => (total += num));

  return total;
}

console.log(add(1, 2));
console.log(add(3, 2));
console.log(add2(1, 2, 3, 4, 5));
console.log(add2(2, 3));
