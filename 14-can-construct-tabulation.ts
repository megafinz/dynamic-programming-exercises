{
  const canConstruct = (target: string, wordBank: string[]) => {
    const table: boolean[] = Array(target.length + 1).fill(false);
    table[0] = true;
    for (let i = 0; i <= target.length; i++) {
      if (table[i]) {
        for (const word of wordBank) {
          if (target.slice(i).startsWith(word)) {
            table[i + word.length] = true;
          }
        }
      }
    }
    return table[target.length];
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
