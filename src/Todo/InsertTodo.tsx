import React, { useState } from "react";

const [text, setText] = useState("");

const InsertTodo: React.FC<{ onAddTodo: (item: string) => void }> = (props) => {
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() !== "") {
      props.onAddTodo(text);
      setText(""); // 초기화
    }
  };

  const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <h3>할일 추가</h3>
        <input type="text" onChange={changeHandler} />
        <button>추가</button>
      </form>
    </div>
  );
};

export default InsertTodo;
