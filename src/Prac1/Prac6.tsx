import React from "react";

const Prac6 = () => {
  function setUser(
    userId: string,
    userName: string,
    userAge: number = 20,
    userAddress: string = "seoul"
  ): void {
    console.log(`userI=${userId}`);
    console.log(`userName=${userName}`);
    console.log(`userAge=${userAge}`);
    console.log(`userAddress=${userAddress}`);
    console.log("------------");
  }

  setUser("admin", "gan");
  setUser("admin", "gan", 30);
  setUser("admin", "gan", 40, "busan");

  return <div></div>;
};

export default Prac6;
