// Function Declarations

function addNumbers(a, b){
    return a + b;
}

// Calling the function
console.log('Function Declarations Output 1 : ', addNumbers(5, 6));  // Output: 11

console.log('Function Declarations Output 2 : ', addNumbers(15, 17));  // Output: 32

// Function Expressions
const addNumbers2 = function(a, b){
    return a + b;
}

// Calling the function
console.log('Function Expressions Output 1 : ', addNumbers2(5, 6));  // Output: 11

console.log('Function Expressions Output 2 : ', addNumbers2(15, 17));  // Output: 32

// Arrow Functions

const addNumbers3 = (a, b)=> {
    return a + b;
}

// Calling the function
console.log('Arrow Functions Output 1 : ', addNumbers3(5, 6));  // Output: 11

console.log('Arrow Functions Output 2 : ', addNumbers3(15, 17));  // Output: 32


// Arrow functions with a single parameter

const addNumbers4 = (a, b) => a + b;

// Calling the function
console.log('Arrow Functions  with a single parameter Output 1 : ', addNumbers4(5, 6));  // Output: 11

console.log('Arrow Functions  with a single parameter Output 2 : ', addNumbers4(15, 17));  // Output: 32