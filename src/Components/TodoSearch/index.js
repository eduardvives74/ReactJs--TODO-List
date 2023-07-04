import React from "react";
import "./TodoSearch.css";
import { TodoContext } from "../../Context/TodoContext";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  return (
    <input
      className="search-input"
      placeholder="Search TODO.."
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { TodoSearch };
