function candies(n: number, m: number): number {
  const candy = Math.floor(m / n);

  return candy * n;
}

console.log(candies(3, 10));
