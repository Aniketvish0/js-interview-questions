function myMap(array, callback) {
    var returnValues = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== undefined) { // Handle sparse arrays
            let newElem = callback(array[i], i, array);
            returnValues.push(newElem);
        }
    }
    return returnValues;
}

Array.prototype.myMap = function (callback) {
    let returnvalues = []
    for(let i=0; i<this.length;i++){
        let newElem = callback(this[i],i,this);
        returnvalues.push(newElem)
    }
    return returnvalues
}
let sum = 0;
const array = [1, 2, 3, 5, 6, 7, 78, 90]; 

array.myMap((val,idx)=>{
    console.log(val,idx);
})

const newArr = myMap(array, (value, index) => value * 2);

console.log(newArr);

