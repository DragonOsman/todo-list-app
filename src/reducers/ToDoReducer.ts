import { ListItemProps } from "../components/ToDoList";
import { ADD_ITEM_ACTION, REMOVE_ITEM_ACTION, UPDATE_ITEM_ACTION } from "../constants";

interface ActionProps {
  type: string,
  payload: ListItemProps
};

interface StateProps {
  todoList: ListItemProps[]
};

const ToDoReducer = (state: StateProps = {todoList:[]}, action: ActionProps) => {
  switch (action.type) {
    case ADD_ITEM_ACTION:
      return { todoList: [...state.todoList, action.payload] };
    case REMOVE_ITEM_ACTION:
      return { 
        todoList: 
          state.todoList.length ? 
            state.todoList.filter(d => d.id !== action.payload.id ) : 
            [] 
      };
    case UPDATE_ITEM_ACTION:
      return {
        todoList:
          state.todoList.length ?
            state.todoList.map(d => {
              if (d.id === action.payload.id) {
                d.completed = !d.completed;
              }
              return d;
            }) : []
      };
    default:
      return state;
  }
};

export default ToDoReducer;