/**
 * ES6 class example with named export (no use of 'default')
 */
export class Dog {

    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }

    sayHi(){
        return 'Hello ' + this.name + ' the ' + this.breed + '! This content is using an ES6 class piped through babel.';
    }
}