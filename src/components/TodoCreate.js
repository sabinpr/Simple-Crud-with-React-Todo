import { useState } from "react";
import useTodoContext from "../hooks/use-todos-context";

const TodoCreate = () => {
    const [todo, setTodo] = useState({
        title: '',
        description: '',
        progress: false,
    });

    const {createTodo} = useTodoContext()

    const handleChange = (event) => {
        const { name, value } = event.target;
        setTodo((prevTodo) => ({
            ...prevTodo,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        createTodo(todo);
        setTodo({ title: '', description: '', progress: false });
    };

    return (
        <div>
            <h3>Add Todo</h3>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input
                    name="title"
                    onChange={handleChange}
                    value={todo.title}
                    type="text"
                />
                <label>Description</label>
                <input
                    name="description"
                    onChange={handleChange}
                    value={todo.description}
                    type="text"
                />
                <label>Progress</label>
                <input
                    name="progress"
                    type="checkbox"
                    checked={todo.progress}
                    onChange={() => {}}
                    disabled
                />


                <button>Create Todo</button>
            </form>
        </div>
    )
}

export default TodoCreate


