let tempF = 32;
let tempC = 0;
const ftoc = function () {
  // let tempF = 32;
  let tempF = (tempC - 32) * 5 / 9;
  return tempC;
};

const ctof = function () {

  let tempC = tempF * 9 / 5 + 32;
  return tempF;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
