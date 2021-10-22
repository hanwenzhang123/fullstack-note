import React from "react";
import Item from "./Item";
import { connect } from "react-redux";
import * as actions from "../../store/action";

function ItemList(props) {
  if (props.todo.length === 0) {
    return <p>Found No To-do Items.</p>;
  }

  return (
    <div className="App">
      {props.todo.map((item, index) => (
        <Item id={index} key={index} item={item} onDelete={props.deleteHandler}/>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  todo: state.tdListReducer.todo,
});

const mapDispatchToProps = (dispatch) => ({
  deleteHandler: (id) => dispatch(actions.deleteAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
