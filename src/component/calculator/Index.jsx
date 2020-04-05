import React, { Component } from "react";
import Keypad from "./Keypad";
import Output from "./Output";
class Calculator extends Component {
  state = {
    number: "",
  };

  changeHandler = (button) => {
    if (button === "=") {
      this.calculate();
    } else if (button === "X") {
      this.clearData();
    } else if (button === "ce") {
      this.resetData();
    } else {
      this.setState({
        number: this.state.number + button,
      });
    }
  };

  calculate = () => {
    console.log(this.state.number);
    this.setState({
      number: eval(this.state.number),
    });
  };
  clearData = (e) => {
    this.setState({
      number: this.state.number.slice(0, -1),
    });
  };
  resetData = (e) => {
    this.setState({
      number: "",
    });
  };
  render() {
    return (
      <div className="calculator">
        <h4 className="cal_title">Simple Calculator App</h4>
        <Output number={this.state.number} />
        <Keypad changeHandler={this.changeHandler} resetData={this.resetData} />
      </div>
    );
  }
}

export default Calculator;
