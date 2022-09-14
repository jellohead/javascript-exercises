const removeFromArray = function () {
    const myArray = [1, 2, 3, 4];
    // let myIndex = myArray.indexOf(3);
    // console.log("myIndex = " + myIndex);
    // console.log("myArray element at myIndex = " + myArray[myIndex]);
    // newArray = myArray.splice(myIndex, 1);

    let newArray = myArray.filter(function (value, index, arr) {
        return (value != 3) && (value != 2);
    });
    console.log("newArray = " + newArray);
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
