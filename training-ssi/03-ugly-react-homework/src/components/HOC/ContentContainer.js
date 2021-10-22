import React from "react";
import "./ContentContainer.css";

const ContentContainer = (OriginalComponent) => {
  class NewComponent extends React.Component {
    constructor() {
      super();
      this.state = {
        checked: false,
      };
    }

    handleVisibility = (e) => {
      this.setState({
        checked: !this.state.checked,
      });
    };

    render() {
      const hidden = this.state.checked === true ? "" : "hidden";
      return (
        <div>
          <span>Invisible Checkbox</span>
          <input type="checkbox" onClick={this.handleVisibility} />
          {hidden ? <OriginalComponent /> : null}
        </div>
      );
    }
  }
  return NewComponent;
};

export default ContentContainer;
