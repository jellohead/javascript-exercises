const findTheOldest = function (array) {
    return array.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        return oldestAge < currentAge ? currentPerson : oldest;
    })
};


const getAge = function (birth, death) {
    if (!death) {
        death = new Date().getFullYear();
        console.log(death);
    }
    return death - birth;
};

// calculate the age

// sort ages to return object for oldest person

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
