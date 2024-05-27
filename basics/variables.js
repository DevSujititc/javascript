// Example of var
// The variable x declared inside the if block is the same x declared 
// outside the if block because var has function scope.

function exampleVar() {
    var x = 10;
    if (true) {
      var x = 20; // Same variable
      console.log('Example of var, output inside the if block: ',x); // Output: 20
    }
    console.log('Example of var, output outside the if block: ',x); // Output: 20
  }
  exampleVar();
  

// Example of let
// The variable y inside the if block is a different variable from the y outside 
// the if block because let has block scope.
function exampleLet() {
    let y = 10;
    if (true) {
      let y = 20; // Different variable
      console.log('Example of let, output inside the if block:', y); // Output: 20
    }
    console.log('Example of let, output outside the if block:', y); // Output: 10
  }
  exampleLet();

// Eample of const
// The variable z inside the if block is a different variable from the z outside 
// the if block because const has block scope. 
// Additionally, attempting to reassign the value of z will result in an error.
function exampleConst() {
    const z = 10;
    if (true) {
      const z = 20; // Different variable
      console.log('Example of const, output inside the if block:', z); // Output: 20
    }
    console.log('Example of const, output inside the if block:', z); // Output: 10
  
    // z = 30; // This will throw an error: Assignment to constant variable.
  }
  exampleConst();
