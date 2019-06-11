// 1st SOLUTION
function alphabeticShift(inputString: string): string {
  const string: string = inputString.toLowerCase();
  let originCharCodes = [];
  let newCharCodes = [];
  let newCharacters = [];

  // Get originCharCodes
  string.split("").forEach(char => originCharCodes.push(char.charCodeAt()));

  // Add 1 to each charcode
  originCharCodes.forEach(charCode => {
    if (charCode === 122) {
      newCharCodes.push(97);
    } else {
      newCharCodes.push(charCode + 1);
    }
  });

  // Convert newCharCodes back to chars
  newCharCodes.forEach(charCode =>
    newCharacters.push(String.fromCharCode(charCode))
  );

  return newCharacters.join("");
}

// 2nd SOLUTION
function alphabeticShift2(inputString: string): string {
  return inputString
    .split("")
    .map(char => char.charCodeAt(0) + 1)
    .map(charCode => String.fromCharCode(charCode))
    .join("")
    .replace(/{/g, "a");
}

// 3d SOLUTION
function alphabeticShift3(inputString: string): string {
  let inputArray = inputString.split("");

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] == "z") {
      inputArray[i] = "a";
    } else {
      inputArray[i] = String.fromCharCode(inputArray[i].charCodeAt(0) + 1);
    }
  }
  return inputArray.join("");
}

console.log(alphabeticShift("crazy"));
console.log(alphabeticShift2("rupert"));
console.log(alphabeticShift3("zoltan"));
