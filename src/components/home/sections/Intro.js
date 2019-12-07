import React, { Component } from 'react'
import ecellLogo from '../../../assets/ecell-logo.svg'
import disruptionText from '../../../assets/disruption-text.svg'
class Intro extends Component {
  render() {
    return (
      <div className="home-section-intro-container">
        <div className="home-section-intro">
          <img src={ecellLogo} alt="" />
          <div className="home-section-paragraph">presents</div>
          <img
            src={disruptionText}
            className="home-section-background-disruption"
            alt=""
          />
          <div className="home-section-paragraph">1st & 2nd February 2020</div>
          <a href="/register" className="home-section-intro-link">
            <button className="home-section-intro-button">Register</button>
          </a>
        </div>
      </div>
    )
  }
}

export default Intro