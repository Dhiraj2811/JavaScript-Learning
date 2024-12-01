let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(10)
    },2000)
});

let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(20)
    },1000)
});

let p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("error")
    },1000)
});

Promise.allSettled([p1,p2,p3]).then(val=>{
    console.log(val);
    return val;
}).catch(err=>console.log("error:",err)).finally(()=>console.log("completed")).then((val)=>console.log(val))