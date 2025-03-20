# Type Assertion 

Type assertion is another way of telling the TS compiler about the type of value a variable is going to store. 

- It helps override the inferred type of a variable. 
- Its you telling typescript I know better than you. 

## Type Assertion can be done in the following ways:

### 1. using `as` assertion.
- `as` keyword is the most common way to assert a type. 
- It tells typescript, `I know this value more than you do`.

The syntax is:

```ts
let myString: unknown = "Hello World";
(myString as string)

console.log((myString as string).length); // 11
```

time: 2.04

