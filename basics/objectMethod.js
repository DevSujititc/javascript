const person = {
    name: "Sujit Shah",
    age: 35,
    email: "sujit2039@gmail.com",
    greet: function(){
        console.log(`Hello, my name is ${this.name}`);
    },
    address: function(){
        return 'Kathmandu, Nepal';
    }
}


person.greet()  // Output: Hello, my name is Sujit Shah

console.log(person.address())  // Output: Kathmandu, Nepal