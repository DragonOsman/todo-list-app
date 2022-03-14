import React from "react";
import "./ToDoList.css";

export interface ListItemProps {
  id: number,
  text: string,
  completed: boolean
};

export interface ListProps {
  data: ListItemProps[],
  removeItem: (id:number) => void,
  toggleItemStatus: (id:number) => void
};

const ToDoList:React.FC<ListProps> = ({ data, removeItem, toggleItemStatus }) => {
  return data.length > 0 ? (
    <div className="list-container">
      { data.map(dataItem => {
        return (
          <ol key={dataItem.id}>
            <li>
              <div className="itemContainer">
                <input 
                  type="checkbox" 
                  onChange={() => toggleItemStatus(dataItem.id)} 
                  checked={dataItem.completed} 
                />
                <span className="item-text">{dataItem.text}</span>
                <button type="button" className="delete-button" onClick={() => removeItem(dataItem.id)}>
                  Delete
                </button>
              </div>
            </li>
          </ol>
        )
      }) }
    </div>
  ) : (<p>No items found</p>);
};

export default ToDoList;