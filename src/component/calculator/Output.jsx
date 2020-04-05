import React, { Component } from "react";

class Output extends Component {
  state = {};
  render() {
    return (
      <div className="output">
        {this.props.number ? (
          <h6 className="show">{this.props.number}</h6>
        ) : (
          <span className="text">Click on a number.</span>
        )}
      </div>
    );
  }
}

export default Output;
