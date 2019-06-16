function evenDigitsOnly(n: number): boolean {
  const stringArray = n.toString().split("");

  return stringArray.every(number => parseInt(number) % 2 === 0);
}

console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(642386));
