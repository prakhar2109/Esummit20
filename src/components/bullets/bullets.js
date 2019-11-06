import React, { Component } from "react";
import Header from "../header";
import "./bullets.scss";

export default class Bullets extends Component {
  render() {
    return (
      <div>
        <div className="bullets">
          <Header title={this.props.title} />

          <ol>
            {this.props.data.map(update => (
              <li>{update.value}</li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}
