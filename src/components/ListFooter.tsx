import React from "react";
import { ALL_FILTER, ACTIVE_FILTER, COMPLETED_FILTER } from "../constants";
import "./ListFooter.css";

const ListFooter: React.FC<{filterList: (type:string)=>void}> = 
  ({filterList}) => {
    return (
      <div className="list-footer">
        <button type="button" onClick={() => filterList(ALL_FILTER)}>All Items</button>
        <button type="button" onClick={() => filterList(ACTIVE_FILTER)}>Active Items</button>
        <button type="button" onClick={() => filterList(COMPLETED_FILTER)}>Completed Items</button>
      </div>
    )
  }
;

export default ListFooter;