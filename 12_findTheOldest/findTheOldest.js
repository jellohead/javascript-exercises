// sort through records and find the oldest person

const findTheOldest = function (array) {
  console.log(JSON.stringify(array));
  return array.reduce((oldestPerson, currentPerson) => {
    const oldestAge = getAge(array.oldestPerson);
    const currentAge = getAge(array.currentPerson);
    return oldestAge > currentAge ? oldestPerson : currentPerson;
  })
};

// determine age of person 
const getAge = function (current) {
  console.log("getAge current.yearOfDeath = " + current.yearOfDeath);

  if (yearOfDeath) {
    return (current.yearOfDeath - current.yearOfBirth);
  } else {
    return (new Date().getFullYear - current.yearOfBirth);
  }
}





// Do not edit below this line
module.exports = findTheOldest;


/*

const findTheOldest = function(array) {
  return array.reduce((oldest, currentPerson) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
    return oldestAge < currentAge ? currentPerson : oldest;
  })
};

const getAge = function(birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};

module.exports = findTheOldest;

*/
