let propertyName = "names";
let obj = {
    [propertyName]: "dhiraj"
}

console.log(obj[propertyName]);
console.log(obj.names)

//in class get and set method

class Person {
    constructor(name) {
        this.name = name;
    }

get [propertyName] (){
    return this.name
}

    set [propertyName](name1) {
        this.name = name1
    }
}

let person = new Person("Alex");
person.names = "john"
console.log(person.name)