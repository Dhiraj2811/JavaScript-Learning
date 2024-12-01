(function greet(message){
    console.log(message)
}("dhiraj"));


let x=10;
function read(){
    let x=20;
    console.log(x);
}
read();
console.log(x);

var count = 0
function increment(){
    count++;
    console.log(count)
}
increment()
console.log(count);

var count = 0;
(function (){
    count++;
    console.log(count)
})();

console.log(count);
function myFunc() {
    console.log("Regular function");
}
(function() {
    console.log("IIFE Executed");
})();
