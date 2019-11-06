import React, { Component } from "react";
import "./contact.scss";
import Header from "../header";
export default class Contact extends Component {
  render() {
    return (
      <div className="coordinator">
        <Header title={this.props.title} />
        <div className="coordinator_grid">
          {this.props.data.map(update => {
            return (
              <div className="coordinator_unit">
                <p>{update.name}</p>
                <p> {update.number} </p>
                <p> {update.email}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
