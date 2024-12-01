function greet(age){
    return "Hi "+this.name+", "+age[1];
}

let person = {
    name:"dhiraj"
}

console.log(greet.call(person,[21,23]));
console.log(greet.apply(person,[[23,25]]));

let car = {
    speed:10,
    start: function (){
        console.log(`it can start with ${this.speed}!!`)
    }
}

let aircraft = {
    speed:234,
    fly : function (){
        console.log("it can fly")
    }
}

let plane = car.start.bind(aircraft);
plane();