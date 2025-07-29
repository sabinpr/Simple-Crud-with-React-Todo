import { useState } from "react";
import useTodoContext from "../hooks/use-todos-context";
import './TodoCreate.css';

const TodoCreate = () => {
    const [todo, setTodo] = useState({
        title: '',
        description: '',
        progress: false,
    });

    const { createTodo } = useTodoContext();

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
        <div className="todo-create">
            <h3 className="form-heading">Add Todo</h3>
            <form onSubmit={handleSubmit} className="todo-form">
                <label className="form-label">Title</label>
                <input
                    name="title"
                    onChange={handleChange}
                    value={todo.title}
                    type="text"
                    className="form-input"
                />
                <label className="form-label">Description</label>
                <input
                    name="description"
                    onChange={handleChange}
                    value={todo.description}
                    type="text"
                    className="form-input"
                />
                <label className="form-label checkbox-label">
                    <input
                        name="progress"
                        type="checkbox"
                        checked={todo.progress}
                        onChange={() => {}}
                        disabled
                        className="form-checkbox"
                    />
                    Progress
                </label>
                <button className="form-button">Create Todo</button>
            </form>
        </div>
    );
};

export default TodoCreate;
