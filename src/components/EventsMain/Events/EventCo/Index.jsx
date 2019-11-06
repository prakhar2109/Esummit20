import React, { Component } from "react";
import "./style.css";
import Header from "../Common/header";

export default class EventCoordinatorSection extends Component {
  render() {
    return (
      <div className="coordinator">
        <Header title="EVENT CO-ORDINATOR" />
        <div className="coordinator_grid">
          {this.props.data.map((cordinate, index) => (
            <div key={index} className="esummit-coordinator_unit">
              <p>{cordinate.name}</p>
              <p>{cordinate.number}</p>
              <p>{cordinate.email}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
