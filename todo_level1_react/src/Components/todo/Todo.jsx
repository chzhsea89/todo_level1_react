import React from 'react';
import './style.css'; // Import the CSS file
const Todo = ({ todo, onDelete, onComplete, onCancel }) => {
  return (
    <div className="card">
      <h3>{todo.title}</h3>
      <p>{todo.desc}</p>

    <div className="button-set">
      <button className="btn_delete" onClick={() => onDelete(todo.id)}>삭제하기</button>
      {!todo.isDone ? (
        <button className="btn_complete" onClick={() => onComplete(todo.id)}>완료</button>
      ) : (
        <button className="btn_cancel" onClick={() => onCancel(todo.id)}>취소하기</button>
      )}
    </div>
    </div>
  );
};


export default Todo;
