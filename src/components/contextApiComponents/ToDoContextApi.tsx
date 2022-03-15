import React, { useContext, useState, useEffect } from "react";
import { ADD_ITEM_ACTION, REMOVE_ITEM_ACTION, UPDATE_ITEM_ACTION } from "../../constants";
import ListFooter from "../ListFooter";
import FilterReducer from "../../reducers/FilterReducer";
import AddItem from "../AddItem";
import ToDoList, { ListItemProps } from "../ToDoList";
import { ToDoContext } from "./ToDoProvider";

const defaultListItem: ListItemProps = {id: Date.now(), text: "", completed: false};

const ToDoContextApi:React.FC = () => {
  const { state: { todoList }, dispatch } = useContext(ToDoContext);
  const [listItem, setListItem] = useState(defaultListItem);
  const [listData, setListData] = useState(todoList);

  useEffect(() => {
    setListData(todoList);
  }, [todoList]);

  const updateItem = (text:string) => {
    setListItem({
      id: Date.now(),
      text,
      completed: false
    });
  };

  const addItem = () => {
    dispatch({
      type: ADD_ITEM_ACTION,
      payload: listItem
    });
    setListItem(defaultListItem);
  };

  const removeItem = (id:number) => {
    dispatch({
      type: REMOVE_ITEM_ACTION,
      payload: { id }
    });
  };

  const toggleItemStatus = (id:number) => {
    dispatch({
      type: UPDATE_ITEM_ACTION,
      payload: { id }
    });
  } ;

  const filterList = (type:string) => {
    const filteredList = FilterReducer(todoList, {type});
    setListData(filteredList);
  };

  return (
    <>
      <AddItem item={listItem} updateItem={updateItem} addItem={addItem} />
      <ToDoList data={listData} removeItem={removeItem} toggleItemStatus={toggleItemStatus} />
      <ListFooter filterList={filterList} />
    </>
  );
};

export default ToDoContextApi;