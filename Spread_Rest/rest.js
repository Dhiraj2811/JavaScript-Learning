//rest in function parameter

function sum(...rest){
    return rest.reduce((acc,cur)=>acc+cur)
}

console.log(sum(1,2,3,4));

//rest in array destructuring
const colors = ["yellow","green","red","white"];
const [a,b,...rest] = colors;
console.log(a,b,rest);

//object destructuring
let person = {name:'john',age:'23',street:'123 apartment road',city:'pune'};
let {name,mob,age,...restObj} = person;
console.log(name,mob,age,restObj)