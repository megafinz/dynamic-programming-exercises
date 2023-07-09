{
  const canConstruct = (
    target: string,
    wordBank: string[],
    memo: Record<string, boolean> = {}
  ) => {
    if (target.length === 0) {
      return true;
    }
    if (target in memo) {
      return memo[target];
    }
    for (const word of wordBank) {
      if (
        target.startsWith(word) &&
        canConstruct(target.slice(word.length), wordBank, memo)
      ) {
        memo[target] = true;
        return true;
      }
    }
    memo[target] = false;
    return false;
  };

  // true
  console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));

  // false

  console.log(
    canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
  );

  // true
  console.log(
    canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
  );

  // false
  console.log(
    canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
      "e",
      "ee",
      "eee",
      "eeee",
      "eeeee",
      "eeeeeee",
    ])
  );
}
