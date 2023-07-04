import React from "react";

import { TodoProvider } from "./Context/TodoContext";

import "./App.css";
import "animate.css";

import { AppUI } from "./Components/AppUI";

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
