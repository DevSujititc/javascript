// Returns the value of the first element in the array that satisfies the provided testing function. Otherwise, it returns undefined.

const age = [20, 12, 18, 19, 32, 45, 78]

const result = age.find((item)=>{
    
    return item > 17;
})
console.log("Result: ", result);