const palindromes = inputWords => {
    let cleanedWords = inputWords.toLowerCase().replace(/[^a-z]/gi, '');
    console.log('cleanedWords = ' + cleanedWords);
    let reverseWords = cleanedWords.split("").reverse().join("");
    console.log('reverseWords = ' + reverseWords);
    return (cleanedWords === reverseWords ? true : false);
}

let inputWords = 'A car, a man, a maraca.';
console.log('inputWords = ' + inputWords);
console.log(palindromes(inputWords));

// Do not edit below this line
module.exports = palindromes;


// expect(palindromes('racecar!')).toBe(true);
// expect(palindromes('Racecar!')).toBe(true);
// expect(palindromes('A car, a man, a maraca.')).toBe(true);