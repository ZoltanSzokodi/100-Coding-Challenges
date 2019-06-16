function electionsWinners(votes: number[], k: number): number {
  const sortedVotes = votes.sort((a, b) => b - a);
  let count = 1;

  // Check if all votes are equal and no more votes left
  const checkForTie = new Set(sortedVotes);

  if (checkForTie.size === 1) {
    return 0;
  } else {
    for (let i = 1; i < sortedVotes.length; i++) {
      if (sortedVotes[i] + k > Math.max(...sortedVotes)) {
        count++;
      }
    }
  }

  return count;
}

console.log(electionsWinners([2, 3, 5, 2], 3));
console.log(electionsWinners([2, 5, 5, 1], 3));
console.log(electionsWinners([1, 2, 3, 4], 3));
console.log(electionsWinners([2, 2], 0));
