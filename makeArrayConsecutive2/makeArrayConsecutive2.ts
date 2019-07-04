function makeArrayConsecutive2(statues: number[]): number {
  const max = Math.max(...statues);
  const min = Math.min(...statues);
  const completeArray = [];

  for (let i = min; i <= max; i++) {
    completeArray.push(i);
  }

  return completeArray.length - statues.length;
}

console.log(makeArrayConsecutive2([6, 2, 3, 8, 12]));
