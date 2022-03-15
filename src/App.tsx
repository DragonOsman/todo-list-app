import React from "react";
import ToDoContextApi from "./components/contextApiComponents/ToDoContextApi";
import ToDoProvider from "./components/contextApiComponents/ToDoProvider";
import "./App.css"

const App: React.FC = () => {
  return (
    <div>
      <ToDoProvider>
        <ToDoContextApi />
      </ToDoProvider>
    </div>
  );
;}

export default App;