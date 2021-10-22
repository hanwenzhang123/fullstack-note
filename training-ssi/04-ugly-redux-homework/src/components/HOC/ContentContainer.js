import React from "react";
import "./ContentContainer.css";

import { connect } from "react-redux";
import * as actions from "../../store/action";

export default function ContentContainer(OriginalComponent){
  const NewComponent = (props) => {
    const hidden = props.checked === true ? "" : "hidden";

    return (
        <div>
            <span>Invisible Checkbox</span>
            <input type="checkbox"  onClick={props.visibilityHandler} />
                {hidden ? <OriginalComponent /> : null}
        </div>
    );
  }
    const mapStateToProps = (state) => ({
      checked: state.visibilityReducer.checked,
    });

    const mapDispatchToProps = (dispatch) => ({
        visibilityHandler: () => dispatch(actions.visibilityAction()),
    });

    return connect(mapStateToProps, mapDispatchToProps)(NewComponent)
};