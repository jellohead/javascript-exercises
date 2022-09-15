let tempF = -100;
let tempC = 73.2;
const ftoc = function () {
  let tempC = (tempF - 32) * 5 / 9;
  console.log("tempC = " + tempC + ". typeof = " + typeof tempC.toFixed(1));
  return +tempC.toFixed(1);
};

const ctof = function () {
  let tempF = tempC * 9 / 5 + 32;
  return +tempF.toFixed(1);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

// expect(ftoc(-100)).toEqual(-73.3);
// expect(ctof(0)).toEqual(32);
// expect(ctof(73.2)).toEqual(163.8);
// expect(ctof(-10)).toEqual(14);