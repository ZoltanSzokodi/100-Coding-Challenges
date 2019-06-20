// 1st SOLUTION
function findEmailDomain(address: string): string {
  let domain = "";

  for (let i = address.length - 1; i >= 0; i--) {
    if (address[i] !== "@") {
      domain += address[i];
    } else {
      break;
    }
  }
  return domain
    .split("")
    .reverse()
    .join("");
}

// 2nd SOLUTION
function findEmailDomain2(address: string): string {
  return address.slice(address.lastIndexOf("@") + 1);
}

console.log(findEmailDomain("prettyandsimple@example.com"));
console.log(findEmailDomain('<>[]:,;@"!#$%&*+-/=?^_{}| ~.a"@example.org'));

console.log(findEmailDomain2("prettyandsimple@example.com"));
console.log(findEmailDomain2('<>[]:,;@"!#$%&*+-/=?^_{}| ~.a"@example.org'));
