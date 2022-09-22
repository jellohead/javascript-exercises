const palindromes = inputWords => {
    let cleanedWords = inputWords.toLowerCase().replace(/[^a-z]/gi, '');
    console.log('cleanedWords = ' + cleanedWords);
    let reverseWords = cleanedWords.split("").reverse().join("");
    console.log('reverseWords = ' + reverseWords);
    return (cleanedWords === reverseWords ? true : false);
}

let inputWords = 'RaC=eca!*r';
console.log('inputWords = ' + inputWords);
console.log(palindromes(inputWords));

// Do not edit below this line
module.exports = palindromes;


// expect(palindromes('racecar!')).toBe(true);