const sendAutoEmail = (to) => (subject) => (body) => {
    console.log(`Sending Email to ${to} with subject ${subject}: ${body}`);
}

const add = a => b => c => {
     return a+b+c;
}

console.log(add(1)(2)(3));
