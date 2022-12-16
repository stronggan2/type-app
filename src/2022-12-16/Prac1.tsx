import React from "react";

const Prac1 = () => {
  function printArray<T>(arr: T[]): void {
    console.log(arr);
  }

  const arr1 = [1, 2, 3, 4, 5];
  printArray<number>(arr1);

  const arr2 = ["a", "b", "c"];
  printArray<string>(arr2);

  return <div></div>;
};

export default Prac1;
