import {useState} from "react";
import Todos from "./Todo/Todos";
import Todo from "./Todo/todo";
import InsertTodo from "./Todo/InsertTodo";

const App = () => {
  // const todos = [new Todo("청소하기"), new Todo("공부하기")];
  const [todos, setTodos]=useState<Todo[]>([]);

  const addTodoHander = (item: string) => {};
  return (
    <div>
      <InsertTodo onAddTodo={addTodoHander} />
      <Todos items={todos} />
    </div>
  );
};

export default App;
