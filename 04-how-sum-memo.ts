{
  const howSum = (
    targetSum: number,
    numbers: number[],
    memo: Record<number, number[] | null> = {}
  ) => {
    if (targetSum === 0) {
      return [];
    }
    if (targetSum < 0) {
      return null;
    }
    if (targetSum in memo) {
      return memo[targetSum];
    }
    for (const num of numbers) {
      const result = howSum(targetSum - num, numbers, memo);
      if (result) {
        memo[targetSum] = [...result, num];
        return memo[targetSum];
      }
    }
    memo[targetSum] = null;
    return null;
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
