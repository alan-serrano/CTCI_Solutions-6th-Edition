/* 
    Animal Shelter: An animal shelter, which holds only dogs and cats, operates on a strictly"first in, first
    out" basis. People must adopt either the "oldest" (based on arrival time) of all animals at the shelter,
    or they can select whether they would prefer a dog or a cat (and will receive the oldest animal of
    that type). They cannot select which specific animal they would like. Create the data structures to
    maintain this system and implement operations such as enqueue, dequeueAny, dequeueDog,
    and dequeueCat. You may use the built-in Linked list data structure.
    Hints: #22, #56, #63
*/

class AnimalShelter {
    constructor() {
        this.cats = [];
        this.dogs = [];
    }

    enqueue(animal) {
        if( animal instanceof Cat )         this.cats.push( new Cat() );
        else if( animal instanceof Dog )    this.dogs.push( new Dog() );
    }

    dequeueAny() {
        // Choose according to arrival time
        let catTime = this.cats[0] && this.cats[0].getTime();
        let dogTime = this.dogs[0] && this.dogs[0].getTime();

        if(!catTime && !dogTime)        return undefined;
        else if( !catTime )             return this.dequeueDog();
        else if( !dogTime )             return this.dequeueCat();
        else if( catTime < dogTime )    return this.dequeueCat();
        else                            return this.dequeueDog();
    }

    dequeueCat() {
        let cat = this.cats.shift();
        return cat;
    }

    dequeueDog() {
        let dog = this.dogs.shift();
        return dog;
    }
}

class Animal {
    constructor(name) {
        this.name = name;
        this.date = new Date();
    }

    getTime() {
        return this.date.getTime();
    }
}

class Cat extends Animal {
    constructor() {
        super('cat');
    }
}

class Dog extends Animal {
    constructor() {
        super('dog');
    }
}