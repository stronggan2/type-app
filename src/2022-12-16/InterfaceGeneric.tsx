import React from "react";

const InterfaceGeneric = () => {
  interface UserInterface<T> {
    name: string;
    age: number;
    phone: T;
  }
  
  const user1 : UserInterface <string> = {
    name: "gan",
    age: 20,
    phone : "82-10-1234-5678"
  }

  const user2: UserInterface <number> = {
    name: "park",
    age: 30,
    phone: 821012345678,
    };
  return <div></div>;
};

export default InterfaceGeneric;
