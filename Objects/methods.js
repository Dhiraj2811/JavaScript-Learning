let person = {
    firstName:"dhiraj",
    lastName:"Lomte",
    fullName: function (){
        console.log(this.firstName+" "+this.lastName)
    },
    fullName(){
        console.log(this.firstName+"and "+this.lastName)
    }
}

person.fullName();