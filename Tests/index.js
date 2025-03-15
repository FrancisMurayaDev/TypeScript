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
myValue = 'TypeScript';
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
    isAdmin: true
};
console.log(employeeName);
