import React, { Component } from 'react'
import './style.css'
import Header from '../Common/header'
/* eslint-disable react/prop-types */

export default class EventCoordinatorSection extends Component {
  render() {
    return (
      <div className="coordinator-parent">
        <div className="coordinator-head">EVENT CO-ORDINATOR </div>
        <p className="coordinator-body">
          {this.props.data.map((cordinate, index) => (
            <div key={index} className="coordinator-info">
              {cordinate.name}
              <br />
              {cordinate.number}
              <br />
              {cordinate.email}
            </div>
          ))}
        </p>
      </div>
    )
  }
}
/* eslint-disable react/prop-types */
