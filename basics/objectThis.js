const person = {
    name: "Sujit Shah",
    age: 35,
    email: "sujit2039@gmail.com",
    address: function(){
        return 'Kathmandu, Nepal';
    },
    updateAge: function(pram){
        this.age = pram;
    }
}

person.address // Output: Kathmandu, Nepal

person.updateAge(39)
console.log(person.age) // Output: 39