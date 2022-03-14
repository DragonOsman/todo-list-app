import React, { SyntheticEvent } from "react";

export interface AddItemProps {
  item: {id:number, text:string},
  updateItem: (itemText: string) => void,
  addItem: () => void
};

const AddItem:React.FC<AddItemProps> = ({item, updateItem, addItem}) => {
  const submitHandler = (event:SyntheticEvent) => {
    event.preventDefault;
    addItem();
  };

  return (
    <form className="addItemForm" onSubmit={submitHandler}>
      <label htmlFor="add-item">Add ToDo Item:</label>
      <input 
        type="text" 
        name="add-todo" 
        id="add-todo" 
        className="add-item" 
        value={item.text ?? ""} 
        onChange={e => updateItem(e.target.value)}
      />
      <input 
        type="button" 
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