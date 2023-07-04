import React from "react";
import { TodoContext } from "../../Context/TodoContext";
import "./TodoForm.css";

function TodoForm() {
  const { changeOpenModal, addTodo } = React.useContext(TodoContext);

  const [ newTodoValue , setNewTodoValue] = React.useState('')

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue)
    changeOpenModal()
  }

  const onChange = (event) => {
    setNewTodoValue(event.target.value)
  }

  return (
    <>
      <form
        className="todo-form"
        onSubmit={ onSubmit}
      >
        <label>Write your new TODO: </label>
        <textarea 
          placeholder="Watch Inter Miami Game."
          value={newTodoValue}
            onChange={onChange}
        />
        <div className="btn-container">
          <button
            type="button"
            className="cancel"
            onClick={() => {
              changeOpenModal();
            }}
          >
            Cancel
          </button>
          <button type="submit" className="save">
            Save TODO
          </button>
        </div>
      </form>
    </>
  );
}

export { TodoForm };
