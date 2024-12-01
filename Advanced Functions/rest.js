function restParameter(a,b,...args){
    console.log(a,b,args)
}

restParameter(1,2,33,4,4,);

function sum(...args){
    return args.filter((e)=>typeof e === 'number')
    .reduce((pre,cur)=>pre+cur)
}

console.log(sum(2,5,88,"g","hhh",undefined,true))