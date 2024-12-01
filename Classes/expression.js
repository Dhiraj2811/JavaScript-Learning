let Person = class {
    constructor(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
}

let person = new Person("dhiraj");
console.log(person.name);

//first class citizen

function factory(aClass){
    return  new aClass("alice");
}

let fact = factory(class{
    constructor(name){
        this.name = name;
    }
    greeting(){
        console.log("Hi")
    }
});
console.log(fact);
 fact.greeting();
function factory(aClass) {
    return new aClass();
}

let greeting = factory(class {
    sayHi() { console.log('Hi'); }
});

greeting.sayHi(); // 'Hi'