{
  const allConstruct = (target: string, wordBank: string[]) => {
    const table: string[][][] = Array(target.length + 1)
      .fill(0)
      .map(() => []);
    table[0] = [[]];
    for (let i = 0; i <= target.length; i++) {
      if (table[i].length > 0) {
        for (const word of wordBank) {
          if (target.slice(i).startsWith(word)) {
            for (const subArray of table[i]) {
              table[i + word.length].push([...subArray, word]);
            }
          }
        }
      }
    }
    return table[target.length];
  };

  // [ [ 'purp', 'le' ], [ 'p', 'ur', 'p', 'le' ] ]
  console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));

  // [ [ 'abc', 'def' ] ]
  console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));

  // []
  console.log(
    allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
  );

  // []
  console.log(
    allConstruct("aaaaaaaaaaaaz", ["a", "aa", "aaa", "aaaa", "aaaaa"])
  );
}
