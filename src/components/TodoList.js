import React from 'react';
import TodoShow from './TodoShow';
import useTodoContext from '../hooks/use-todos-context';
import './TodoList.css';

const TodoList = () => {
  const { todos } = useTodoContext();

  const renderedTodos = todos.map((todo) => {
    return <TodoShow key={todo.id} todo={todo} />;
  });

  return (
    <div className="todo-list-container">
      {renderedTodos}
    </div>
  );
};

export default TodoList;
