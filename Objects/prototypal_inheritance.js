let person = {
    name:"john snow",
    greet: function (){
        return "Hi I am "+this.name;
    }
}

let teacher = {
    teach:function (){
        return "Teaches in school"
    }
}

teacher.__proto__ = person;
console.log(teacher.greet());

let master = Object.create(person,{
guide:()=>{
    return "Guide the class"
}
});

console.log(master.greet());
// console.log(master.guide()) //gives error

//method invocation with the object
let person1 = person.greet;
console.log(person1()) //name is undefined

//to rsolve above issue use bind method of Function.prototype
let person2 = person.greet.bind(person);
console.log(person2())