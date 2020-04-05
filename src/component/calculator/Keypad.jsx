import React, { Component } from "react";

class keypad extends Component {
  state = {};

  buttonData = (e) => {
    this.props.changeHandler(e.target.name);
  };
  render() {
    return (
      <ul className="keypad_buttons">
        <li>
          <button name="ce" onClick={this.buttonData}>
            ce
          </button>
        </li>
        <li>
          <button name="X" onClick={this.buttonData}>
            x
          </button>
        </li>
        <li>
          <button name="=" onClick={this.buttonData}>
            =
          </button>
        </li>
        <li>
          <button name="1" onClick={this.buttonData}>
            1
          </button>
        </li>
        <li>
          <button name="2" onClick={this.buttonData}>
            2
          </button>
        </li>
        <li>
          <button name="3" onClick={this.buttonData}>
            3
          </button>
        </li>
        <li>
          <button name="4" onClick={this.buttonData}>
            4
          </button>
        </li>
        <li>
          <button name="5" onClick={this.buttonData}>
            5
          </button>
        </li>
        <li>
          <button name="6" onClick={this.buttonData}>
            6
          </button>
        </li>
        <li>
          <button name="7" onClick={this.buttonData}>
            7
          </button>
        </li>
        <li>
          <button name="8" onClick={this.buttonData}>
            8
          </button>
        </li>
        <li>
          <button name="9" onClick={this.buttonData}>
            9
          </button>
        </li>
        <li>
          <button name="0" onClick={this.buttonData}>
            0
          </button>
        </li>
        <li>
          <button name="+" onClick={this.buttonData}>
            +
          </button>
        </li>
        <li>
          <button name="-" onClick={this.buttonData}>
            -
          </button>
        </li>
        <li>
          <button name="*" onClick={this.buttonData}>
            *
          </button>
        </li>
        <li>
          <button name="/" onClick={this.buttonData}>
            /
          </button>
        </li>
        <li>
          <button name="%" onClick={this.buttonData}>
            %
          </button>
        </li>
      </ul>
    );
  }
}

export default keypad;
