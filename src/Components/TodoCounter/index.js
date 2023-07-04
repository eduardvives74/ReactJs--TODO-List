import React from 'react'
import './TodoCounter.css'
import { TodoContext } from '../../Context/TodoContext'

function TodoCounter () {
  const { completedTodos, totalTodos} = React.useContext(TodoContext)
  return (
    <h1>
      You finished: <span>{completedTodos}</span> of <span>{totalTodos}</span> TODO's
    </h1>
  )
}

export {TodoCounter}