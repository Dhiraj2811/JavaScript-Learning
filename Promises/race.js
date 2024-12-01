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
        resolve(30)
    },1000)
});



Promise.race([p1.then(p2),p2]).then((val)=>console.log(val))
