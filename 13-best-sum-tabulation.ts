{
  const bestSum = (targetSum: number, numbers: number[]) => {
    const table: (number[] | null)[] = Array(targetSum + 1).fill(null);
    table[0] = [];
    for (let i = 0; i <= targetSum; i++) {
      const currArray = table[i];
      if (Array.isArray(currArray)) {
        for (const num of numbers) {
          // Bounds check.
          if (i + num <= targetSum) {
            const targetArray = table[i + num];
            if (!targetArray || targetArray.length > currArray.length) {
              table[i + num] = [...currArray, num];
            }
          }
        }
      }
    }
    return table[targetSum];
  };

  // [7]
  console.log(bestSum(7, [5, 3, 4, 7]));

  // [3, 5]
  console.log(bestSum(8, [2, 3, 5]));

  // [4, 4]
  console.log(bestSum(8, [1, 4, 5]));

  // [25, 25, 25, 25]
  console.log(bestSum(100, [1, 2, 5, 25]));
}
