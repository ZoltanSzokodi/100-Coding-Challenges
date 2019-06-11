function areEquallyStrong(
  yourLeft: number,
  yourRight: number,
  friendsLeft: number,
  friendsRight: number
): boolean {
  let strength1 = yourLeft + yourRight;
  let strength2 = friendsLeft + friendsRight;

  if (strength1 !== strength2) {
    return false;
  } else {
    return true;
  }
}

console.log(areEquallyStrong(10, 15, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 9));
