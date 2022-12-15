import React from "react";

const ClassComponent = () => {
  class Person {
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

export default ClassComponent;
