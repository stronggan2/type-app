import React from "react";

const OptionalParameter = () => {
  function setUser(
    id: string,
    name: string,
    age: number = 20,
    address: string = "seoul"
  ): void {
    console.log(`ID:${id}`);
    console.log(`NAME:${name}`);
    console.log(`AGE:${age}`);
    console.log(`ADDRESS:${address}`);
    console.log(`------------------`);
  }

  setUser("admin", "gan");
  setUser("admin", "gan", 30);
  setUser("admin", "gan", 40, "jeju");

  return <div></div>;
};

export default OptionalParameter;
