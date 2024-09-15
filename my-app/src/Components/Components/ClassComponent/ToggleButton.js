import React, { Component } from "react";

class ToggleButton extends Component {
  constructor() {
    super();
    this.state = {
      high: false,
      message: "ON",
    };
  }

  changeMessage() {
    this.setState((prev)=> {
      if (prev.high == true) {
        return {
          message: "ON",
          high: false,
        };
      } else {
        return {
          message: "OFF",
          high: true,
        };
      }
    });
  }

  render() {
    const { message } = this.state;

    return (
      <div>
        <button onClick={() => this.changeMessage()}>{message}</button>
      </div>
    );
  }
}
export default ToggleButton;
