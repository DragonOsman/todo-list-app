import { ListItemProps } from "../components/ToDoList";
import { ALL_FILTER, ACTIVE_FILTER, COMPLETED_FILTER } from "../constants";

interface ActionProps {
  type: string
}

const FilterReducer = (state: ListItemProps[] = [], action: ActionProps) => {
  switch (action.type) {
    case ALL_FILTER:
      return state;
    case ACTIVE_FILTER:
      return state.filter(d => !d.completed);
    case COMPLETED_FILTER:
      return state.filter(d => d.completed);
    default:
      return state;
  }
};

export default FilterReducer;
