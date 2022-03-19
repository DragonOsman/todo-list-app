import React, { createContext, useReducer } from "react";
import { ListItemProps } from "../ToDoList";
import ToDoReducer from "../../reducers/ToDoReducer";

interface ToDoContextProps {
  state: {todoList: ListItemProps[]},
  dispatch: ({ type, payload }: { type:string, payload:any }) => void
}

export const ToDoContext = createContext({} as ToDoContextProps);

const ToDoProvider: React.FC = props => {
  const [state, dispatch] = useReducer(ToDoReducer, { todoList: [] });
  const value = { state, dispatch };

  return (
    <ToDoContext.Provider value={value}>
      {props.children}
    </ToDoContext.Provider>
  );
};

export default ToDoProvider;
