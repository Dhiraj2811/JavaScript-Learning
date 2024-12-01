//arguments object

function sum(){
    let sum =0;
    console.log(arguments)
    for(let i=0;i<arguments.length;i++){
        sum+=arguments[i]
    }
    return sum;
}

console.log(sum(1,2,3))
console.log([1,2,null,5,10,Infinity,4,undefined].sort());

function compareBy(propertyName) {
    return function (a, b) {
      let x = a[propertyName],
        y = b[propertyName];
  
      if (x > y) {
        return 1;
      } else if (x < y) {
        return -1;
      } else {
        return 0;
      }
    };
  }
  let products = [
    { name: 'iPhone', price: 900 },
    { name: 'Samsung Galaxy', price: 850 },
    { name: 'Sony Xperia', price: 700 },
  ];
  
  // sort products by name
  console.log('Products sorted by name:');
  products.sort(compareBy('name'));
  
  console.table(products);
  
  // sort products by price
  console.log('Products sorted by price:');
  products.sort(compareBy('price'));
  console.table(products);

  let func = function (){
return 2
  };
  console.log(func());

  (function (a,b){
    console.log(a,b)
  })(2,3);

  let person = {
    firstName: 'John',
    lastName: 'Doe'
};

(function () {
    console.log(person.firstName + ' ' + person.lastName);
})();


let arr=[1,2,3];

function changeArray(array){
array[2]=4;
array = [2,3,4]
}
changeArray(arr);
console.log(arr);