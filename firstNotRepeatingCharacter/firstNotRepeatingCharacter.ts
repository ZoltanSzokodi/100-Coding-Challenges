// 1st SOLUTION
function firstNotRepeatingCharacter(s: string): string {
  const toArray = Array.from(s);
  const obj = {};

  for (let i = 0; i < s.length; i++) {
    if (!obj[s[i]]) {
      obj[s[i]] = 1;
    } else {
      obj[s[i]]++;
    }
  }

  for (let j in obj) {
    if (obj[j] === 1) {
      return j;
    }
  }

  console.log(toArray);
  console.log(obj);

  return "_";
}

console.log(firstNotRepeatingCharacter("abacaxbad"));
console.log(firstNotRepeatingCharacter("abacabaabacaba"));
