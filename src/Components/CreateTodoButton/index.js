import React from 'react';
import { TodoContext } from '../../Context/TodoContext'

import './CreateTodoButton.css'
import { IoAddSharp } from "react-icons/io5";


function CreateTodoButton() {
  const {openModal, changeOpenModal} = React.useContext(TodoContext)
  return (
    <button 
      className={`add-todo-button ${ openModal ? 'open-modal' : ''}` }
      onClick={ () => {
        changeOpenModal()
      }}
    >
      <IoAddSharp />
    </button>
  )
}

export { CreateTodoButton }