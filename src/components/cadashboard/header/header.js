import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';
// import Hamburger from './hamburger'
import { Link } from "react-router-dom";
import './css/main.css';
import ecell from './static/image.svg';
import esummit from './static/esummit.png';
import "./css/navbar.css";

export default class ComingSoon extends Component {
  constructor() {
    super();
    this.state = {
      displaynavbar: false,
      navdisplay: true,
      isActive: window.location.pathname.substring(1),
    };
  }

  componentDidMount() {
    if (window.innerWidth >= 768) {
      this.setState(
        {
          navdisplay: false,
        },
      );
    }
  }

  render() {
    return (
      <div className="header">

        <span className="ecell_logo">
          <a href="http://ecelliitr.org" target="_blank" rel="noopener noreferrer">
            <img src={ecell} alt="Ecell Logo" />
            {' '}
          </a>
        </span>

        <span className="esummit_logo">
          <NavLink to="/">
            {' '}
            <img src={esummit} alt="Esummit Logo" />
          </NavLink>
        </span>

        <span className="links">
          <NavLink to="/login"> Campus Ambassador</NavLink>
          <NavLink to="/ignite"> Startup Ignite</NavLink>
          <NavLink target="_blank" to="/ideastorm">Idea Storm </NavLink>

        </span>


        <span className="mobile_menu">

          <div className="ecell-special-navbar-toggle">
            <div className={!this.state.displaynavbar ? 'new-navbar-i' : 'new-navbar-i span-cross'} onClick={() => this.setState({ displaynavbar: !this.state.displaynavbar })}>
              <span><i /></span>
              <span><i /></span>
              <span><i /></span>
            </div>
          </div>
          {this.state.navdisplay
            ? (
              <div className={this.state.displaynavbar ? 'ecell-mobile-navbar-active' : 'ecell-mobile-navbar-inactive'}>
                <Link to="/" className="">
                  <div className={this.state.displaynavbar ? "navbar-show ecell-mobile-menuback" : "navbar-hide ecell-mobile-menuback"}>
                    <p className={this.state.isActive === '' ? "esummit-navbar-cto-active" : null}>Home</p>
                  </div>
                </Link>
                <Link to="/ignite" className="">
                  <div className={this.state.displaynavbar ? "navbar-show" : "navbar-hide"}>
                    <p className={this.state.isActive === 'ignite' ? "esummit-navbar-cto-active" : null}>Startup Ignite</p>
                  </div>
                </Link>
                <Link to="/register" className="">
                  <div className={this.state.displaynavbar ? "navbar-show" : "navbar-hide"}>
                    <p className={this.state.isActive === 'register' ? "esummit-navbar-cto-active" : null}>Campus Ambassador</p>
                  </div>
                </Link>
                <Link to="/ideastorm" className="">
                  <div className={this.state.displaynavbar ? "navbar-show" : "navbar-hide"}>
                    <p className={this.state.isActive === 'footer' ? "esummit-navbar-cto-active" : null}>IdeaStorm</p>
                  </div>
                </Link>
              </div>
            )
            : null}

        </span>

      </div>
    );
  }
}
