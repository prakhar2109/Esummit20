import React, { Component } from 'react'
import ecellLogo from '../../../assets/ecell-logo.svg'
import disruptionText from '../../../assets/disruption-text.svg'
class Intro extends Component {
  gotoDashboard = () => {
    window.location.href = '/dashboard/invite'
  }
  render() {
    let token = localStorage.getItem('user_token')
    let tabs
    if (token !== undefined && token !== null && token !== '') {
      tabs = (
        <>
          <div className="home-section-intro-link" onClick={this.gotoDashboard}>
            <button className="home-section-intro-button">Dashboard</button>
          </div>
        </>
      )
    } else {
      tabs = (
        <>
          <a href="/register" className="home-section-intro-link">
            <button className="home-section-intro-button">Register</button>
          </a>
        </>
      )
    }
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
          {tabs}
        </div>
      </div>
    )
  }
}

export default Intro
