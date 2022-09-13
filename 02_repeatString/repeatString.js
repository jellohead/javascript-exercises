const repeatString = function (number) {
    //let n = number;
    const myArray = [];
    let response = "";


    if (number < 0) {
        return response = 'ERROR';
    }

    for (let i = 0; i < number; i++) {
        myArray.push("hey");
    }

    response = myArray.toString()
    response = response.replaceAll(",", "");
    return response;
};

// Do not edit below this line
module.exports = repeatString;
