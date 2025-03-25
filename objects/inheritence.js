const p1 = {
    name: 'John',
    age: 25,
    __proto__ : "Function"
}

const p2 = Object.create(p1);
p2.__proto__ = "Function";
console.log(p2.__proto__);

