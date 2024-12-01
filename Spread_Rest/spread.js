let arr = [1,2,3];
console.log(arr);
console.log(...arr);

//combine arrays
let arr1 = [3,4,5];
console.log([...arr,...arr1]);


//copying array
let arr2 = [...arr1];
console.log(arr2);

//spreading objects
let obj = {a:1,b:2};
let obj1 = {...obj,c:3};
console.log(obj1);

//combining/merging objects
let objA = {x:1,y:2};
let objB = {y:3,z:4};
let objC = {...objA,...objB};
console.log(objC);
console.log(Object.entries(objA));

//function arguments
function sum(a,b){
    return a+b;
}

console.log(sum(...[2,3,4]));


//spreading strings
let str = "Hello";
let arrString = [...str];
console.log(arrString)