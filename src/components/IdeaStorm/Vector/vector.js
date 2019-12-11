import React, { Component } from "react";
import Vector from "../static/headVector.png";
import "./vector.css";
import PropTypes from 'prop-types';
/* eslint-disable react/prop-types */
class Header extends Component {
  state = {};

  render() {
    return (
      <div className="esummit-landing-bubble-heading">
        <img className="vector" src={Vector} alt="" />
        <p className="head1">{this.props.title}</p>
      </div>
    );
  }
}

export default Header
/* eslint-disable react/prop-types */
