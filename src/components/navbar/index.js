import React, { Component } from 'react'
import esummitLogo from '../../assets/esummit-logo.svg'
class index extends Component {
  render() {
    return (
      <div className="navbar-container">
        <a href="/" className="navbar-logo-link">
          <img src={esummitLogo} className="navbar-logo" alt="" />
        </a>
        <ul className="navbar-content">
          <li className="navbar-items">
            <a
              href="/campus-ambassador"
              className="navbar-links"
              target="_blank"
              rel="noopener noreferrer"
            >
              Campus Ambassador
            </a>
          </li>
          <li className="navbar-items">
            <a href="/register" className="navbar-links">
              <button className="navbar-register-button">Register</button>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default index
