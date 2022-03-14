import React from "react";
import { ALL_FILTER, ACTIVE_FILTER, COMPLETED_FILTER } from "../constants";

const ListFooter: React.FC<{item:number, storage:string, filterList: (type:string)=>void}> = 
  ({item = 0, storage, filterList}) => {
    return (
      <div className="list-footer">
        <button type="button" onClick={() => filterList(ALL_FILTER)}>All Items</button>
        <button type="button" onClick={() => filterList(ACTIVE_FILTER)}>Active Items</button>
        <button type="button" onClick={() => filterList(COMPLETED_FILTER)}>Completed Items</button>
        <span className="store-note-span">{item} Items | Make use of {storage} to store data</span>
      </div>
    )
  }
;

export default ListFooter;