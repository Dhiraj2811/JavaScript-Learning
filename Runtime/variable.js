// function constant(){
//     console.log(x);
//     const x = 20
// }

// constant(s);

//constant object
const person = {
    name:"john",
    age:20
};
const arr = [1,2]
person.age = 24;
console.log(person);
// person = {newProperty:"added"};// Error assignment to const
// console.log(person);

arr[1] = 3;
// arr=[3,4,5]
console.log(arr);

//freeze the object
const car = Object.freeze({
    name:'bugati',
    model:"123",
    description:{
        engine:'2323cc'
    }
});

car.name = "toyota";
car.description.engine = "1235cc";
console.log(car)




