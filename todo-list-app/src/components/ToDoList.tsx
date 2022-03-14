import React from "react";

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
    <div className="listContainer">
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
                <span className="items">{dataItem.text}</span>
                <button type="button" className="items" onClick={() => removeItem(dataItem.id)}>
                  Delete
                </button>
              </div>
            </li>
          </ol>
        )
      }) }
    </div>
  ) : (<span>You haven't created a list yet</span>);
};

export default ToDoList;