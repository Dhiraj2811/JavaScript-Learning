let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(10)
    },1000)
});

let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(20)
    },2000)
});

let p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("error of p3")
    },500)
});

let p4 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("error of p4")
    },1000)
});

Promise.any([p1,p2,p3]).then(val=>console.log(val))
Promise.any([p3,p4]).then(val=>console.log(val)).catch(err=>console.log(err))