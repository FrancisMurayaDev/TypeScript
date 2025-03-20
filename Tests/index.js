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
    pizzaSize[pizzaSize["small"] = 0] = "small";
    pizzaSize[pizzaSize["medium"] = 1] = "medium";
    pizzaSize[pizzaSize["large"] = 2] = "large";
    pizzaSize[pizzaSize["extraLarge"] = 3] = "extraLarge";
})(pizzaSize || (pizzaSize = {}));
console.log(pizzaSize.small); //output: 0
console.log(pizzaSize.extraLarge); //output: 3
var orderedPizzaSize = 0;
if (orderedPizzaSize === pizzaSize.small) {
    console.log("Pay $5"); //output: Pay $5
}
var shortSize;
(function (shortSize) {
    shortSize["Small"] = "Small";
    shortSize["Medium"] = "Medium";
    shortSize["Large"] = "Large";
    shortSize["ExtraLarge"] = "ExtraLarge";
})(shortSize || (shortSize = {}));
console.log(shortSize.Small); //Small
console.log(shortSize.Large); // Large
var luckynumbers = [10, 45, 43, 32, 34, 67];
console.log(luckynumbers);
var myItems = [4, true, "Milk"];
console.log(myItems); // [4, true, 'Milk']
//This array can hold a string, a number and a boolean
var userInfo = ["John", 34, true];
console.log(userInfo);
// specify number of arrays and data types positions in the array.
// We can also have named Tuples.
var borderBox = ["2px", "solid", "purple"];
console.log(borderBox); // ['2px', 'solid', 'purple']
var border;
border = ["2px", "solid"];
console.log(border);
var message = "Hell TypeScript"; // Inferred as a string.
var count = 10; //Inferred as a number.
console.log(message);
console.log(count);
var myString = "Hello World";
myString;
console.log(myString.length);
