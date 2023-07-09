{
  const bestSum = (
    targetSum: number,
    numbers: number[],
    memo: Record<number, number[] | null> = {}
  ) => {
    if (targetSum < 0) {
      return null;
    }
    if (targetSum === 0) {
      return [];
    }
    if (targetSum in memo) {
      return memo[targetSum];
    }
    let bestResult: number[] | null = null;
    for (const num of numbers) {
      const subResult = bestSum(targetSum - num, numbers, memo);
      if (subResult) {
        const result = [...subResult, num];
        if (!bestResult || bestResult.length > result.length) {
          bestResult = result;
        }
      }
    }
    memo[targetSum] = bestResult;
    return bestResult;
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
