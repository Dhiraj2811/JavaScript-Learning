function deepcopy(obj){
    if(typeof obj !== "object" && !Array.isArray(obj)){
        return obj;
    }

    const deepObj = Array.isArray(obj) ? []:{};

    for(let val in obj){
        deepObj[val] = deepcopy(obj[val]);
    }

    return deepObj;
}
let obj = [1,2,34,5,{name:[1,2,3]}]
let obj1 = deepcopy(obj);
obj[4].name[2] = 123
console.log(obj);
console.log(obj1);
console.log([1,2,3].slice(1,1))