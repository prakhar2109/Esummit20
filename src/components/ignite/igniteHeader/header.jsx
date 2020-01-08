import React, { Component } from 'react'
import './header.css'
import ignite from './assets/ignite.svg'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="igniteHeaderSection">
        <div>
          <img src={ignite} alt="" />
        </div>

        <p>Startup Ignite</p>

        <p>Be a part of something bigger</p>

        <br />
        <p>
          Idea Storm is the annual business plan competition,conducted as a part
          of Entrepreneurship Summit, the flagship event of Entrepreneurship
          Cell IIT Roorkee. The best Ideas get mentorship from experienced
          entrepreneurs, cash rewards worth 2.5 lakhs and the impressive ones
          even have opportunity to raise funding from the VCs. Gear up to
          compete with the best minds of the country to prove your business
          acumen. This would be a perfect stage for you, If you want to turn
          your ideas into an entrepreneurial ventures
        </p>
      </div>
    )
  }
}

export default Header
