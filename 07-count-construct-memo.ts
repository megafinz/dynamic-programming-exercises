{
  const countConstruct = (
    target: string,
    wordBank: string[],
    memo: Record<string, number> = {}
  ) => {
    if (target.length === 0) {
      return 1;
    }
    if (target in memo) {
      return memo[target];
    }
    let result = 0;
    for (const word of wordBank) {
      if (target.startsWith(word)) {
        result += countConstruct(target.slice(word.length), wordBank, memo);
      }
    }
    memo[target] = result;
    return result;
  };

  // 2
  console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));

  // 1
  console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));

  // 0
  console.log(
    countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
  );

  // 4
  console.log(
    countConstruct("enterapotentpot", [
      "a",
      "p",
      "ent",
      "enter",
      "ot",
      "o",
      "t",
    ])
  );

  // 0
  console.log(
    countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
      "e",
      "ee",
      "eee",
      "eeee",
      "eeeee",
      "eeeeeee",
    ])
  );
}
