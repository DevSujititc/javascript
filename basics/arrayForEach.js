// Executes for each array element but not executed for empty elements.

const programmingLan = ["PHP", "Laravel", "CodeIgniter", "MySql"];

// Using function
console.log("---------------------");
console.log("Using function");
console.log("---------------------");

programmingLan.forEach(function(item){
    console.log(item);
})

// Using callback function
console.log("--------------------------");
console.log("Using callback function");
console.log("--------------------------");

programmingLan.forEach((item)=>{
    console.log(item);
})