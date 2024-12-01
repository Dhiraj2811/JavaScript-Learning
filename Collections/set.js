let set = new Set([1,2,3]);
console.log(set)

//add method
set.add(23,34);
console.log(set);

//remove elements
set.delete(1);
console.log(set);
//clear
// set.clear();
// console.log(set);

//checking elements
console.log(set.has(2));

//size of set
console.log(set.size);

let obj = {name:"john",age:"23"};
let obj1 = {name:"alex",age:"23"}
let weakset = new WeakSet([obj,obj1],2);
// weakset.add(2) //invalid value used in weakset
console.log(weakset);

let computer = {type: 'laptop'};
let server = {type: 'server'};
let equipment = new WeakSet([computer, server]);

if (equipment.has(server)) {
    console.log('We have a server');
}
