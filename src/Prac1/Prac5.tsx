import { constants } from "buffer";
import React from "react";

const Prac5 = () => {
  function greet(id: string, hi: string, hii: string = hi + " " + id): void {
    console.log([`${id}`, `${hi}`, `${hii}`]);
  }

  greet("gan", "Hello");
  greet("gan", "Hello", "Nice to meet you");

  return <div></div>;
};

export default Prac5;
