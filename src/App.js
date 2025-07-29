import { useEffect } from 'react';
import useTodoContext from './hooks/use-todos-context';
import TodoCreate from './components/TodoCreate';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
  const { fetchTodos } = useTodoContext();

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <div className="app-container">
      <h2 className="app-title">Todo List</h2>
      <TodoList />
      <TodoCreate />
    </div>
  );
};

export default App;
