import React, { Component } from 'react'
import './header.css'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="headerSection">
        <p>Startup Expo 2.0</p>

        <p>Startup Fair</p>

        <br />
        <br />
        <br />
        {/* <p>CASH PRIZE WORTH INR 2,50,000</p> */}

        <p>
          Startup expo 2.0 is a showcase platform especially designed to offer
          everything that a new entrepreneur requires to succeed in their
          business or to take their startup to the next level.<br></br>
          <br />
          Startup Expo 2.0 team is fully determined to provide entrepreneurs, a
          high visibility transformative platform where they can showcase their
          ventures, meet investors, find potential customers, receive one-on-one
          mentoring, explore partnership opportunities, and interact with all
          the stakeholders that can help them to scale new heights.
        </p>
        <br />
        <div className="register">
          <a without rel="noopener noreferrer" href="http://bit.ly/StartupExpo2020" target="_blank">
            <span>APPLY FOR STARTUPEXPO</span>
          </a>
        </div>
      </div>
    )
  }
}

export default Header
