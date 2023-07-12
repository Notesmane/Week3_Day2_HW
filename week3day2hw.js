

//^ Creating Classes
// give the class at least 3 properties
// give the class at least 3 methods
// create two instances of the class (two cats)
// log both instances to see their properties
// invoke each method from both instances

class Cat {
    constructor(name, color, age) {
        this.name = name;
        this.color = color;
        this.age = age;
    }
    getName() {
        return this.name
    }
    getColor() {
        return this.color
    }
    hungryCat() {
        console.log('Meowwwwwww!!')
    }
    angryCat() {
        console.log('scratch, scratch!!')
    }
    getPrice() {
        return this.price
    }
    ageUp(num) {
        this.age += num
    }
    eatXTimes(num) {
        this.weight += num
    }
    backScratch(num) {
        console.log('prrrrrrrrrr')
    }
}

const TomTom = new Cat('Tom Tom', 'Orange', 12) 
const Jerry = new Cat('JerrBear', 'Black and White', 11)
const Garfield = new Cat('Garfy', 'Blue', 23)
console.log(TomTom);
console.log(Jerry);
console.log(Garfield);

TomTom.ageUp(3)
Jerry.eatXTimes(2)
Jerry.ageUp(4)
Garfield.backScratch(3)

console.log(TomTom)
console.log(Jerry)
console.log(Garfield)

console.log("<=======================================================>")

//^ Constructors
// create 3 properties that are set by the constructor/
// create 3 methods
// instantiate 2 arraysof 3 pirates, name the arrays after your favorite pirate ships, jollyRoger and blackPearl
// loop over each array and print 3 properties of each pirate

class Pirate {
    constructor(name, boatName, origin) {
        this.name = name;
        this.boatName = boatName;
        this.origin = origin;
    }
    getName() {
        return this.name
    }
    getBoatName() {
        return this.boatName
    }
    getOrigin() {
        return this.origin
    }
    introduction() {
        console.log(`Aye... me name be ${this.name} from ${this.origin}, the pleasure is all mine.`);
    }
    drinking() {
        console.log(`I\'ve been handling me rum since I was a wee lad back in ${this.orign}, or me name isn\'t ${this.name}`);
    }
    raid() {
        console.log(`${this.name} screamed, \'Give me the booty.. arrrr!!\' and brought his bounty back to ${this.boatName}`);
    }
}

const mobyCrew = [
new Pirate('Capt. Ahab', 'The Moby', 'Athens'),
new Pirate('Jack Sparrow', 'The Moby', 'Grand Cayman'),
new Pirate('Bill Sail', 'The Moby', 'Nassau'),
]

const titanCrew = [
new Pirate('Capt. John Wave', 'The Titan', 'Tortula'),
new Pirate('Buck Nasty', 'The Titan', 'St. Kitts'),
new Pirate('James Dunn', 'The Titan', 'St. Martin'),
]

console.log("The crew of the Moby:");
mobyCrew.forEach(Pirate => {
    Pirate.introduction();
    Pirate.drinking();
    Pirate.raid();
    console.log();
});

console.log('<=======================================================>');

console.log("The crew of the Titan:");
titanCrew.forEach(Pirate => {
    Pirate.introduction();
    Pirate.drinking();
    Pirate.raid();
    console.log();
});

