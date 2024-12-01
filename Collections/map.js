let map = new Map([
    ["key1","value1"],
    ["key2","value2"]
]) 
console.log(map);
let obj = {key:"value"}
//add key value
map.set("key3","value3");
map.set(2,5);
map.set(obj,23);
console.log(map);

//accessing the values
console.log(map.get("key2"))
console.log(map.get(obj));

//checking key existence
console.log(map.has("key3"));
map.delete(obj);
console.log(map);

for(let [key,value] of map){
    console.log("key is:",key," value is:",value)
}

map.forEach((val,key)=>console.log(val,key));
console.log(map.keys())
console.log(map.values())
console.log(map.entries())
console.log(typeof map);

let obj1 = {key:'val'}
let weakmap = new WeakMap([
    [obj1,{password:'secret'}]
]);
console.log(weakmap.get(obj1))