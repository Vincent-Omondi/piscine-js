export const generateLetters = () => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const totalLetters = 120;
  
    for (let i = 0; i < totalLetters; i++) {
      const letter = document.createElement('div');
      
      // Random letter from the alphabet
      letter.textContent = alphabet[Math.floor(Math.random() * alphabet.length)];
      
      // Font size from 11px to 130px
      const fontSize = 11 + (130 - 11) * (i / (totalLetters - 1));
      letter.style.fontSize = `${Math.round(fontSize)}px`;
      
      // Font weight
      if (i < totalLetters / 3) {
        letter.style.fontWeight = '300';
      } else if (i < 2 * totalLetters / 3) {
        letter.style.fontWeight = '400';
      } else {
        letter.style.fontWeight = '600';
      }
  
      document.body.appendChild(letter);
    }
  };