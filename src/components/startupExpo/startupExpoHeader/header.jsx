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

        <p>B-PLAN COMPETITION</p>

        <br />
        <br />
        <br />
        <p>CASH PRIZE WORTH INR 2,50,000</p>

        <p>
          Startup Expo 2.0 is the annual business plan competition,conducted as
          a part of Entrepreneurship Summit, the flagship event of
          Entrepreneurship Cell IIT Roorkee. The best Ideas get mentorship from
          experienced entrepreneurs, cash rewards worth 2.5 lakhs and the
          impressive ones even have opportunity to raise funding from the VCs.
          Gear up to compete with the best minds of the country to prove your
          business acumen. This would be a perfect stage for you, If you want to
          turn your ideas into an entrepreneurial ventures
        </p>
        <div className="register">
          <a without rel="noopener noreferrer" href="#" target="_blank">
            <span>APPLY FOR STARTUPEXPO</span>
          </a>
        </div>
      </div>
    )
  }
}

export default Header
