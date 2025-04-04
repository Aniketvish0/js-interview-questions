function customReduce(arr, callback, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i], i, arr);
    }
    return accumulator;
}

Array.prototype.myReduce = function(callback,initialValue){
    let accumulator = initialValue;
    for (let i = 0; i < this.length; i++) {
        accumulator = callback(accumulator,this[i],i,this)
    }
    return accumulator
}

const numbers = [1, 2, 3, 4].myReduce((sum,curr) => sum+curr , 0);
console.log(numbers);
