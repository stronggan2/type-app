import React from "react";

const App = () => {
  interface PersonInterface {
    name: string;
    age: number;
  }

  class Person implements PersonInterface {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }

  let p1: Person = new Person("gan", 20);
  console.log(p1);

  return <div></div>;
};

export default App;
