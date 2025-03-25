function outerFun(){
    let name = "Aniket"
    function innerFun(){
        return name;
    }
    return innerFun;
}

const getname = outerFun()
console.log(getname());

