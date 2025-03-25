    // Normal function
      function Person(name) {
        this.name = name;
      }
      
      const person1 = new Person("John");
      console.log(person1.name); // Output: John
      
      // Arrow function
      const PersonArrow = (name) => {
        this.name = name;
      };
      const person2 = new PersonArrow("Jane"); // Error: PersonArrow is not a constructor