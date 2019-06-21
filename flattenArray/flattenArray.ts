function flattenArray(arr: any[]): any[] {
  const flatArray = [];

  flatten(arr);

  function flatten(arr: any[]) {
    arr.forEach(element => {
      if (Array.isArray(element)) {
        flatten(element);
      } else {
        flatArray.push(element);
      }
    });
  }
  return flatArray;
}

console.log(flattenArray([[["a"]], [["b"]]]));
console.log(flattenArray([1, [2], [3, [[4]]]]));
