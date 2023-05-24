import React from 'react';
import './style.css'; // Import the CSS file

const Todo = ({ todo, onDelete, onComplete, onCancel }) => {
  const handleComplete = () => {
    onComplete(todo.id);
  };

  const handleCancel = () => {
    onCancel(todo.id);
  };

  return (
    <div className="card">
      <h3>{todo.title}</h3>
      <p>{todo.desc}</p>
      <div className="button-set">
        <button className="btn_delete" onClick={() => onDelete(todo.id)}>삭제하기</button>
        {!todo.isDone && <button className="btn_complete" onClick={handleComplete}>완료</button>}
        {todo.isDone && <button className="btn_cancel" onClick={handleCancel}>취소</button>}
      </div>
    </div>
  );
};

export default Todo;
