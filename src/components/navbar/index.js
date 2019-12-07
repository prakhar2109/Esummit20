import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import esummitLogo from '../../assets/esummit-logo.svg'
class index extends Component {
  render() {
    return (
      <div className="navbar-container">
        <Link to="/" className="navbar-logo-link">
          <img src={esummitLogo} className="navbar-logo" alt="" />
        </Link>
        <ul className="navbar-content">
          <li className="navbar-items">
            <Link
              to="/campus-ambassador"
              className="navbar-links"
              target="_blank"
              rel="noopener noreferrer"
            >
              Campus Ambassador
            </Link>
          </li>
          <li className="navbar-items">
            <Link to="/register" className="navbar-links">
              <button className="navbar-register-button">Register</button>
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default index
