     // Normal function
     function normalFunction() {
        console.log({argsfromnormal: arguments});
      }
      
      // Arrow function
      const arrowFunction = () => {
         console.log({argsfromarrow : arguments}); 
      };
      normalFunction(1, 2, 3); // Output: Arguments(3) [1, 2, 3, callee: (...), Symbol(Symbol.iterator): ƒ]
      arrowFunction(1, 2, 3); // logs big arguments object