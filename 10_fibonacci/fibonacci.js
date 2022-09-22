const fibonacci = function (inputValue) {

    let seriesTotal = 0,
        currentNumber = 0,
        nextNumber = 1;


    if (inputValue < 0) {
        return 'OOPS';
    } else {

        for (let i = 0; i < inputValue; i++) {

            seriesTotal = currentNumber + nextNumber;
            currentNumber = nextNumber;
            nextNumber = seriesTotal;

        }

        console.log(currentNumber);
        return currentNumber;
    }
};

let inputValue = "8";
console.log(typeof inputValue);

console.log(fibonacci(inputValue));

// Do not edit below this line
module.exports = fibonacci;

// expect(fibonacci(4)).toBe(3);
// expect(fibonacci(6)).toBe(8);
// expect(fibonacci(10)).toBe(55);
// expect(fibonacci(15)).toBe(610);
// expect(fibonacci(25)).toBe(75025);
// expect(fibonacci(-25)).toBe("OOPS");
// expect(fibonacci("1")).toBe(1);
// expect(fibonacci("2")).toBe(1);
// expect(fibonacci("8")).toBe(21);
