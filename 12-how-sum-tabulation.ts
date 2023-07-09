{
  const howSum = (targetSum: number, numbers: number[]) => {
    const table: (number[] | null)[] = Array(targetSum + 1).fill(null);
    table[0] = [];
    for (let i = 0; i <= targetSum; i++) {
      const currArray = table[i];
      if (Array.isArray(currArray)) {
        for (const num of numbers) {
          // Bounds check.
          if (i + num <= targetSum) {
            table[i + num] = [...currArray, num];
          }
        }
      }
    }
    return table[targetSum];
  };

  // [2, 2, 3]
  console.log(howSum(7, [2, 3]));

  // [3, 4]
  console.log(howSum(7, [5, 3, 4, 7]));

  // null
  console.log(howSum(7, [2, 4]));

  // [3, 5]
  console.log(howSum(8, [2, 3, 5]));

  // null
  console.log(howSum(300, [7, 14]));
}
