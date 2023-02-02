import React, { useState } from "react";
import ListItem from "./ListItem.jsx";

const List = (props) => {
  return(
  <div>
    <h1 className="h11" >
      “If you carry your childhood with you, you never become older.” — Tom Stoppard
      </h1>
   <ul className="item-list"> 
    
    {props.memories.map((item, index) => (
        <ListItem item={item} key={index} del={props.del} put={props.put} changeView={props.changeView}/>
    ))}
    </ul>
    

  </div>
)}

export default List;
