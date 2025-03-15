# TypeScript

- It is a statically typed language.
- Was designed and currently maintained by microsoft.
- Its a superset of JS and not a replacement.
- All features available in JS exist in TS. 
- TS allows type error checking at compile time.
- TS is compiled to JS which is understandable by the browser.

## Dynamic vs Static Typing

Major programming languages can either be classified as dynamically or statically typed. 
### Dynamically Typed

- Dynamically typed means the type of variable can change at run time.
- Data types are declared at runtime meaning you don't have to explicitly declare variable types. 
 - Example: JavaScript, Python, PHP etc.

 Example in JS.

 ```js
 let x = 5; //x is a number
 let x = "Good morning"; //x is now a string (no error)
 console.log(x); // Output: Good morning
 ```

### Statically Typed

- Type of variable cannot change once declared.
- Data types are checked at compile time meaning you must explicitly declare variable types.

Example of statically typed variables include: TypeScript, Java, C++, Swift, C# e.t.c.

Example in TS:

```ts
let x:number = 5; // x is explicitly declared to a number
x = "Good Morning"; //Error. Type string is not assigned to type number.
```

Inferring is where TS knows the type of a data type of a variable based on the initial assigned value.


## JavaScript vs TypeScript

1. JS is dynamically typed while JS is statically typed.

2. JS- errors detected at run time. TS- Errors detected at compile time. 

3. JS - basic support for code completion and debugging. TS - Enhanced IDE support with auto completion, type-checking and better re-factory tools.

- JS - directly runs on the browser without the need to be compiled. TS - needs to be compiled to JS before execution in the browser.

## Why we Need TypeScript

### 1. Most programming languages have their own problems and surprises. 

<b>For example JS allows accessing properties that are not present in an object.</b>

```js
const rectangleArea = {width:300, height:200};
const area = rectangleArea.width * rectangleArea.somethingElse; 

console.log (area); //Output: NaN
```

For most programming language, such as code should throw an error. 

This is the reason we need TypeScript. It would give us the appropriate error right away.

### 2. We need TS for Type Safety.(Fewer Runtime Errors)

### 3. Better Code readability and maintainability

### 3. Enhanced IDE support and auto-completion.

### 4. Scalability for large applications.

### 5. Easier Debugging.

### 6. Popularity and Industry adoption.

<br />


## TypeScript Setup

- To install TypeScript, you need to have the node package manager (npm).
- You can install it from official node js website.

To verify whether you have node.js installed, run this command in terminal.

```js
node --version
```
If it returns a version number, it is installed.

To verify that npm is available:

```
npm --version
```

Should return a version number.

#### Install TypeScript globally by running the following Command. 

```npm
npm install -g typescript
```

Verify TypeScript is installed by running:

```
tsc --version
```

```
npm list -g
```
To see all the dependencies you have installed.


#### To initialize a TypeScript project, navigate to your project directory and run.

```
tsc --init
```
or

```
npx --tsc init
```

It will generate a `tsconfig.json` file which contains configuration options for the TypeScript project.

- The file can be modified based on project needs.


## First TypeScript Code:
Create a file ending with `.ts`. For example: `hello.ts`.

Write the code inside..

```js
let number1: number = 67;
let number2: number = 53;

console.log(number1 + number2);
```

- Now we need to compile the TypeScript code to JavaScript code.

Inside the terminal run:

```js
tsc hello.ts
```

The code inside the file will be compiled to JS.
There will be another file generated of `hello.js` after compilation.

- During compilation, any errors will be caught.

- Now we have `hello.js`. We need to run it now.

```
node hello.js
```
This will run the js code to provide an output.
