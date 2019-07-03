function lateRide(n: number): number {
  let timeStr = "";

  if (n % 60 === 0) {
    return n / 60;
  } else if (n % 60 !== 0) {
    timeStr = Math.floor(n / 60).toString() + (n % 60);
  }

  return timeStr
    .split("")
    .map(val => parseInt(val))
    .reduce((a, b) => a + b);

  console.log(timeStr);
  console.log(n % 60);
  console.log(n / 60);
}

console.log(lateRide(240));
console.log(lateRide(808));
