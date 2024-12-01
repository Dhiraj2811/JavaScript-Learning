function getUser(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("dhiraj");
        },1000)
    })
}

getUser().then((val)=>{
    console.log("User name is: "+val);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`${val} is a employer`)
        })
    })
}).then((val)=>{
    console.log(val)
}).catch(err=>console.log(err))