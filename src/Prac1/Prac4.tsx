import React from "react";

const Prac4 = () => {
  function add(a: number, b: number): number {
    return a + b;
  }

  let result = add(3, 4);

  console.log(result);
  return (
    <div>
      {/* <h3>숫자 {a}와 {b}의 합은 {result}입니다.</h3> */}
      <h3>숫자 3과 4의 합은 {result}입니다.</h3>
    </div>
  );
};

export default Prac4;
