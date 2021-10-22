import React, { Component } from "react";

import InputField from "./InputField";
import ItemList from "./ItemList";
import Card from "../UI/Card";
import ContentContainer from "../HOC/ContentContainer";

class TdList extends Component {
  render() {
    return (
      <Card>
        <InputField />
        <ItemList />
      </Card>
    );
  }
}

const HOCTdList = ContentContainer(TdList);
export default HOCTdList;
