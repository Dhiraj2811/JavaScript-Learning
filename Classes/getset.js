class Person {
    constructor(name) {
        this.setName(name);
    }
    getName() {
        return this.name;
    }
    setName(newName) {
        newName = newName.trim();
        if (newName === '') {
            throw 'The name cannot be empty';
        }
        this.name = newName;
    }
}

let person = new Person('Jane Doe');
console.log(person); // Jane Doe

person.setName('Jane Smith');
person.name = "dhiraj"
console.log(person.getName()); // Jane Smith


class Car{
    constructor(name){
        this._name=name;
    }
    get na(){
        return this._name;
    }
    set name(name){
        this._name = name
    }
}
console.log(typeof Car)
let c= new Car("toyota");
c.name = "ferrari"
console.log(c.na)