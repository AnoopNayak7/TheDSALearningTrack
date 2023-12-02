// INHERTITANCE
function Animal(name){
    this.name = name;
}

function Dog(name, breed){
    Animal.call(this, name);
    this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);

const myDog = new Dog('Buddy', 'Golden Retriever');

console.log(myDog); 

