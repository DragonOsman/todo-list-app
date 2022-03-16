import React from "react";
import { ALL_FILTER, ACTIVE_FILTER, COMPLETED_FILTER } from "../constants";
import "./ListFooter.css";

const ListFooter: React.FC<{items: number, filterList: (type:string)=>void}> = 
  ({items = 0, filterList}) => {
    return (
      <React.Fragment>
        <div className="list-footer">
          <button type="button" onClick={() => filterList(ALL_FILTER)}>All Items</button>
          <button type="button" onClick={() => filterList(ACTIVE_FILTER)}>Active Items</button>
          <button type="button" onClick={() => filterList(COMPLETED_FILTER)}>Completed Items</button>
        </div>
        <p className="item-number-note">
          The list contains {items} {items > 1 || items === 0 ? " items" : " item"}
        </p>
      </React.Fragment>
    )
  }
;

export default ListFooter;