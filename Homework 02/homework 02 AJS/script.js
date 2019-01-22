let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1; // because 0 is January
let year = date.getFullYear();

function Person(_firstName, _lastName, _dateOfBirth, _placeOfBirth) {

    this.firstName = _firstName;
    this.lastName = _lastName;
    this.dateOfBirth = _dateOfBirth;
    this.placeOfBirth = _placeOfBirth;
    this.details = function () {
        return _firstName + " " + _lastName + " is born in " + _placeOfBirth;
    };
    this.calculateAge = function (_day, _month, _year) {
        if ((month - _month + 10) > month) {
            return (year - _year) - 1 + " Years " + (month - _month + 10) + " Months " + (day - _day) + " Days"
        }
        else {
            return (year - _year) + " Years " + (month - _month + 10) + " Months " + (day - _day) + " Days"
        };

    };

    // Bonus za calculateAge od Dejan 
    this.calculateAge2 = function (_yearOld) {
        return (year - _yearOld) + " Years " + (year - _yearOld) * 12 + " Months " + (year - _yearOld) * 365 + " Days"
    };
};

let person1 = new Person("Petko", "Ristov", 1988, "Skopje");
let person2 = new Person("Stanko", "Stankov", 1954, "Skopje");
let person3 = new Person("Ranko ", "Rankov", 1993, "Skopje");
let person4 = new Person("Elena ", "Ristova", 1999, "Skopje");
let person5 = new Person("Katerina ", "Stankova", 1984, "Skopje");

// TESTING ...........

console.log(person1, person1.details())
console.log(person1.calculateAge(04, 08, 1991));
console.log(person1.calculateAge2(1991));


let memberArray = [];
let bornYearOfMembers = [];
memberArray.push(person1, person2, person3, person4, person5);
memberArray.forEach(element => {
    bornYearOfMembers.push(element.dateOfBirth);
});
    // Function for get the sum from the array 
function getSum(total, num) {
    return total + num;
}

let yearsOfMembers = [];
bornYearOfMembers.forEach(element => {
    let yearsNow = year - element
    yearsOfMembers.push(yearsNow)
})

function Family(_familyMembers) {

    this.familyMembers = _familyMembers;
    this.calculateSum = function () {
        return 'The sum of all year is ' + yearsOfMembers.reduce(getSum)
    };
    this.calculateAverage = function () {
        return ` The average years of all family members is ` + yearsOfMembers.reduce(getSum) / yearsOfMembers.length
    };
};

let familyMemer = new Family(memberArray);


// Testing. ..........
console.log(familyMemer.familyMembers,familyMemer.calculateSum());
console.log(familyMemer.calculateAverage());
