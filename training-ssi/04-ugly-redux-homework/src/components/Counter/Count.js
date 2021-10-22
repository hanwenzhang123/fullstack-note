import React from "react";
import { connect } from "react-redux";

function Count(props) {
  return (
    <div>
      <h1>COUNTING</h1>
      <h2>Current Count: {props.counter}</h2>
    </div>
  );
}

const mapStateToProps = (state) => ({
  counter: state.counterReducer.counter,
});

export default connect(mapStateToProps)(Count);
