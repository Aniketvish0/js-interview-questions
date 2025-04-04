let arr = [
    [1,2],
    [2,4,[5,6,7]],
    [8,9]
]
function flattenArray(arr){
return arr.reduce((flat, item) => flat.concat(Array.isArray(item) ? flattenArray(item) : item), []);
}
console.log(flattenArray(arr));
