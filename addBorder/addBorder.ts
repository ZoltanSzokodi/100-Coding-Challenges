function addBorder(picture: string[]): string[] {
  const wall = "*".repeat(picture[0].length + 2);

  picture.push(wall);
  picture.unshift(wall);

  for (let i = 1; i < picture.length - 1; i++) {
    picture[i] = "*".concat(picture[i], "*");
  }

  return picture;
}

console.log(addBorder(["abc", "eat" "ded"]));
