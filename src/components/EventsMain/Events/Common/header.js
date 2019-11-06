import React, { Component } from "react";
import Vector from "./headVector.png";
import "./header.scss";

class Header extends Component {
  render() {
    return (
      <div className="esummit-landing-bubble-heading">
        <img className="vector" src={Vector} alt="" />
        <p className="head1">{this.props.title}</p>
      </div>
    );
  }
}

export default Header;
