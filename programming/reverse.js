function reverse(str){
    return str.split("").reduce((rev,char)=> char + rev, "")
}

console.log(reverse("reverse"))