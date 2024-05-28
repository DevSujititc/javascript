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

**Example:** Look inside the file named functions.js.

#### Function Expressions

A function expression defines a function as part of an expression. It can be named or anonymous, and it cannot be called before it is defined.

**Example:** Look inside the file named functions.js.

#### Arrow Functions

Arrow functions provide a shorter syntax for writing function expressions. They do not have their own this context, which makes them particularly useful in certain situations, such as methods inside classes and callbacks.

For functions with a single parameter and a single expression, you can omit the parentheses around the parameter and the braces around the function body.

**Example:** Look inside the file named functions.js.

##### Summary
- **Function Declarations**: Defined using the function keyword and hoisted to the top of their scope.
- **Function Expressions**: Defined as part of an expression and not hoisted.
- **Arrow Functions**: Provide a simple syntax and do not have their own 'this' context.