import React from "react";
import { ALL_FILTER, ACTIVE_FILTER, COMPLETED_FILTER } from "../constants";
import "./ListFooter.css";

const ListFooter: React.FC<{item:number, storage:string, filterList: (type:string)=>void}> = 
  ({item = 0, storage, filterList}) => {
    return (
      <div className="list-footer">
        <button type="button" onClick={() => filterList(ALL_FILTER)}>All Items</button>
        <button type="button" onClick={() => filterList(ACTIVE_FILTER)}>Active Items</button>
        <button type="button" onClick={() => filterList(COMPLETED_FILTER)}>Completed Items</button>
        <p className="note">
          The list currently contains {item}
          {item === 0 || item > 1 ? " items" : " item"}
        </p>
      </div>
    )
  }
;

export default ListFooter;