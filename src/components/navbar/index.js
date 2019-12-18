import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import esummitLogo from '../../assets/esummit-logo.svg'
import './src/navbar.css'
// import Navbar from '../registration/navbar/navbar'
class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMobile: false
    }
  }
  componentDidMount() {
    if (window.innerWidth <= 768) {
      this.setState({
        isMobile: true,
        displayNavbar: false
      })
    }
  }
  showNavbar = e => {
    this.setState({
      displayNavbar: !this.state.displayNavbar
    })
    var x = document.getElementById('nav-icon1')
    x.classList.toggle('active')
  }
  render() {
    return (
      <div className="navbar-container">
        <Link
          to="/"
          className={
            !this.state.isMobile ? 'navbar-logo-link' : 'navbar-logo-link-off'
          }
        >
          <img src={esummitLogo} className="navbar-logo" alt="" />
        </Link>
        <ul
          className={
            !this.state.isMobile ? 'navbar-content' : 'navbar-content-off'
          }
        >
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
          <li className="navbar-items">
            <Link to="/login" className="navbar-links">
              <button className="navbar-register-button">Login</button>
            </Link>
          </li>
        </ul>

        <div
          className={
            this.state.isMobile ? 'navbar-mobile' : 'navbar-mobile-off'
          }
        >
          <Link to="/" className="navbar-logo-link">
            <img src={esummitLogo} className="navbar-logo" alt="" />
          </Link>
          <div className="nav-icon" id="nav-icon1" onClick={this.showNavbar}>
            <div></div>
          </div>

          <ul
            className="navbar-mobile-content"
            id={!this.state.displayNavbar ? 'mobile-content' : ''}
          >
            <li className="navbar-mobile-items">
              <Link
                to="/campus-ambassador"
                className="navbar-links"
                target="_blank"
                rel="noopener noreferrer"
              >
                Campus Ambassador
              </Link>
            </li>
            <li className="navbar-mobile-items">
              <Link to="/register" className="navbar-links">
                <button className="navbar-register-button">Register</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default index
