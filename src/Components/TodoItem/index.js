import './TodoItem.css'
import { IoCheckboxSharp, IoTrashSharp } from "react-icons/io5";

function TodoItem(props) {
  return (
    <li className='todo-item'>
      <span 
        className={`todo-item__checked ${props.completed ? 'completed' : ''}`}
        onClick={props.onComplete}
      >
        <IoCheckboxSharp />
      </span>
      <span className='todo-item__name'>{props.text}</span>
      <span
        className='todo-item__delete'
        onClick={props.onDelete}
      >
        <IoTrashSharp />
      </span>
    </li>
  )
}

export { TodoItem }