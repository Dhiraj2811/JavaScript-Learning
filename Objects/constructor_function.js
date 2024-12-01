function Person(firstName,lastName){
    this.firstName=firstName;
    this.lastName = lastName;
    this.getFullName = function (){
        return this.firstName+" "+this.lastName;
    }
}

let person = new Person("dhiraj","lomte");
console.log(person.firstName);
console.log(person.getFullName())
let person1 = new Person("alice","pit");
console.log(person1.firstName);

//constuctor function assign without new keyword
function Car(name,price){
    console.log(new.target);
    if(!new.target){
        return new Car(name,price)
    }
    this.name= name;
    this.price = price;

}

let car = Car("Tata","123444");
let car1 = Car("toyota","826866");
console.log(Object.getPrototypeOf({name:"xyz"}));
console.log(car1,__proto__);
console.log([]);
console.log(typeof Object)
