// Exercise 01  Write a function that will clean up an array, and return the cleaned up value.

let myArray = [NaN, false, 2, 4, 55, "", NaN, undefined];
let cleanArray = [];
function clean(myArray) {
    myArray.filter(function (x) {
        if (x === 0 || x)
            return cleanArray.push(x)
    })
}

clean(myArray)
console.log(myArray);
console.log(cleanArray);

// Exercise 02 Write a JavaScript function to convert an amount to coins.

let coins = [25, 10, 5, 2, 1];
let result = [];
function convert(value) {
    for (i in coins) {
        while (value >= coins[i]) {
            result.push(coins[i]);
            value -= coins[i];

        }
    }
};

convert(46);
console.log('46 ' + ' in coins ' + result)


// Exercise 03 Find all descendants for a given family member (recursive)

const familyTree = [{
    name: "Oliver",
    lastname: "Stones",
    childrens: [
        {
            name: "Viktor",
            lastname: "Stones",
            childrens: []
        },
        {
            name: "Suzan",
            lastname: "Sloun",
            childrens: [
                {
                    name: "Oliver jr",
                    lastname: "Sloun",
                    childrens: [
                        {
                            name: "Alexandar",
                            lastname: "Sloun",
                            childrens: [
                                {
                                    name: "Suzie",
                                    lastname: "Sloun",
                                    childrens: []
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Alex",
                    lastname: "Sloun",
                    childrens: [
                        {
                            name: "Gabriel",
                            lastname: "Sloun",
                            childrens: [
                                {
                                    name: "Gabriela",
                                    lastname: "Sloun",
                                    childrens: []
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}];

// recursive function 
function recursion(firstName, lastName, tree, flagPrint) {
    for (var i = 0; i < tree.length; i++) {
        var element = tree[i];
        if (flagPrint == true) {
            console.log(element.name + " " + element.lastname);
        }
        if (element.name == firstName && element.lastname == lastName) {
            recursion(firstName, lastName, element.childrens, true);
        }
        else {
            recursion(firstName, lastName, element.childrens, flagPrint)
        }
    }
}
// testing 
recursion("Oliver", "Stones", familyTree, true);
recursion("Alex", "Sloun", familyTree, true);



// Exercise 04 BONUS find the missing numbers.

let mainArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
    32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 57, 58, 59, 60, 61, 62, 63, 64, 65,
    66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99];
let counting = 99;
let missingNumbers = [];

for (let i = 0; i <= counting; i++) {
    if (mainArray.indexOf(i) === -1) {
        missingNumbers.push(i);
    }
};

// checking result

console.log('Missing numbers are ' + missingNumbers);

