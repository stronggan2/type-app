import React from "react";

const App = () => {
  // 추상 클래스 정의
  abstract class AbstractPerson {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    info(): void {
      console.log(`name : ${this.name}, age: ${this.age}`);
    }
    abstract say(): void;
  }

  // 추상 클래스 상속
  class Person extends AbstractPerson {
    // 추상 메서드 구현
    say() {
      console.log("안녕하세요!");
    }
  }

  let p1: Person = new Person("gan", 20);

  p1.info();
  p1.say();
  return <div></div>;
};

export default App;
