const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Pormise one called");
    }, 1000);
})

promiseOne.then(function (){
    console.log("Promise one resolved");
})

const promiseTwo = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Promise two called");
        resolve();
    }, 1000);
})

promiseTwo.then(function (){
    console.log("Promise two resolved");
})

const promiseThree = new Promise(function (resolve, reject){
    setTimeout(function(){
        console.log("Promise three called");
        resolve({"one": 1, "two": 2, "three": 3});
    },1000);
})

promiseThree.then(function (data){
    console.log("Promise three resolved with data:", data);
})

const promiseFour = new Promise(function (resolve, reject){
    setTimeout(function () {
        console.log("Promise four called");
        reject(new Error("Promise four rejected"));
    },1000)
})

promiseFour.then(function(){
    console.log("Promise four resolved");
}).catch(function(error){
    console.log("Promise four rejected with error : ", error);
}) 