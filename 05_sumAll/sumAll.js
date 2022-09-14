const sumAll = function () {
    let firstValue = 10;
    let secondValue = [90, 1];
    let startValue;
    let endValue;
    let i = 0;
    let mySum = 0;

    if (typeof firstValue != "number" || typeof secondValue != "number") {
        return ('ERROR');
    } else if (firstValue < 0 || secondValue < 0) {
        return ('ERROR');
    } else if (firstValue > secondValue) {
        startValue = secondValue;
        endValue = firstValue;
    }

    for (i = startValue; i <= endValue; i++) {
        mySum += i;
        console.log(i);
    }

    console.log(mySum);
    return mySum;

}

// Do not edit below this line
module.exports = sumAll;


// expect(sumAll(1, 4)).toEqual(10);
// expect(sumAll(1, 4000)).toEqual(8002000);
// expect(sumAll(123, 1)).toEqual(7626);
// expect(sumAll(-10, 4)).toEqual('ERROR');
// expect(sumAll(10, "90")).toEqual('ERROR');
// expect(sumAll(10, [90, 1])).toEqual('ERROR');