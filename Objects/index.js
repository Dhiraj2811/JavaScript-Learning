//check property present in object
let address = {
    street:"123 blok 2",
    city:"Mumbai",
    state:"Maharashtra"
};

console.log('street' in address);
for(let item in address){
    console.log(item)
}

//object reference changes on copy to another variable and change it.
let newAddress = address;
newAddress.street = "downstreet";
console.log(address)