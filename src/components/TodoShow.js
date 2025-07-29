import React, { useState } from 'react';
import TodoEdit from './TodoEdit';
import useTodoContext from '../hooks/use-todos-context';
import './TodoShow.css';

const TodoShow = ({ todo }) => {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteTodoById } = useTodoContext();

  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  const handleDelete = () => {
    deleteTodoById(todo.id);
  };

  const handleSubmit = () => {
    setShowEdit(false);
  };

  let content = (
    <>
      <h3 className="todo-title">{todo.title}</h3>
      <p className="todo-description">{todo.description}</p>
      <p className="todo-progress">
        Progress: <span className={todo.progress ? "done" : "not-done"}>
          {todo.progress ? "Done" : "Not done"}
        </span>
      </p>
    </>
  );

  if (showEdit) {
    content = <TodoEdit onSubmit={handleSubmit} todo={todo} />;
  }

  return (
    <div className="todo-show">
      <div className="todo-content">{content}</div>
      <div className="todo-actions">
        <button onClick={handleEdit} className="edit-button">Edit</button>
        <button onClick={handleDelete} className="delete-button">Delete</button>
      </div>
    </div>
  );
};

export default TodoShow;
