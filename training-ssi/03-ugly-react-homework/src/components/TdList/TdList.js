import React, { Component } from "react";
import InputField from "./InputField";
import ItemList from "./ItemList";
import Card from "../UI/Card";
import ContentContainer from "../HOC/ContentContainer";

class TdList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["Study React", "Do Homework"],
    };
  }

  addItem = (inputText) => {
    const list = [...this.state.list];
    list.push(inputText);
    this.setState({ list });
  };

  deleteItem = (id) => {
    const list = [...this.state.list];
    const updatedList = list.filter((item, index) => index !== id);
    this.setState({ list: updatedList });
  };

  sortList = (value) => {
    const list = [...this.state.list];
    if (value === "asc") {
      const ascList = list.sort((a, b) => a.localeCompare(b));
      this.setState({ list: ascList });
    } else if (value === "desc") {
      const descList = list.sort((a, b) => b.localeCompare(a));
      this.setState({ list: descList });
    }
  };

  render() {
    const { list } = this.state;
    const { addItem, deleteItem, sortList } = this;

    return (
      <Card>
        <InputField onAdd={addItem} onSelect={sortList} />
        <ItemList onDisplay={list} onDelete={deleteItem} />
      </Card>
    );
  }
}

const HOCTdList = ContentContainer(TdList);
export default HOCTdList;
