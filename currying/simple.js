function add(a) {
    console.log(a);
    return function(b) {
        console.log(a,b);
      return function(c) {
        console.log(a,b,c);
        return a + b + c;
      }
    }
  }
  
  console.log(add(1)(2)(3));  // Outputs: 6