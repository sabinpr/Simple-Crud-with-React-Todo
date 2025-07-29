import { useEffect } from 'react'
import useTodoContext from './hooks/use-todos-context'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

const App = () => {
    const {fetchTodos} = useTodoContext()

    useEffect(() => {
        fetchTodos();
    },[fetchTodos])

    return (
        <div>
            <h2>Todo List</h2>
            <TodoList />
            <TodoCreate />
        </div>
    )
}

export default App
