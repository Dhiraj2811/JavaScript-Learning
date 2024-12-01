var person = {
    name:"dhiraj",
    greet:function (){
        console.log(this.name);
    }
}

let p = person.greet.bind(person);
p()