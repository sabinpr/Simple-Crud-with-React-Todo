import axios from "axios";
import { useState, createContext, useCallback } from "react";


const TodoContext = createContext();

function Provider({children}) {
const [todos, setTodos] = useState([]);

const fetchTodos = useCallback(async () => {
    const response = await axios.get('http://localhost:3001/todos');

    setTodos(response.data)
},[])

const createTodo = async (todo) => {
    const response = await axios.post(`http://localhost:3001/todos`, todo )
    setTodos([...todos, response.data]);
};


const deleteTodoById = async (id) => {
    await axios.delete(`http://localhost:3001/todos/${id}`)

    const updatedTodos = todos.filter((todo) => {
        return todo.id !== id
    })

    setTodos(updatedTodos)
}

const editTodoById = async (id, updatedTodo) => {
    const response = await axios.put(`http://localhost:3001/todos/${id}`, updatedTodo)
    const updatedTodos = todos.map((todo) => {
        if (todo.id === id) {
            return { ...todo, ...response.data };
        }
        return todo;
    });
    setTodos(updatedTodos);
};

const valueToShare = {
    todos,
    fetchTodos,
    createTodo,
    deleteTodoById,
    editTodoById,
}

return (
    <TodoContext.Provider value={valueToShare}>
        {children}
    </TodoContext.Provider>
)
}

export {Provider}
export default TodoContext;