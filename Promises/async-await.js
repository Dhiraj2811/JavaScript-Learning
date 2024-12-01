function getUser(userId){
    console.log("Reading credential of user with ID:",userId)
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({
                userId:userId,
                name:"john"
            })
        }, 1000);
    })
}

function getUserRole(user){
    console.log(`user ${user.name} is`)
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({
                role:"Admin"
            })
        }, 2000);
    })
}

getUser(2)
.then(getUserRole)
.then(console.log)
.catch((err)=>console.log(err))
.finally("operation completed");

async function getUserandRole(){
let user  =await getUser(2);
let role = await getUserRole(user);
console.log(role)

}

getUserandRole();