import React, { Component } from "react";

import Card from "../UI/Card";
import Count from "./Count";
import ButtonRow from "./ButtonRow";
import ContentContainer from "../HOC/ContentContainer";

class Counter extends Component {
  render() {
    return (
      <Card>
        <Count />
        <ButtonRow />
      </Card>
    );
  }
}

const HOCCounter = ContentContainer(Counter);
export default HOCCounter;