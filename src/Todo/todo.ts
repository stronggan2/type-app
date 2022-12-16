class Todo {
  id: string;
  text: string;

  constructor(todoText: string) {
  this.id = new Date().toLocaleString();
  this.text = todoText;
  }
  }
  export default Todo;
  

//파일명 소문자 = 컴포넌트가 아님