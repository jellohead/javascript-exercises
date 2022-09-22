const fibonacci = function (inputNumber) {

    let seriesTotal = 0,
        currentNumber = 0,
        nextNumber = 1;

    if (inputNumber < 0) {
        return 'OOPS';
    } else {

        for (let i = 0; i < inputNumber; i++) {

            seriesTotal = currentNumber + nextNumber;
            currentNumber = nextNumber;
            nextNumber = seriesTotal;

        }

        console.log(currentNumber);
        return currentNumber;
    }
};

let inputNumber = -25;
console.log(fibonacci(inputNumber));

// Do not edit below this line
module.exports = fibonacci;

// expect(fibonacci(4)).toBe(3);
// expect(fibonacci(6)).toBe(8);
// expect(fibonacci(10)).toBe(55);
// expect(fibonacci(15)).toBe(610);
// expect(fibonacci(25)).toBe(75025);
// expect(fibonacci(-25)).toBe("OOPS");
