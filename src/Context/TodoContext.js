import React from "react";
import { useLocalStorage } from "../Hooks/userLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const {
    item: todos,
    saveItem: setTodos,
    loading,
    error,
  } = useLocalStorage("listaTodos", []);

  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  const completeTodo = (id) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.id === id);
    newTodos[todoIndex].completed = newTodos[todoIndex].completed
      ? false
      : true;
    setTodos(newTodos);
  };
  const deletTodo = (id) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.id === id);
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  const changeOpenModal = () => {
    setOpenModal(!openModal);
  };

  const addTodo = (todoValue) => {
    const newTodos = [...todos];
    const id = newTodos.length === 0 ? 0 : newTodos[newTodos.length - 1].id + 1
    newTodos.push({
      id,
      text: todoValue,
      completed: false
    })
    setTodos(newTodos);
  }

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deletTodo,
        openModal,
        changeOpenModal,
        addTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
