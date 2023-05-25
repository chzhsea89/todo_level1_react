import React, { useState } from 'react';
import './style.css'; // Import the CSS file

const Form = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState({ title: '', desc: '' });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.title.trim() === '') {
      return;
    }
    addTodo({
      id: Date.now(),
      title: newTodo.title,
      desc: newTodo.desc,
      isDone: false,
    });
    setNewTodo({ title: '', desc: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <label htmlFor="todo-form-title">제목</label>
      <input
        type="text"
        id="todo-form-title"
        value={newTodo.title}
        onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })} 
        /> 
        <label htmlFor="todo-form-desc">내용</label>
      <input
        type="text"
        id="todo-form-desc"
        value={newTodo.desc}
        onChange={(e) => setNewTodo({ ...newTodo, desc: e.target.value })}
      />
      <div className='todo-form-button'>
      <button type="submit">추가하기</button>
      </div>
    </form>
  );
};

export default Form;
