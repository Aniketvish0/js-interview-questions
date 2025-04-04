function memoize(fn,context){
    let argsCache = {}
    return function (...args){
        const argss = JSON.stringify(args)
        if(!argsCache[argss]){
            return fn.call(context || this,...args)
        }
        return argsCache[argss]
    }
}

const clumstProd = (num1,num2) => {
    for(let i=0;i<1000000;i++){

    }
    return num1*num2;
}


const memoizedfn = memoize(clumstProd)

console.time()
console.log(memoizedfn(2343,6456));
console.timeEnd()


console.time()
console.log(memoizedfn(7826,6855));
console.timeEnd()