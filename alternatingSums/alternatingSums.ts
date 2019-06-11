// 1st SOLUTION
function alternatingSums(a: number[]): number[] {
  const oddIndexSums = a
    .filter((num, i) => i % 2 !== 0)
    .reduce((a, b) => a + b);

  const evenIndexSums = a
    .filter((num, i) => i % 2 === 0)
    .reduce((a, b) => a + b);

  return [evenIndexSums, oddIndexSums];
}

// 2nd SOLUTION
function alternatingSums2(a: number[]): number[] {
  let oddSum = 0;
  let evenSum = 0;

  a.forEach((num, index) => {
    if (index % 2 === 0) {
      evenSum += num;
    } else {
      oddSum += num;
    }
  });
  return [evenSum, oddSum];
}

console.log(alternatingSums([50, 60, 60, 45, 70]));
console.log(alternatingSums2([110, 68, 72, 88, 56]));
