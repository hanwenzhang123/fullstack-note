import React, { Component } from "react";
import Count from "./Count";
import ButtonRow from "./ButtonRow";
import Card from "../UI/Card";
import ContentContainer from "../HOC/ContentContainer";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      isRunning: false,
    };
  }

  increment = () => {
    this.setState((prevState) => {
      return { number: prevState.number + 1 };
    });
  };

  decrement = () => {
    this.setState((prevState) => {
      return { number: prevState.number - 1 };
    });
  };

  incIfOdd = () => {
    if (this.state.number % 2 !== 0) {
      this.increment();
    }
  };

  asyncInc = () => {
    setTimeout(() => {
      this.increment();
    }, 1000);
  };

  reset = () => {
    this.setState({ number: 0 });
  };

  timerHandler = () => {
    this.setState((prevState) => ({
      isRunning: !prevState.isRunning,
    }));
  };

  componentDidMount() {
    this.intervalID = setInterval(() => {
      if (this.state.isRunning) {
        this.setState((prevState) => ({
          number: prevState.number + 1,
        }));
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    const { number } = this.state;
    const { increment, decrement, incIfOdd, asyncInc, reset, timerHandler } =
      this;

    return (
      <Card>
        <Count num={number} />
        <ButtonRow clickHandler={increment} value="Increment +1" />
        <ButtonRow clickHandler={decrement} value="Decrement -1" />
        <ButtonRow clickHandler={incIfOdd} value="Increment-If-Odd" />
        <ButtonRow clickHandler={asyncInc} value="Async-Inc" />
        <ButtonRow clickHandler={reset} value="Reset" />
        <ButtonRow
          clickHandler={timerHandler}
          value={this.state.isRunning ? "TIMER STOP" : "TIMER START"}
        />
      </Card>
    );
  }
}

const HOCCounter = ContentContainer(Counter);
export default HOCCounter;
