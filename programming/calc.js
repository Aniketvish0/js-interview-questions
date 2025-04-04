const calc = {
    total : 0,
    add(a)  {
        this.total += a;
        return this
    },
    substract(b){
        this.total -+ b;
        return this
    },
    multiply(c){
        this.total *= c;
        return this
    }
}

const result = calc.add(5).multiply(7).substract(100);
console.log(result.total);
