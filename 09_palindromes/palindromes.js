const palindromes = inputWords => {
    let cleanedWords = inputWords.toLowerCase().replace(/[^a-z]/gi, '');
    console.log('cleanedWords = ' + cleanedWords);
    let reverseWords = cleanedWords.split("").reverse().join("");
    console.log('reverseWords = ' + reverseWords);
    return (cleanedWords === reverseWords ? true : false);
}

let inputWords = 'ZZZZ car, a man, a maracaz.';
console.log('inputWords = ' + inputWords);
console.log(palindromes(inputWords));

// Do not edit below this line
module.exports = palindromes;


// expect(palindromes('racecar!')).toBe(true);
// expect(palindromes('Racecar!')).toBe(true);
// expect(palindromes('A car, a man, a maraca.')).toBe(true);
// expect(palindromes('Animal loots foliated detail of stool lamina.')).toBe(true);
// expect(palindromes('ZZZZ car, a man, a maracaz.')).toBe(false);
