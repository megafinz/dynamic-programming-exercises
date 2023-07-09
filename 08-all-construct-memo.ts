{
  const allConstruct = (
    target: string,
    wordBank: string[],
    memo: Record<string, string[][]> = {}
  ) => {
    if (target in memo) {
      return memo[target];
    }
    if (target.length === 0) {
      return [[]];
    }
    const result: string[][] = [];
    for (const word of wordBank) {
      if (target.startsWith(word)) {
        const subResults = allConstruct(
          target.slice(word.length),
          wordBank,
          memo
        );
        result.push(...subResults.map((x) => [word, ...x]));
      }
    }
    memo[target] = result;
    return result;
  };

  console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
  console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
  console.log(
    allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
  );
  console.log(
    allConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
  );
  console.log(
    allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
      "e",
      "ee",
      "eee",
      "eeee",
      "eeeee",
      "eeeeeee",
    ])
  );
}
