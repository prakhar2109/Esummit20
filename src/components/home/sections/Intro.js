import React, { Component } from 'react'
import ecellLogo from '../../../assets/footer-logo.svg'
import disruptionText from '../../../assets/disruption-text.svg'
import waveLogo from '../../../assets/wave_circle.gif'
import './introHome.css'
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
            <button className="home-section-intro-button">Register now</button>
          </a>
        </>
      )
    }
    return (
      <div className="home-section-intro-container" id="background_intro">
        <div className="home-section-intro">
          <div
            className="home-section-intro-content"
            id="background_intro_content"
          >
            <img
              src={ecellLogo}
              alt=""
              className="home-section-intro-ecellLogo"
            />
            <div className="home-section-paragraph">presents</div>
            <img
              src={disruptionText}
              className="home-section-background-disruption"
              alt=""
            />
            <div className="home-section-paragraph">
              1st & 2nd February 2020
            </div>
          </div>
          {tabs}
        </div>
      </div>
    )
  }
}

export default Intro
