import React from "react";

const App = () => {
  interface Language {
    name: string;
    level: number;
    completed?: boolean
  }

  let p1: Language = {
    name: "react",
    level: 5,
  };

  // let p2: Language = { name: "typescript" }; // level
  // let p3: Language = { level: 5 }; // name
  // let p4: Language = {}; // level, name
  let p5: Language = {
    name: "javascript",
    level: 1,
    completed: true, // 이게 뭔데!?
  };

  return <div></div>;
};

export default App;
