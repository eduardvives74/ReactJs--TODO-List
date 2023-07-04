import './TodoList.css'

function TodoList(props) {
  return (
    <ul id="todoList">
      {props.children}
    </ul>
  )
}

export { TodoList }