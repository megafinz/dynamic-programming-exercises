{
  const countConstruct = (target: string, wordBank: string[]) => {
    const table: number[] = Array(target.length + 1).fill(0);
    table[0] = 1;
    for (let i = 0; i <= target.length; i++) {
      if (table[i] > 0) {
        for (const word of wordBank) {
          if (target.slice(i).startsWith(word)) {
            table[i + word.length] += table[i];
          }
        }
      }
    }
    return table[target.length];
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
