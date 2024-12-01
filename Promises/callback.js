function getUsers(callback){
    setTimeout(()=>{
       return  callback([
            {name:"john",email:"john@email.com"},
            {name:"alex",email:"alex@email.com"}
        ])
    },1000);
}

function findUser(username){
   getUsers((users) =>{
        let user = users.find((user)=> user.name === username);
        console.log(user)
    })
}

findUser("john")