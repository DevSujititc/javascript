// Return an array of all values in array that are 18 or over:

const age = [20, 12, 18, 19, 32, 45, 78]

const newArray = age.filter((item)=>{
    
    return item >= 18;
})
console.log("Result that are 18 or over ", newArray);