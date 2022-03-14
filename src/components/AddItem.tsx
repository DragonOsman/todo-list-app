import React, { SyntheticEvent } from "react";
import "./AddItem.css";

export interface AddItemProps {
  item: {id:number, text:string},
  updateItem: (itemText: string) => void,
  addItem: () => void
};

const AddItem:React.FC<AddItemProps> = ({item, updateItem, addItem}) => {
  const submitHandler = (event:SyntheticEvent) => {
    event.preventDefault();
    addItem();
  };

  return (
    <form className="add-item-form" onSubmit={submitHandler}>
      <label htmlFor="add-item">Add ToDo Item:</label>
      <br />
      <input 
        type="text" 
        name="add-item" 
        id="add-item" 
        className="add-item" 
        value={item.text ?? ""} 
        onChange={e => updateItem(e.target.value)}
      />
      <br />
      <input 
        type="submit" 
        value="Add" 
        className="submit-btn" 
      />
      <div className="item-container">
        <span className="item-span">
          {item.text}
        </span>
      </div>
    </form>
  );
};

export default AddItem;