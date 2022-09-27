// sort through records and find the oldest person

const findTheOldest = function (array) {
  console.log("findTheOldest array = " + JSON.stringify(array));
  return array.reduce((oldestPerson, currentPerson) => {
    const oldestAge = getAge(oldestPerson.yearOfDeath, oldestPerson.yearOfBirth);
    const currentAge = getAge(currentPerson.yearOfDeath, currentPerson.yearOfBirth);
    return oldestAge > currentAge ? oldestPerson : currentPerson;
  })
};

// determine age of person 
const getAge = function (death, birth) {
  console.log("death " + death + " birth " + birth)

  if (death) {
    return (death - birth);
  } else {
    return (new Date().getFullYear - birth);
  }
}





// Do not edit below this line
module.exports = findTheOldest;
