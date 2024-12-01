//NaN addition with others.
console.log(NaN + "srt");
console.log(NaN + "");
console.log(NaN + 1);
console.log(NaN + true);

//Infinity

console.log(typeof -Infinity)
console.log(-Infinity + null);
console.log(0/0);

//subtraction
console.log("23" - "2");//21
console.log("abg" - 23);//NaN
console.log("abg" - "ad");//NaN
console.log(undefined - 23);//NaN
console.log(true - 23);//-22
console.log(true - true);//0
console.log(false - true);//-1

//Multiplication
console.log(NaN * 0);//NaN
console.log(Infinity * 0)//NaN
console.log(Infinity * 1)//Infinity
console.log(-Infinity * 1)// -Infinity

//operation on object
let obj = {
    toString(){
        return 150;
    },
    valueOf() {
        return 100;
    }
}

console.log(obj - 10); // return value from valueOf however toString in there inside the object.
console.log(Number(undefined))

//divide operator
console.log(Infinity/Infinity);//NaN
console.log(Infinity/2)//Infinity
console.log(Infinity/-2)//-Infinity
console.log(-Infinity/2)//-Infinity
console.log(-Infinity/-2)//-Infinity
console.log(-5/-2);
console.log(5%-6);
let remainder = -10 % Infinity;
console.log(remainder); // 10


//XOR
console.log(3^2)
console.log(!{});
console.log(![]);
console.log(Boolean(Infinity))

let b = true;
let result = undefined && true;
console.log(result);
if(result){
    console.log("first block");
}else{
    console.log("second block")
}

//&& left to right 
let res ="2" && undefined && "1" ;
console.log(res);

//OR Assignment operator
let item;
item||=undefined;
console.log(item);

let element = null;
element&&="";
console.log(element);
console.log("2"<undefined);
console.log("2"- "1");
console.log(null == undefined)