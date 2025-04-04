// custom prototype function
Array.prototype.customForEach = function(callback) {
    for(let i=0;i<this.length;i++){
        callback(i,this[i],this);
    }
}

const array1 = [1,3,4,6,7,8,9];

array.customForEach((k,v)=>{
    console.log(k,"->",v);
})

// custom fucntion
const customForEach = (array , callback) => {
    for(let i=0;i<array.length;i++){
        callback(i,array[i],array);
    }
}

const array = [1,3,4,6,7,8,9];

customForEach(array,(k,v)=>{
    console.log(k,"->",v);
})