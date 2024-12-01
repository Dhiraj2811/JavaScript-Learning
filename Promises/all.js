let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("dhiraj")
    },1000)
});

let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({name:'dhiraj'})
    },2000)
});

let p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("error")
    },2000)
});

Promise.all([p1,p2,p3]).then((val)=>console.log(val)).catch(err=>console.log(err))