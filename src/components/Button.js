import React, { Component } from "react";

class Button extends Component {
  render() {
    const { title } = this.props;
    return <button>{title}</button>;
  }
}

export default Button;
