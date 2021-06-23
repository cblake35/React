//CONSTRUCTORS
//The constructor method is a special method that helps create and initialize an object created from a class. It works in tandem with the 'new' keyword.

class User {
    constructor(first, last, e) {
        this.f = first;
        this.l = last;
        this.email = e;
    }
}

let userOne = new User('Chris', 'Blake', 'noneyabusiness@email.com');
console.log(userOne.first)//this one will return undefined since properties are on the leftside(f, l, email)
console.log(userOne.f);//Chris
console.log(userOne.l);//Blake
console.log(userOne.email);//noneyabusiness@email.com



