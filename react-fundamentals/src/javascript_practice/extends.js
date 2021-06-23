//EXTENDS
//extends allows us to inherit properties of another class while also having unique methods and properties of its own(TrialUser Class)
//LOOK UP PROTOTYPAL INHERITANCE

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

class TrialUser extends User { 
    trialEnding() {
        console.log(`Your trial will be ending soon, ${this.name}. Would you like to join our program?`);
    };
};

//Instance of User class
let anonDude = new User('Anonymous');
anonDude.greet();
anonDude.status();

//Instance of TrialUser class
let trialUser = new TrialUser('Paul');
trialUser.greet()
trialUser.status();
trialUser.trialEnding();
