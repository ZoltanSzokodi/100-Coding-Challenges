// 1st SOLUTION
function factorializeANumber(num: number): number {
  const myArr = [];

  for (let i = 1; i <= num; i++) {
    myArr.push(i);
  }

  return myArr.reduce((a, b) => a * b);
}

// 2nd SOLUTION
function factorializeANumber2(num: number): number {
  let total = 1;

  for (let i = 1; i <= num; i++) {
    total *= i;
  }

  return total;
}

console.log(factorializeANumber(5));
console.log(factorializeANumber(10));

console.log(factorializeANumber2(5));
console.log(factorializeANumber2(10));
