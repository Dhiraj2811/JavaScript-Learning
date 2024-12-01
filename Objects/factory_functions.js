function user(firstname,lastname){
    return {
        firstname:firstname,
        lastname:lastname,
        greet:function (){
            return "Hi I am "+firstname+" "+lastname;
        }
    }
}

let person = user("john","doe");
console.log(person.greet());

let getFullName = {
    greet:function (){
        return this.firstName+" "+this.lastName
    }
}

function persons(firstName,lastName){
 let person = Object.create(getFullName);
 person.firstName = firstName;
 person.lastName = lastName;
 return person;   

}

let p = persons("alex","hales");
console.log(p.greet())