obj = {
  name: "helen",
  city: "san jose",
};

Obj.keys(obj)
Obj.values(obj)
Obj.entries(obj)


ImageGallery -> left part
ProductDetail -> right
    - ColorPicker
    - SizePicker

this.setState 

import react, { Component } from "react";


class Counter extends Component {
    constructor (props) {
        super(props);
        this.state = {
            number: 0 
        }
    }

    increment = () => {
        this.setState((preState) => {
            return {number: prevState.number + 1}
        })
    }

    render() {
        return (
            <h1>{this.state.number}</h1>
            <buttom onClick={this.increment}>Increment</buttom>
        )
    }
}

export default Counter;
