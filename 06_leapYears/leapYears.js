const leapYears = function () {
    let year = 700;

    let checkDivByFour = year % 4;
    console.log("divide by four = " + checkDivByFour);
    let checkDivByHundred = year % 100;
    console.log("divide by hundred = " + checkDivByHundred);
    let checkDivByFourHundred = year % 400;
    console.log("divide by 400 = " + checkDivByFourHundred);

    if (checkDivByFour === 0 && (checkDivByHundred === 0 && checkDivByFourHundred === 0)) {
        resultOfCheck = true;
    } else {
        resultOfCheck = false;
    }

    return resultOfCheck;
};

// Do not edit below this line
module.exports = leapYears;


// expect(leapYears(1996)).toBe(true);
// expect(leapYears(1997)).toBe(false);
// expect(leapYears(34992)).toBe(true);
// expect(leapYears(1900)).toBe(false);
// expect(leapYears(1600)).toBe(true);
// expect(leapYears(700)).toBe(false);