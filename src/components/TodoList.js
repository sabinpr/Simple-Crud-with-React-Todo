import React from 'react'
import TodoShow from './TodoShow'
import useTodoContext from '../hooks/use-todos-context'

const TodoList = () => {
  const { todos} = useTodoContext()

  const rendereredTodos = todos.map((todo) => {
      return <TodoShow key={todo.title} todo={todo} />
  })

  return (
    <div>
      {rendereredTodos}
    </div>
  )
}

export default TodoList
