import React from "react";

function Item(props) {
  return (
    <div>
      <li>
        {props.item}
        <button onClick={() => props.onDelete(props.id)}>x</button>
      </li>
    </div>
  );
}

export default Item;
