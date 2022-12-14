import React from "react";

const Prac1 = () => {
  let productID: string = "p1234";
  let name: string = "사과";
  let count: number = 30;
  let sale: string = "정상 판매";

  return (
    <div>
      <h3>상품 번호 : {productID}</h3>
      <h3>상품 이름 : {name}</h3>
      <h3>상품 수량 : {count}</h3>
      <h3>세일 여부 : {sale}</h3>
    </div>
  );
};

export default Prac1;
