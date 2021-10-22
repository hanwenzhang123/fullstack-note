import React from "react";

function Count(props) {
  const { num } = props;
  return (
    <div>
      <h1>COUNTING</h1>
      <h2>Current Count: {num}</h2>
    </div>
  );
}

export default Count;
