// sort through records and find the oldest person

const findTheOldest = function (array) {
  return array.reduce((oldestPerson, currentPerson) => {
    console.log("compare " + oldestPerson.name + " to " + currentPerson.name);

    const oldestAge = getAge(oldestPerson.yearOfDeath, oldestPerson.yearOfBirth);
    const currentAge = getAge(currentPerson.yearOfDeath, currentPerson.yearOfBirth);
    return oldestAge > currentAge ? oldestPerson : currentPerson;
  })
};

// determine age of person 
const getAge = function (death, birth) {
  console.log("death " + death + " birth " + birth)

  if (typeof death === 'undefined') {
    death = new Date().getFullYear();
    console.log("year of death or current year is " + new Date().getFullYear());
  }
  return death - birth;
}





// Do not edit below this line
module.exports = findTheOldest;
