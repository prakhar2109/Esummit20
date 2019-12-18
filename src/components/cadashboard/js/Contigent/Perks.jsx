import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class Perks extends Component {
  constructor() {
    super()
    this.state = {}
  }
  componentDidMount = () => {}
  render() {
    return (
      <div>
        <div className="cacontigent-parent-heading2">Perks</div>
        <div className="cacontigent-Aboutcontigent-parent">
          <div className="cacontigent-heading">
            Benefits of Contingent model
          </div>
          <div className="cacontigent-aboutparent-para">
            The following criteria were used to decide the waiver in fees for
            all the participants.
          </div>

          <div className="cacontigent-aboutparent-para">
            30 % Off on team size of 5-7 .<br />
            40 % Off on team size of 8-10.
            <br />
            50 % Off on team size of more than 10 .<br />
          </div>
        </div>
      </div>
    )
  }
}

export default Perks
/* eslint-disable react/prop-types */
