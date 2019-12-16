import React, { Component } from 'react'
import '../../css/cacontigent.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
/* eslint-disable react/prop-types */
class Aboutcontigent extends Component {
  constructor() {
    super()
    this.state = {}
  }
  componentDidMount = () => {}
  render() {
    return (
      <>
        <div className="cacontigent-parent-heading2">About Contigent</div>
        <div className="cacontigent-Aboutcontigent-parent">
          <div className="cacontigent-heading">What is Contingent?</div>
          <div className="cacontigent-aboutparent-para">
            A group of people sharing a common feature, forming part of a larger
            group.
          </div>
          <div className="cacontigent-heading cacontigent-headingabout">
            Steps to make a contingent
          </div>
          <div className="cacontigent-aboutparent-para">
            To make a contingent, first each member has to do individual
            registration.
            <br />
            After individual registration, contingent leader creates a
            contingent from his dashboard submitting details of each member.
            <br />
            Minimum four members are required to register for contingent
            <br />
            A unique ID will be generated using which other contingent member
            can join their respective contingents
            <br />
          </div>
        </div>
      </>
    )
  }
}

export default Aboutcontigent
/* eslint-disable react/prop-types */
