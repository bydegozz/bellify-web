import React, { Component } from "react";

// components
import Button from "./Button";

class TitleDescription extends Component {
  render() {
    const { imgurl, imgalt, title, description, button } = this.props;
    return (
      <div>
        <img className="" src={imgurl} alt={imgalt} />
        <h3>{title}</h3>
        <p>{description}</p>
        <Button title={button} />
      </div>
    );
  }
}

export default TitleDescription;
