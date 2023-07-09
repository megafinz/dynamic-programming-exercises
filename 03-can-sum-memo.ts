{
  const canSum = (
    targetSum: number,
    numbers: number[],
    memo: Record<number, boolean> = {}
  ) => {
    if (targetSum === 0) {
      return true;
    }
    if (targetSum < 0) {
      return false;
    }
    if (targetSum in memo) {
      return memo[targetSum];
    }
    for (const num of numbers) {
      if (canSum(targetSum - num, numbers, memo)) {
        memo[targetSum] = true;
        return true;
      }
    }
    memo[targetSum] = false;
    return false;
  };

  // true
  console.log(canSum(7, [2, 3]));

  // true
  console.log(canSum(7, [5, 3, 4, 7]));

  // false
  console.log(canSum(7, [2, 4]));

  // true
  console.log(canSum(8, [2, 3, 5]));

  // false
  console.log(canSum(300, [7, 14]));
}
