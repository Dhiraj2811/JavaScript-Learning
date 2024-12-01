let authorized = false;
function getUser(id){
    // if(typeof id !== "number" && id <=0){
    //     throw new Error("Id is not correct")
    // }

    return new Promise((resolve,reject)=>{
        if(!authorized){
            throw new Error("unauthorized")
        }
        resolve([{
            name:"john",
            email:"john@email.com"
        }])
    })
}

try{
    getUser("0").then(val=>console.log(val)).catch(err=>console.log("Catch",err))
}catch(err){
    console.log(err)
}