import React, { Component } from "react";
import "./style.css";
import Header from "../Common/header";
/* eslint-disable react/prop-types */

export default class EligibilitySection extends Component {
  render() {
    return (
      <div className="ideastormEligibility">
        <p>ELIGIBILITY CRITERIA</p>
        <ol>
          {this.props.data.map((eligibility, index) => (
            <li key={index}>{eligibility.elligiblity}</li>
          ))}
        </ol>
      </div>
    );
  }
}
/* eslint-disable react/prop-types */
