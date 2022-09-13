const reverseString = function () {
    const myString = "hello";
    const myArray = myString.split("");
    const myReverseArray = myArray.reverse();
    let myReverseString = myReverseArray.join("");
    return myReverseString;
};


// myString.split(""); put string into an array with 1 element at each index
// myArray.reverse();  reverse order of items in an array

// Do not edit below this line
module.exports = reverseString;

