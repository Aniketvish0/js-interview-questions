function greet(msg){
    console.log(msg, this.name);
}

const obj = {
    name : "aniket"
}
const msg = "my message is for"
greet.apply(obj,[msg])

greet.call(obj,msg)

const bindfn = greet.bind(obj,msg);
bindfn()
