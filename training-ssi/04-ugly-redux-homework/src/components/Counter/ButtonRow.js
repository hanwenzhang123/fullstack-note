import React from "react";
import { connect } from "react-redux";
import * as actions from "../../store/action";

function ButtonRow(props) {
  function async() {
    setTimeout(() => {
      props.incHandler();
    }, 1000);
  }

  if(props.isRunning) {
    props.timerUpdate();
  } else {
    props.timerStopUpdate();
  }

  return (
    <div className="App">
      <button onClick={props.incHandler}>Increment +1</button> <br />
      <button onClick={props.decHandler}>Decrement -1</button> <br />
      <button onClick={props.oddHandler}>Increment-If-Odd</button> <br />
      <button onClick={async}>Async-Inc</button> <br />
      <button onClick={props.resetHandler}>Reset</button> <br />
      <button onClick={props.timerHandler}>
        {props.isRunning ? "TIMER STOP" : "TIMER START"}
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isRunning: state.counterReducer.isRunning,
});

const mapDispatchToProps = (dispatch) => ({
  incHandler: () => dispatch(actions.incAction()),
  decHandler: () => dispatch(actions.decAction()),
  oddHandler: () => dispatch(actions.oddAction()),
  resetHandler: () => dispatch(actions.resetAction()),
  timerHandler: () => dispatch(actions.timerAction()),
  timerUpdate: () => dispatch(actions.timerUpdate()),
  timerStopUpdate: () => dispatch(actions.timerStopUpdate()),
});

const ConnectedCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonRow);

export default ConnectedCounter;
