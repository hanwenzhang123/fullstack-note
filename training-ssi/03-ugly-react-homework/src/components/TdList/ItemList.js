import React from "react";
import Item from "./Item";

function ItemList(props) {
  if (props.onDisplay.length === 0) {
    return <p>Found No To-do Items.</p>;
  }

  return (
    <div className="App">
      {props.onDisplay.map((item, index) => (
        <Item id={index} key={index} item={item} onDelete={props.onDelete} />
      ))}
    </div>
  );
}

export default ItemList;
