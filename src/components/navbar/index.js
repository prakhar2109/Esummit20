import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

import esummitLogo from '../../assets/esummit-logo.svg'
class index extends Component {
  gotoDashboard = () => {
    window.location.href = '/dashboard/invite'
  }
  render() {
    let token = localStorage.getItem('user_token')
    let tabs
    if (token !== undefined && token !== null && token !== '') {
      tabs = (
        <>
          <li className="navbar-items">
            <div className="navbar-links" onClick={this.gotoDashboard}>
              <button className="navbar-register-button">DASHBOARD</button>
            </div>
          </li>
        </>
      )
    } else {
      tabs = (
        <>
          <li className="navbar-items">
            <Link to="/register" className="navbar-links">
              <button className="navbar-register-button">Register</button>
            </Link>
          </li>
          <li className="navbar-items">
            <Link to="/login" className="navbar-links">
              <button className="navbar-register-button">Login</button>
            </Link>
          </li>
        </>
      )
    }
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
          {tabs}
        </ul>
      </div>
    )
  }
}

export default index
