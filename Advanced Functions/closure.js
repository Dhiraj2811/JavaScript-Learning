function parent(){
    let message = "dhiraj"
    return function child(){
        console.log(message)
    }

}
let name = parent()
name();

for(var index = 1; index<=3; index++){
    setTimeout(function () {
        console.log('after ' + index + ' second(s):' + index);
    }, index * 1000)
}
for(var index = 1; index<=3; index++){
   (function (i){
    setTimeout(function () {
        console.log('after ' + i + ' second(s):' + i);
    }, i * 1000)
   })(index);
}

if(true){
    var greet = "Hi"
}
console.log(greet)