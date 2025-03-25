const obj = {
    value: 10,
    normalFunction: function() {
      console.log(this.value); // 'this' refers to obj
    },
    arrowFunction: () => {
      console.log(this.value); // 'this' refers to the global object (window or undefined in strict mode)
    }
  };
  
  obj.normalFunction(); // Output: 10
  obj.arrowFunction(); // Output: undefined (in strict mode) or depends on the environment (e.g., window in browsers)