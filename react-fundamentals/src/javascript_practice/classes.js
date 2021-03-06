//ES6 Classes
//classes are a sort of BLUEPRINT for making objects. this 

class User {
    constructor(name) {
        this.name = name;
        this.type = 'Trial User'
    };

    //method 1
    greet() {
        console.log(`Welcome back, ${this.name}`);
    };

    //method 2
    status() {
        console.log(`Current status: ${this.type}`);
    };
};

//Instance of the class/new object
let anonDude = new User('Anonymous dude');

//we can now use the new instance and the '.' operator to access the 2 methods
anonDude.greet();
anonDude.status();

//Another instance of the class
let jeff = new User('Jeff');
jeff.greet();
jeff.status();

//another example
let barnie = new User('Barnie');
barnie.greet();
barnie.status();