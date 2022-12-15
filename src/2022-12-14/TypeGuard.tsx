import React from "react";

const TypeGuard = () => {
  type priceType = string | number;
  let totalPrice: number;
  let itemPrice: priceType = "1000";

  if (typeof itemPrice === "string") {
    totalPrice = 0;
  } else {
    totalPrice = itemPrice;
  }

  return <div></div>;
};

export default TypeGuard;
