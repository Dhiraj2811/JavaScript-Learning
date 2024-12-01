function Animal(legs) {
    this.legs = legs;
}

Animal.prototype.walk = function () {
    console.log(`Walking on ${this.legs} legs`)
}

function Bird(legs) {
    Animal.call(this, legs);
}

Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Animal;

Bird.prototype.fly = function () {
    console.log('flying');
}

var pigeon = new Bird(2);
pigeon.walk(); // walking on 2 legs
pigeon.fly();  // flying


//class inheritance

class Animals {
    constructor(legs,color) {
        this.legs = legs;
        this.color = color;
    }

    walk() {
        console.log(`walk on ${this.legs} legs`,`color:`,this.color)
    }
}

class Birds extends Animals {
    constructor(legs, color,weight) {
        super(legs,color);
        this.weight = weight;
    }
    fly() {
        console.log("It can fly")
    }

    walk(elem){
        super.walk();
        console.log("it can walk",elem)
    }

    getWeight(){
        console.log(`weight is:`,this.weight)
    }
}

let hen = new Birds(2,"red",10);
hen.walk(23);
hen.fly();
hen.getWeight();