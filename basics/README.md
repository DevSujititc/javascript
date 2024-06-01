## Basic Concepts

The `basics` directory covers fundamental JavaScript concepts, including:

- **Variables:** Learn about `var`, `let`, and `const`.
- **Functions:** Understand function declarations, expressions, and arrow functions.
- **Arrays:** Explore array methods and operations.
- **Objects:** Get to know object properties, methods, and the `this` keyword.

### Variables

Variables in JavaScript are used to store data values. You can think of variables as containers that hold information that you can access and manipulate later. JavaScript provides three keywords to declare variables: `var`, `let`, and `const`.

#### `var`

The `var` keyword is used to declare a variable. It has function scope, meaning it is accessible within the function it was declared in.

#### `let`

The `let` keyword is used to declare a block-scoped variable. It is only accessible within the block it was declared in.

#### `const`

The `const` keyword is used to declare a block-scoped variable with a constant value. This means the value cannot be reassigned.


##### Summary
- **var**: Function-scoped variable.
- **let**: Block-scoped variable.
- **const**: Block-scoped variable with a constant value.

## Functions in JavaScript
Functions are fundamental building blocks in JavaScript. They allow you to define reusable blocks of code that can be executed whenever needed. There are several ways to define functions in JavaScript: function declarations, function expressions, and arrow functions.

#### Function Declarations

A function declaration defines a named function that can be called anywhere in the scope it was declared, even before the declaration itself due to hoisting.

**Example:** Look inside the file named functionDeclarations.js.

#### Function Expressions

A function expression defines a function as part of an expression. It can be named or anonymous, and it cannot be called before it is defined.

**Example:** Look inside the file named functionExpressions.js.

#### Arrow Functions

Arrow functions provide a shorter syntax for writing function expressions. They do not have their own this context, which makes them particularly useful in certain situations, such as methods inside classes and callbacks.

For functions with a single parameter and a single expression, you can omit the parentheses around the parameter and the braces around the function body.

**Example:** Look inside the file named functionArrows.js.

##### Summary
- **Function Declarations**: Defined using the function keyword and hoisted to the top of their scope.
- **Function Expressions**: Defined as part of an expression and not hoisted.
- **Arrow Functions**: Provide a simple syntax and do not have their own 'this' context.


### Arrays

Arrays are a special type of object used to store multiple values in a single variable. Arrays are zero-indexed, meaning the first element is at index 0. JavaScript provides various methods to manipulate and operate on arrays.

#### Creating Arrays

You can create arrays in multiple ways:

```javascript

let fruits = ["apple", "banana", "cherry"];
let numbers = new Array(1, 2, 3, 4, 5);

```

#### Accessing Elements

```javascript

console.log(fruits[0]); // Output: apple
console.log(numbers[2]); // Output: 3

```

#### Array Methods
- **push**: Adds one or more elements to the end of an array.
- **pop**: Removes the last element from an array.
- **shift**: Removes the first element from an array.
- **unshift**: Adds one or more elements to the beginning of an array.
- **forEach**: Executes for each array element but not executed for empty elements.
- **map**: The map() method creates a new array by applying a function to each element of an existing array, returning the new array.
- **filter**: Creates a new array with all elements that pass the test implemented by the provided function.
- **reducer**: Executes a reducer function on array elements and returns the accumulated result as a single value.
- **find**: Returns the value of the first element in the array that satisfies the provided testing function. Otherwise, it returns undefined.

**Example:** All examples of array methods can be found in a separate file.

### Objects

Objects are a fundamental aspect of JavaScript, enabling you to group related data and functions together. An object is a collection of properties, each defined as a key-value pair.

#### Creating Objects

You can create objects in multiple ways:

```javascript
// Using object literal syntax
let person = {
  name: "Sujit Shah",
  age: 35,
  address: function() {
    console.log("Kathmandu, Nepal");
  }
};

// Using the Object constructor
let person2 = new Object();
person2.name = "Rojina K";
person2.age = 30;
person2.greet = function() {
  console.log("Hi there!");
};

```

#### Object Properties

You can access object properties using dot notation or bracket notation

```javascript

console.log(person.name); // Output: Sujit Shah
console.log(person["age"]); // Output: 35

```
You can access object properties using dot notation or bracket notation:

**Example:** Accessing Object Properties in file `objectPropAccess.js`.

You can add new properties or modify existing properties using dot notation or bracket notation

**Example:** Adding and Modifying Properties in file `objectPropAdd.js`.

Methods are functions that are stored as object properties. You can define methods in an object to perform actions on that object’s properties.

**Example:** Object Methods in file `objectMethod.js`.

The 'this' keyword refers to the object from which the method was called. It allows you to access the object's properties and methods from within the object itself.

**Example:** The this Keyword in file `objectThis.js`.