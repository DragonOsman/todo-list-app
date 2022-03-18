import React from "react";
import "./ToDoList.css";

export interface ListItemProps {
  id: number,
  text: string,
  completed: boolean
}

export interface ListProps {
  data: ListItemProps[],
  removeItem: (id:number) => void,
  toggleItemStatus: (id:number) => void
}

const ToDoList:React.FC<ListProps> = ({ data, removeItem, toggleItemStatus }) => {
  return data.length > 0 ? (
    <div className="list-container">
      { data.map(dataItem => {
        return (
          <ul key={dataItem.id}>
            <li>
              <div className="item-container">
                <input 
                  type="checkbox" 
                  onChange={() => toggleItemStatus(dataItem.id)} 
                  checked={dataItem.completed}
                />
                <span className="item-text" style={{ textDecoration: dataItem.completed
                  ? "line-through"
                  : "none",
                  backgroundColor: dataItem.completed
                  ? "#8cbed6"
                  : "#87ceeb" }}>
                {dataItem.text}
                </span>
                <button type="button" className="delete-button" onClick={() => removeItem(dataItem.id)}>
                  Delete
                </button>
              </div>
            </li>
          </ul>
        );
      }) }
    </div>
  ) : <p className="empty-list-note">No to-do items in list</p>;
};

export default ToDoList;
