


// -----------------------------------------------------------------------------------

//  HomeWork 1.0 Reverse number

function revers(x) {
    return x.toString().split('').reverse().join('')
}
console.log(revers(1234))




// -----------------------------------------------------------------------------------
// HomeWork 2.0 Combinations of String

function combinaton(word) {

    let myArray = [];
    for (let i = 0; i < word.length; i++) {
        for (let y = 0; y <= word.length; y++) {
            if (word.substring(i, y) != '')
                myArray.push(word.substring(i, y));
        }
    }
    return Array.from(new Set(myArray)).join('\n');
}

console.log(combinaton("cat"))


// -----------------------------------------------------------------------------------
// HomeWork 3.0 Longest String


function longestString(theString) {

    let stringSplit = theString.split(' ');

    let longestWord = stringSplit.reduce(function (longest, current) {
        if (current.length > longest.length) {
            return current
        }
        else {
            return longest
        };
    });
    return longestWord;

}

console.log(longestString("Web Development Tutorial"));
