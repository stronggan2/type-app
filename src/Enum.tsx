import React from "react";

const Enum = () => {
  let person: {
    name: string;
    age: number;
    gender: "Male" | "Female";
  };

  person = {
    name: "gan",
    age: 20,
    gender: "Female",
  };

  return <div></div>;
};

export default Enum;
