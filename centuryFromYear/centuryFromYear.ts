function centuryFromYear(year: number): number {
  // const yearHundred: number = year / 100;
  // const century = Math.ceil(yearHundred);

  // return century;
  return Math.ceil(year / 100);
}

console.log(centuryFromYear(1502));
console.log(centuryFromYear(1701));
