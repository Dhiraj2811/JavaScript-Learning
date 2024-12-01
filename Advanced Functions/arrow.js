let obj = {
    name:"dhiraj",
    getName: function (){
        console.log(this.name)
    },
    getNameArrow: ()=>
        console.log(this.name)
    
}

obj.getName();
obj.getNameArrow();