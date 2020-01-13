import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

import esummitLogo from '../../assets/esummit-logo.svg'
import './src/navbar.css'
// import Navbar from '../registration/navbar/navbar'
/* eslint-disable react/prop-types */

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

  gotoDashboard = () => {
    window.location.href = '/dashboard/invite'
  }
  render() {
    let token = localStorage.getItem('user_token')
    console.log(this.props)
    let tabs
    if (token !== undefined && token !== null && token !== '') {
      tabs = (
        <>
          <li className="navbar-items navbar-mobile-items">
            <div className="navbar-links" onClick={this.gotoDashboard}>
              <button className="navbar-register-button">DASHBOARD</button>
            </div>
          </li>
        </>
      )
    } else {
      tabs = (
        <>
          <li className="navbar-items navbar-mobile-items">
            <Link to="/login" className="navbar-links">
              <div className={this.props.location.pathname==='/login'? "active-navbar-register navbar-newregister-button":"navbar-newregister-button"}>

                <p>Login</p>
              </div>
            </Link>
          </li>
          <li className="navbar-items navbar-mobile-items">
            <Link to="/register" className="navbar-links">
              <button className={this.props.location.pathname==='/register'? "active-navbar-register navbar-newregister-button":"navbar-newregister-button"}>
              Register</button>
            </Link>
          </li>
        </>
      )
    }
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
              to="/events"
              className={this.props.location.pathname==='/events'? "active-navbar-links navbar-links":"navbar-links"}
              rel="noopener noreferrer"
            >
              Events
            </Link>
          </li>
          {
            <li className="navbar-items">
              <Link
                to="/Speakers"
                className={this.props.location.pathname==='/Speakers'? "active-navbar-links navbar-links":"navbar-links"}
                rel="noopener noreferrer"
              >
                Speakers
              </Link>
            </li>
          }
          <li className="navbar-items">
            <Link
              to="/campus-ambassador"
              className={this.props.location.pathname==='/campus-ambassador'? "active-navbar-links navbar-links":"navbar-links"}
              rel="noopener noreferrer"
            >
              Campus Ambassador
            </Link>
          </li>
          <li className="navbar-items">
            <Link to="/faqs" className={this.props.location.pathname==='/faqs'? "active-navbar-links navbar-links":"navbar-links"} rel="noopener noreferrer">
              FAQs
            </Link>
          </li>
          <li className="navbar-items">
            <Link
              to="/sponsors"
              className={this.props.location.pathname==='/sponsors'? "active-navbar-links navbar-links":"navbar-links"}
              rel="noopener noreferrer"
            >
              Sponsors
            </Link>
          </li>
          {/* <li className="navbar-items">
            <Link
              to="/Sponsors"
              className={this.props.location.pathname==='/events'? "active-navbar-links":"navbar-links"}
              rel="noopener noreferrer"
            >
              Sponsors
            </Link>
          </li> */}
          {tabs}
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
                to="/events"
                className={this.props.location.pathname==='/events'? "active-navbar-links navbar-links":"navbar-links"}
                rel="noopener noreferrer"
              >
                Events
              </Link>
            </li>
            <li className="navbar-mobile-items">
              <Link
                to="/speakers"
                className={this.props.location.pathname==='/speakers'? "active-navbar-links navbar-links":"navbar-links"}
                rel="noopener noreferrer"
              >
                Speakers
              </Link>
            </li>
            <li className="navbar-mobile-items">
              <Link
                to="/campus-ambassador"
                className={this.props.location.pathname==='/campus-ambassador'? "active-navbar-links navbar-links":"navbar-links"}
                rel="noopener noreferrer"
              >
                Campus Ambassador
              </Link>
            </li>
            <li className="navbar-mobile-items">
              <Link to="/faqs" className={this.props.location.pathname==='/faqs'? "active-navbar-links navbar-links":"navbar-links"} rel="noopener noreferrer">
                FAQs
              </Link>
            </li>
            <li className="navbar-mobile-items">
              <Link
                to="/sponsors"
                className={this.props.location.pathname==='/sponsors'? "active-navbar-links navbar-links":"navbar-links"}
                rel="noopener noreferrer"
              >
                Sponsors
              </Link>
            </li>
            {/* <li className="navbar-mobile-items">
              <Link to="/register" className={this.props.location.pathname==='/events'? "active-navbar-links":"navbar-links"}>
                <button className="navbar-register-button">Register</button>
              </Link>
            </li>
            <li className="navbar-mobile-items">
              <Link to="/login" className={this.props.location.pathname==='/events'? "active-navbar-links":"navbar-links"}>
                <button className="navbar-register-button">Login</button>
              </Link>
            </li> */}
            {tabs}
          </ul>
        </div>
      </div>
    )
  }
}

export default index
/* eslint-disable react/prop-types */
