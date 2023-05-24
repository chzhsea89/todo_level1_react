// App.js

import React, { useState } from "react";
import "./App.css";
import DeleteButton from "./Components/DeleteButton_W";
import AddButton from "./Components/AddButton";
import FinishButton from "./Components/FinishButton";

const Todo = ({ todo, handleDelete,handleFinish }) => {
  return (
    <div className="todo-container">
    <div className="todo">    
    <div className="todo_title">{todo.title}</div>
    <div className="todo_desc">{todo.desc}</div> 
      </div>
      <div className="button_area_in_square_card">
      <DeleteButton color="red" onClick={() => handleDelete(todo.id)}>
        삭제하기
      </DeleteButton>

      <FinishButton color="red" onClick={() => handleFinish(todo.id)}>
        완료
      </FinishButton>
        </div>
    </div>
  );
};

  

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "리액트 공부하기", desc: "리액트 기초를 공부해봅시다.", isDone: false}
  ]);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const addTodoHandler = () => {
    if (!desc || !title) {
      alert("값을 입력해주세요.");
      return; // 입력값이 없으면 처리 안 함
    }
    const newTodo = {
      id: todos.length + 1,
      title: title,
      desc: desc,
      isDone: false
    };

    setTodos([...todos, newTodo]);
  };

  const deleteTodoHandler = (id) => {
    const newTodoList = todos.filter((todo) => todo.id !== id);
    setTodos(newTodoList);
  };

  return (
    <div className="background">
      <div className="todo_input_background">
        <div className="todo_input_area">
          <b>제목</b>
          <input          
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
           <b>내용</b>
          <input
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />        
        </div>
        <div className="todo_input_btn_area">
          <AddButton color="green" onClick={addTodoHandler}>
            <b>추가하기</b>
          </AddButton>
        </div>
        </div>
        <div className="style">
          <h2>
        Working.. 🔥
          </h2> 

          {todos.map((todo) => {
          return (
            <Todo todo={todo} key={todo.id} handleDelete={deleteTodoHandler} />
          );
        })}
        </div>     
        <div className="style">
        <h2>
          Done..! 🎉
          </h2>
          {todos.map((todo) => {
          return (
            <Todo todo={todo} key={todo.id} handleDelete={deleteTodoHandler} />
          );
        })}
        </div>     
         
    </div>
  );
};

export default App;