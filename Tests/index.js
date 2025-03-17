// Defining a Number Datatype in TS.
var myInteger = 7;
var negative = -8;
var myFloat = 8.657;
var zero = 0;
var infinity = Infinity;
var negativeInfinity = -Infinity;
console.log(myInteger + myFloat);
// Defining a String Data Type in TS.
var firstName = "John";
var secondName = "Doe";
var email = "John Doe";
var fullName = "".concat(firstName, " ").concat(secondName);
console.log(fullName);
//Boolean Data Types
var isTrue = true;
var isFalse = false;
var newName = true;
console.log(newName);
// Here, null can be assigned to any data type
var result = null;
// result = 5;
// result = 'hello';
// Type Any
var myVar = 55;
console.log(myVar);
myVar = "Good Morning";
console.log(myVar);
// Type Unknown
var myValue = 89;
console.log(myValue);
myValue = "TypeScript";
console.log(myValue);
myValue = [1, 4];
console.log(myValue);
myValue = { age: 15 };
console.log(myValue);
myValue = true;
console.log(myValue);
var employeeName = {
    firstName: "Francis",
    lastName: "Muraya",
    isAdmin: true,
};
// employeeName.isAdmin = false // Cannot assign to 'is Admin' because it it is a readonly property
console.log(employeeName);
var student = {
    firstName: "Jackline",
    lastName: "Jack",
    age: 20,
    course: "BBIT",
    yearOfStudy: 2,
};
console.log(student);
var pupil = /** @class */ (function () {
    function pupil(pupilName, pupilAge, pupilIndex, pupilMajor) {
        this.name = pupilName;
        this.age = pupilAge;
        this.index = pupilIndex;
        this.major = pupilMajor;
    }
    return pupil;
}());
var Muraya = new pupil("Muraya", 24, 5678, "BBIT");
console.log(Muraya);
var pizzaSize;
(function (pizzaSize) {
    pizzaSize[pizzaSize["small"] = 1000] = "small";
    pizzaSize[pizzaSize["medium"] = 1001] = "medium";
    pizzaSize[pizzaSize["large"] = 1002] = "large";
    pizzaSize[pizzaSize["extraLarge"] = 1003] = "extraLarge"; //3
})(pizzaSize || (pizzaSize = {}));
console.log(pizzaSize.small); //output: 0
console.log(pizzaSize.extraLarge); //output: 3
// let orderedPizzaSize: pizzaSize = 0;
// if (orderedPizzaSize === pizzaSize.small) {
//   console.log(`Pay $5`); //output: Pay $5
