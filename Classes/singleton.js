let person = new class {
    constructor(name){
        this.name = name;
    }
    getName(){
        return "Hi, "+this.name;
    }
}("alex huston");

console.log(person);
console.log(person.getName())
