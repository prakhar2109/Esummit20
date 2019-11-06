import React, { Component } from "react";
import "./style.css";
import Header from "../Common/header";
export default class EligibilitySection extends Component {
  render() {
    return (
      <div className="eligiblity">
        <Header title="ELIGIBILITY CRITERIA" />
        <ol>
          {this.props.data.map((eligibility, index) => (
            <li key={index}>{eligibility.elligiblity}</li>
          ))}
        </ol>
      </div>
    );
  }
}
