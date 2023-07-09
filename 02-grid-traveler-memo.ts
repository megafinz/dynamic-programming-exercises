{
  const gridTraveler = (
    m: number,
    n: number,
    memo: Record<number, number> = {}
  ) => {
    if (m === 0 || n === 0) {
      return 0;
    }
    if (m === 1 || n === 1) {
      return 1;
    }
    const key1 = `${m},${n}`;
    const key2 = `${n},${m}`;
    if (key1 in memo) {
      return memo[key1];
    } else if (key2 in memo) {
      return memo[key2];
    }
    const result = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
    memo[key1] = result;
    memo[key2] = result;
    return result;
  };

  console.log(gridTraveler(1, 1));
  console.log(gridTraveler(2, 3));
  console.log(gridTraveler(3, 2));
  console.log(gridTraveler(3, 3));
  console.log(gridTraveler(18, 18));
}
