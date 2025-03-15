# TypeScript Types

Types defines the shape of data, ensuring that values behave as expected throughout a program. 

## Why Use Types in TypeScript 
1. Prevents run time errors by catching issues during compile time.
2. Improve code readability and maintainability. 
3. Enables better tooling support including intellisense and auto-completions.


- When working with TypeScript, we usually want other developers working with us to also use TypeScript.

- Therefore we need a place to manage our dependencies which is a `package.json` file.

- If you don't have it in the project, run:

```
npm init -y
```

Then install TypeScript as a development dependency.

```
npm install typescript -D
```

- Inside our package.json we will see TypeScript added as a dependency.

Now lets proceed:
Create a file `index.ts` which will will write our code.

#### We can also run TypeScript in something called the `watch mode`.

Rather than running `tsc index.ts` you now run:

```ts
tsc index.ts -w
```

You add the `-w` which means watch mode.

TypeScript will be doing the compilation in watch mode.

Changes will be detected automatically.

- Open another terminal to execute TypeScript in watch mode. Where to run `node index.js`.

# 1. Primitive Types
Basic types that represent simple values and are immutable.

They are: Number, String, Boolean, Null and Undefined.

### a. Numbers
- Numeric Values: `eg:` -3, 0, 8, infinity, floats and -infinity.

- Use `number` keyword to define number data types in typescript.

```ts
const myInteger: number = 7;
const negative: number = -8;
const myFloat: number = 8.657;
const zero: number = 0;
const infinity: number = Infinity;
const negativeInfinity: number = -Infinity;
```

## b. Strings

Collection of characters enclosed within double, single quotes or back-ticks.

- Use `string` keyword to define a string data-type in TypeScript. 

```ts
const firstName: string = "John";
const secondName: string = "Doe";
const email: string = "John Doe";
const fullName: string = `${firstName} ${secondName}`;
```

When we run `tsc index.ts` a `index.js` code will be generated. 


## c.Booleans

Booleans can either be true or false.
- Use `boolean` keyword to define a `boolean data type` in TS. 

```ts
//Boolean Data Types

const isTrue: boolean = true;
const isFalse: boolean = false; 
```

## d. Null
- define something that is empty or non-existent.

- Null variables automatically get any data type.
- They can hold values of any data type. 

```ts
// Here, null can be assigned to any data type

let result = null;
result = 5;
result = 'hello';
```

To fix this, we use the `null` keyword for null  data types.

```ts
let result: null = null;
```

When we reassign the code above, it will throw an error.
The variable will never accept other data type expect null. 


## Undefined Data Type

- Used as a placeholder to mean a variable has been declared but has not yet been assigned a value but will have a value soon. 

It uses `undefined`  key word.


# 2. Top Types
- Top types can represent any value without causing a type error.

There are 2 top types in TypeScript.

## a. Any
- Allows you to assign any value to a variable and perform any operation on it without TS complaining.


```ts
// Type Any

let myVar: any = 55;
console.log(myVar);

myVar = "Good Morning";
console.log(myVar);
```

- Avoid using `any` type since it disables type checking making TypeScript useless. 

## b. Unknown

- It is like `any` but forces you to check the type before using it. 

```ts

// Type Unknown

let myValue: unknown = 89;
console.log(myValue);

myValue = 'TypeScript';
console.log(myValue);

myValue = [1,4];
console.log(myValue);

myValue = {age: 15};
console.log(myValue);

myValue = true;
console.log(myValue);

console.log(myValue.upperCase()) // This will throw an error since we cannot convert a boolean to uppercase.
```

- `unknown` checks the type of a variable before using it.

# 3. Bottom Types
- Represents a value that never exists or never occur.
- The only bottom type in TypeScript is `never`.

- Used in situations where a value can never be observed. 

This usually happens in:

1. Functions that never return eg.(infinite loops and errors.)

2. Exhaustive switch case handling.

3. Unreachable Code.


# 4. Object Types

- They define the shape of complex values such as:

## a. Interface -define shape of an object structure.

- Used for type checking objects and enforcing consistency.

```ts
interface User {
  firstName: string;
  lastName: string;
  age?: number;
  isAdmin: boolean;
}

let employeeName: User = {
  firstName: "Francis",
  lastName: "Muraya",
  age: 24,
  isAdmin: true
}

console.log(employeeName);

```

We use `?` to make a value optional. For instance code above, age is optional.


## b. Class - defines blue prints for creating objects.

## c. Enum - represent a set of named constant values.

## d. Array - a set of elements that are of the same type. 

## e. Represent an ordered list of elements with fixed types and lengths.





