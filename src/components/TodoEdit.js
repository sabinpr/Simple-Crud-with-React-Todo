import React, { useState } from 'react';
import useTodoContext from '../hooks/use-todos-context';
import './TodoEdit.css'; 

const TodoEdit = ({ todo, onSubmit }) => {
  const [todoEdit, setTodoEdit] = useState({
    title: todo.title,
    description: todo.description,
    progress: todo.progress || false,
  });

  const { editTodoById } = useTodoContext();

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    setTodoEdit((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
    editTodoById(todo.id, todoEdit);
  };

  return (
    <div className="todo-edit">
      <form onSubmit={handleSubmit} className="todo-form">
        <label className="form-label">Title</label>
        <input
          name="title"
          onChange={handleChange}
          value={todoEdit.title}
          type="text"
          className="form-input"
        />
        <label className="form-label">Description</label>
        <input
          name="description"
          onChange={handleChange}
          value={todoEdit.description}
          type="text"
          className="form-input"
        />
        <label className="form-label checkbox-label">
          <input
            name="progress"
            type="checkbox"
            checked={todoEdit.progress}
            onChange={handleChange}
            className="form-checkbox"
          />
          Progress
        </label>
        <button className="form-button">Update Todo</button>
      </form>
    </div>
  );
};

export default TodoEdit;
