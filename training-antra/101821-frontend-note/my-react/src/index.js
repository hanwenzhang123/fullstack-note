import React from 'react';
import ReactDOM from 'react-dom';

import MyReactDOM from './MyReact/MyReactDOM';
import MyReact from './MyReact/MyReact';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('didMount', document.querySelector('.app-counter'));
  }

  render() {
    return (
      <section className="app-counter">
        <header>
          <h1>Counter: {this.props.initNum}</h1>
        </header>
        <button className="btn" onClick={() => this.setState({})}>
          Add
        </button>
      </section>
    );
  }
}
console.log(<Counter initNum={0} />);
ReactDOM.render(<Counter initNum={0} />, document.getElementById('root'));

const Button = (props) => {
  return (
    <button className="btn" onClick={() => alert('add')}>
      {props.btnText}
    </button>
  );
};
class MyCounter extends MyReact.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log('helloo');
    return (
      <section className="app-counter">
        <header>
          <h1>Counter: {this.props.initNum}</h1>
        </header>
        <Button btnText="Add"></Button>
      </section>
    );
  }
}

const myElement = {
  type: MyCounter,
  props: {
    initNum: 10,
  },
};

// MyReactDOM.render(myElement, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
