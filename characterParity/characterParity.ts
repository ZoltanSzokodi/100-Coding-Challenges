function characterParity(symbol: string): string {
  const result = parseInt(symbol);

  return isNaN(result) ? "not a digit" : result % 2 === 0 ? "even" : "odd";
}

console.log(characterParity("<"));
console.log(characterParity("8"));
console.log(characterParity("q"));
console.log(characterParity("3"));
console.log(characterParity("85"));
