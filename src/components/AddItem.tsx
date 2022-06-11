import React, { SyntheticEvent } from "react";
import "./AddItem.css";

export interface AddItemProps {
  item: {id:number, text:string},
  updateItem: (itemText: string) => void,
  addItem: () => void
}

const AddItem:React.FC<AddItemProps> = ({ item, updateItem, addItem }) => {
  const submitHandler = (e:SyntheticEvent) => {
    e.preventDefault();
    const input = document.querySelector("#add-item");
    if (input?.nodeValue === "") {
      const errorP = document.createElement("p");
      errorP.textContent = "Empty input not allowed!";
      document.querySelector("#input-form")?.insertAdjacentElement("afterend", errorP);
    } else {
      addItem();
    }
  };

  return (
    <form className="add-item-form" id="input-form" onSubmit={submitHandler}>
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
    </form>
  );
};

export default AddItem;
