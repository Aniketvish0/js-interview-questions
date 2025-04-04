function curry(a){
    return function(b){
        if(b) return curry(a+b);
        return a;
    }
}

const currysum = curry(0);

console.log((currysum(3)(4)(5)(5)(8)()));