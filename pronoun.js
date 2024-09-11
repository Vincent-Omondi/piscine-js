const pronoun = (str) => {
    const pronouns = ['i', 'you', 'he', 'she', 'it', 'they', 'we'];
    const result = {};
  
    // Convert string to lowercase and split into words
    const words = str.toLowerCase().split(/\s+/);
  
    words.forEach((word, index) => {
      if (pronouns.includes(word)) {
        if (!result[word]) {
          result[word] = { word: [], count: 0 };
        }
        
        result[word].count++;
  
        // Check if there's a next word and it's not another pronoun
        if (index + 1 < words.length && !pronouns.includes(words[index + 1])) {
          if (!result[word].word.includes(words[index + 1])) {
            result[word].word.push(words[index + 1]);
          }
        }
      }
    });
  
    return result;
};

// console.log(pronoun('Using Array Destructuring, you you can iterate through objects easily.'));
// // Output: { you: { word: ['can'], count: 2 } }

// console.log(pronoun('If he you want to buy something you have to pay.'));
// // Output: { he: { word: [], count: 1 }, you: { word: ['want', 'have'], count: 2 } }