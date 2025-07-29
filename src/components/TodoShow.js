import React from 'react'
import { useState } from 'react'
import TodoEdit from'./TodoEdit'
import useTodoContext from '../hooks/use-todos-context'

const TodoShow = ({todo }) => {
    const [showEdit, setShowEdit] = useState(false)
    const {deleteTodoById} = useTodoContext()

    const handleEdit = () => {
        setShowEdit(!showEdit)
    }

    const handleDelete = () => {
        deleteTodoById(todo.id)
    }

    const handleSubmit = () => {
        setShowEdit(false);
    };



    let content = (
    <>
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
      <p>Progress: {todo.progress ? "Done" : "Not done"}</p>
    </>
  );

    if (showEdit) {
        content = <TodoEdit onSubmit={handleSubmit} todo={todo} />
    }

  return (
    <div>
      <div>{content}</div>
      <div>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  )
}

export default TodoShow
