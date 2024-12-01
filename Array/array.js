let arr = new Array(1);
console.log(arr) // invalid length array //it is less than 2**32-1;

//shallow copy
let array = Array.from("hellow",(x,i)=>x+i);
console.log(array)

