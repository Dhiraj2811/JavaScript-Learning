var speed = 300;

var fly = function (){
    console.log("i can fly",this.speed)
}

fly.call(this);


function Person(name){
    this.name = name;
}

function Boy(name,age){
    this.age = age;
    Person.call(this,name);
}

let boy = new Boy("dhiraj",23);
console.log(boy)