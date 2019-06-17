// 1st SOLUTION
function fancyRide(l: number, fares: number[]): string {
  const maxCost = 20;
  const uberCars = {
    0: "UberX",
    1: "UberXL",
    2: "UberPlus",
    3: "UberBlack",
    4: "UberSUV"
  };

  const prices = fares.map(price => price * l);
  const affordableRides = prices.filter(val => val < maxCost);
  const myRide = Math.max(...affordableRides);

  return uberCars[prices.indexOf(myRide)];
}

// 2nd SOLUTION
function fancyRide2(l: number, fares: number[]): string {
  const uberCars = {
    0: "UberX",
    1: "UberXL",
    2: "UberPlus",
    3: "UberBlack",
    4: "UberSUV"
  };

  for (let i = fares.length - 1; i >= 0; i--) {
    if (fares[i] * l <= 20) {
      return uberCars[i];
    }
  }
}

console.log(fancyRide(30, [0.3, 0.5, 0.7, 1, 1.3]));
console.log(fancyRide2(30, [0.3, 0.5, 0.7, 1, 1.3]));
