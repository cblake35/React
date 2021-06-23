/* SUPER */
//The super keyword is used to access and call functions on an object's parent

class User {
    constructor(name, address) {
        this.name = name; ////see line 38 for SUPER/////
        this.type = 'Trial User'
        this.address = address;
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

///////SUPER
class BronzeLevelUser extends User {
    //we add the ccinfo property to the user here
    constructor(name, username, password, ccinfo, address) { //for Super, name has to be added within the constructor as well(see line 6 and line 38)
        //if you are going to use 'this in your constructor, you must have super that points to the parent constructor
        //if we are going to use properties from the parents class constructor use super or you will get an error(this.name)
        //this is the property we want from the parents class constructor. Using super allows us to borrow 
        //property from parent class constructor and not have to type this.property again.
        //the position of the properties will be dependent on the position within the super method
        super(name, address) //if flipped name will be '422 love lane' and address will be 'Bronze Dude'
        //'this' keyword wouldnt work without super
        this.type = 'Bronze User';
        this.ccinfo = ccinfo;
        this.username = username;
        this.password = password;
    }

    getInfo() {
        console.log(this.username, this.password, this.type, this.ccinfo);
    }
}
                                        //name                                                      //address
let bronzeGuy = new BronzeLevelUser('Bronze Dude', 'Bronze4eva', 'bronze1234', 1111222233334444, '422 love lane');
bronzeGuy.greet();
bronzeGuy.status();
console.log(bronzeGuy)