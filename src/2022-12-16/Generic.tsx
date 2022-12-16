import React from "react";

const Generic = () => {
  function printArray<T>(arr: T[]): void {
    console.log(arr);
  }

  const arr1 = [10, 20, 30];
  printArray<number>(arr1);

  const arr2 = ["a", "b", "c"];
  printArray<string>(arr2);

  const arr3 = [true, false, true];
  printArray(arr3); // 함수 호출시 타입 생략 가능

  return <div></div>;
};

export default Generic;
