// 1st SOLUTION
function arrayReplace(
  inputArray: number[],
  elemToReplace: number,
  substitutionElem: number
): number[] {
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === elemToReplace) {
      inputArray[i] = substitutionElem;
    }
  }
  return inputArray;
}

// 2nd SOLUTION
function arrayReplace2(
  inputArray: number[],
  elemToReplace: number,
  substitutionElem: number
): number[] {
  inputArray.forEach((val, index) => {
    if (val === elemToReplace) {
      inputArray[index] = substitutionElem;
    }
  });
  return inputArray;
}

// 3d SOLUTION
function arrayReplace3(inputArray, elemToReplace, substitutionElem) {
  return inputArray.map(elem => {
    if (elem === elemToReplace) {
      return substitutionElem;
    } else {
      return elem;
    }
  });
}

console.log(arrayReplace([1, 2, 1], 1, 3));
console.log(arrayReplace2([1, 2, 1, 5, 8, 1, 5, 3, 1], 1, 10));
console.log(arrayReplace3([1, 2, 1, 5, 8, 1, 5, 3, 1], 1, 10));
