function depositProfit(
  deposit: number,
  rate: number,
  threshold: number
): string {
  let account = deposit;
  let years = 0;

  while (account < threshold) {
    account += account * (rate / 100);
    years++;
  }
  return `You will reach $${threshold} in ${years} years. By then your account will be $${account}`;
}

console.log(depositProfit(100, 20, 170));
