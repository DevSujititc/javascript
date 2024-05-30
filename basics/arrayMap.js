// The map() method creates a new array by applying a function to each element of an existing array, returning the new array..

const programmingLans = ["PHP", "Laravel", "CodeIgniter", "MySql"];

const result = programmingLans.map(myFunction)

function myFunction(item){
    return item.length;
}

console.log("Return the length of each item in the array",result);

const numbers = [2, 4, 7, 12, 15, 20];

const newArray = numbers.map((item)=> item * 3)


console.log("Return an array with each item multiplied by 3 ",newArray);