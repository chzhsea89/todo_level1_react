import React from 'react';
import Todo from '../todo/Todo';
import './style.css'; // Import the CSS file
const List = ({ todos, onDelete, onComplete }) => {
  const handleDelete = (id) => {
    onDelete(id);
  };

  const handleComplete = (id) => {
    onComplete(id);
  };

  return (
    <div className="card-list">
      {todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          onDelete={handleDelete}
          onComplete={handleComplete}
        />
      ))}
    </div>
  );
};

export default List;
