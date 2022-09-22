const palindromes = inputWords => {
    let reverseWords = inputWords.split("").reverse().join("");
    console.log(reverseWords);
    return (inputWords === reverseWords ? true : false);
}

let inputWords = 'racecar';
console.log(palindromes(inputWords));

// Do not edit below this line
module.exports = palindromes;
