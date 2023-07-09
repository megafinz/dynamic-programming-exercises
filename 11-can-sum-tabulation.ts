{
  const canSum = (targetSum: number, numbers: number[]) => {
    const table: boolean[] = Array(targetSum + 1).fill(false);
    table[0] = true;
    for (let i = 0; i <= targetSum; i++) {
      // If current value is "true", then current value + num is also "true".
      if (table[i]) {
        for (const num of numbers) {
          // Bounds check.
          if (i + num <= targetSum) {
            table[i + num] = true;
          }
        }
      }
    }
    return table[table.length - 1];
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
