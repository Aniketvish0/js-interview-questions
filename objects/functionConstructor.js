// constructor function so pascal case is preserved

function User(name, age) {
    this.name = name;
    this.age = age;
}

const Person = new User("John", 20);
console.log(Person);
