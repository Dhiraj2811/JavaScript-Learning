import message,{add} from "./lib.js";
console.log(add(12,34));
console.log(message);
function call(){
    import("./dynamic.js")
    .then((res) =>{
        console.log(res.add(2,3))
    })
}

call();

