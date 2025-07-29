import React, { useState } from 'react';
import useTodoContext from '../hooks/use-todos-context';

const TodoEdit = ({ todo, onSubmit }) => {
  const [todoEdit, setTodoEdit] = useState({
    title: todo.title,
    description: todo.description,
    progress: todo.progress || false,

  });

  const {editTodoById} = useTodoContext()

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setTodoEdit((prevTodoEdit) => ({
      ...prevTodoEdit,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
    editTodoById(todo.id, todoEdit)
  };

  return (
    <div> 
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          name="title"
          onChange={handleChange}
          value={todoEdit.title}
          type="text"
        />
        <label>Description</label>
        <input
          name="description"
          onChange={handleChange}
          value={todoEdit.description}
          type="text"
        />
        <label>Progress</label>
        <input
          name="progress"
          type="checkbox"
          checked={todoEdit.progress}
          onChange={handleChange}
        />
        <button>Update Todo</button>
      </form>
    </div>
  );
};

export default TodoEdit;
