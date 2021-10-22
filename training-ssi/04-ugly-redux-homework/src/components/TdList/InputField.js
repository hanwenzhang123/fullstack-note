import React from "react";
import { connect } from "react-redux";
import * as actions from "../../store/action";

const InputField = ({ text, textHandler, addHandler, sortHandler }) => {
  const handleChange = (e) => {
    textHandler(e.target.value);
  };

  const handleAdd = (e) => {
    addHandler(e.target.value);
  };

  const handleDropdown = (e) => {
    sortHandler(e.target.value);
  };

  return (
    <div>
      <h1> TO-DO LIST </h1>
      <input
        type="text"
        value={text}
        placeholder="Enter Task"
        onChange={handleChange}
      />

      <button onClick={handleAdd}>ADD</button>
      <select onChange={handleDropdown}>
        <option>***sort***</option>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>
    </div>
  );
};
const mapStateToProps = (state) => ({
  text: state.tdListReducer.text,
});

const mapDispatchToProps = (dispatch) => ({
  textHandler: (item) => dispatch(actions.textAction(item)),
  addHandler: (todo) => dispatch(actions.addAction(todo)),
  sortHandler: (value) => dispatch(actions.sortAction(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputField);
