class Person{
    constructor(name){
        this.name = name;    }

getName(){
    return this.name
}

}

let p = new Person("dhiraj");
// delete p.name;
Object.defineProperty(Person,"name",{
    configurable:false
});
console.log(p.getName());
console.log(typeof Person)