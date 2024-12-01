let arr = [2,3,[4,5]];
let arr1 = [...arr];
arr1[2][0] = 34;

let arr2 = arr.slice(0);
arr2[2][1] = 54;
arr2[0]=100;


//deep copy
let arr3 = JSON.stringify(arr);
let arr4 = JSON.parse(arr3);
arr4[2][0] = 234;

console.log(arr);
console.log(arr1);
console.log(arr2);
console.log(arr4);
