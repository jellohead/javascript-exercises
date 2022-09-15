let a = 10,
  b = 3,
  answer = 0;
const myArray = [2, 4, 6, 8, 10, 12, 14];

const add = function () {
  answer = a + b;
  return answer;
};

const subtract = function () {
  answer = a - b;
  return answer;
};

const sum = function () {
  for (let i = 0; i < myArray.length; i++) {
    answer += myArray[i];
  }
  return answer;
};

const multiply = function () {
  answer = myArray[0];
  for (i = 1; i < myArray.length; i++) {
    console.log("answer at index[" + i + "] = " + answer);
    answer = answer * myArray[i];
  }
  console.log(answer);
  return answer;

};

const power = function () {
  answer = a ** b;
  return answer;

};

const factorial = function () {
  console.log("a = " + a);
  if (a === 0) {
    answer = 1;
    console.log("answer = " + answer);
    return answer;
  } else {
    answer = 1;
    for (i = 1; i <= a; i++) {
      console.log("i = " + i)
      answer = answer * i;
      console.log("answer in for loop = " + answer);
    }
    return answer;
  }
  // console.log("answer = " + answer);
  // return answer;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

// expect(calculator.add(0,0)).toBe(0);
// expect(calculator.add(2, 2)).toBe(4);
// expect(calculator.add(2, 6)).toBe(8);
// expect(calculator.subtract(10, 4)).toBe(6);
// expect(calculator.sum([])).toBe(0);
// expect(calculator.sum([7])).toBe(7);
// expect(calculator.sum([7, 11])).toBe(18);
// expect(calculator.sum([1, 3, 5, 7, 9])).toBe(25);
// expect(calculator.multiply([2, 4])).toBe(8);
// expect(calculator.multiply([2, 4, 6, 8, 10, 12, 14])).toBe(645120);
// expect(calculator.power(4, 3)).toBe(64); // 4 to third power is 64
// expect(calculator.factorial(0)).toBe(1); // 0! = 1
// expect(calculator.factorial(1)).toBe(1);
// expect(calculator.factorial(2)).toBe(2);
// expect(calculator.factorial(5)).toBe(120);
// expect(calculator.factorial(10)).toBe(3628800);