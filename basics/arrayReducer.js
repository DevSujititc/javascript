// Executes a reducer function on array elements and returns the accumulated result as a single value.

const age = [20, 12, 18, 19, 32, 45, 78]

const newArray = age.reduce((preVal, item)=>{
    
    return preVal + item;
})
console.log("Accumulated result: ", newArray);