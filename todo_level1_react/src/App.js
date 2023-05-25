import React, { useState } from 'react';
import Form from './Components/form/Form';
import List from './Components/list/List';
import Header from './Components/header/Header';
import Layout from './Components/layout/Layout';
import Todo from './Components/todo/Todo';
import './App.css'

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: '리액트 공부하기', desc: '리액트 기초를 공부해봅시다.', isDone: false },
  ]);
  const [completedTodos, setCompletedTodos] = useState([
    { id: 2, title: '완료된 항목', desc: '완료된 항목입니다.', isDone: true },
  ]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    const updatedCompletedTodos = completedTodos.filter((todo) => todo.id !== id);
    setCompletedTodos(updatedCompletedTodos);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isDone: true, // Set to true as the todo is now completed
        };
      }
      return todo;
    });
    const completedTodo = updatedTodos.find((todo) => todo.id === id);
    setCompletedTodos([...completedTodos, completedTodo]);
    setTodos(updatedTodos.filter((todo) => todo.id !== id));
  };

  const cancelTodo = (id) => {
    let updatedCompletedTodos = completedTodos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isDone: false, // Set to false as the todo is now not completed
        };
      }
      return todo;
    });
    const cancelledTodo = updatedCompletedTodos.find((todo) => todo.id === id);
    setTodos([...todos, cancelledTodo]);
    setCompletedTodos(updatedCompletedTodos.filter((todo) => todo.id !== id));
  };


  return (
    <div className="App">
      <Header />
      <Form addTodo={addTodo} />
      <Layout>
        <div className="todo-list">
          <h2>Working.. 🔥</h2>
          <List todos={todos} onDelete={deleteTodo} onComplete={completeTodo} onCancel={cancelTodo} />
        </div>
        {completedTodos.length >= 0 && (
          <div className="completed-list">
            <h2>Done..! 🎉</h2>
            <div className="completed-items">
              {completedTodos.map((todo) => (
                <Todo
                  key={todo.id}
                  todo={todo}
                  onDelete={deleteTodo}
                  onComplete={completeTodo}
                  onCancel={cancelTodo}
                />
              ))}
            </div>
          </div>
        )}
      </Layout>
    </div>
  );
};

export default App;
