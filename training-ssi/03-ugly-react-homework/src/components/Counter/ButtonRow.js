import React from "react";

function ButtonRow(props) {
  return (
    <div className="App">
      <button onClick={props.clickHandler}>{props.value}</button>
    </div>
  );
}

export default ButtonRow;
