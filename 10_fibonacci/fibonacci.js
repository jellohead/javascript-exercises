const fibonacci = function (inputNumber) {

    let seriesTotal = 0,
        currentNumber = 0,
        nextNumber = 1;


    for (let i = 0; i < inputNumber; i++) {

        seriesTotal = currentNumber + nextNumber;
        currentNumber = nextNumber;
        nextNumber = seriesTotal;

    }
    console.log(currentNumber);
    return currentNumber;
};

let inputNumber = 6;
console.log(fibonacci(inputNumber));

// Do not edit below this line
module.exports = fibonacci;

// expect(fibonacci(4)).toBe(3);
// expect(fibonacci(6)).toBe(8);

