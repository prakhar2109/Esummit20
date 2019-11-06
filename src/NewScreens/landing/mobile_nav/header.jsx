import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-scroll";

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
    if (window.innerWidth >= 1200) {
      this.setState({ navdisplay: false });
    }
  }

  render() {
    let token = localStorage.getItem("user_token");
    let tabs;

   

    if (token !== undefined && token !== null && token !== "") {
      tabs = (

        <span>
          <NavLink to="/dashboard/invite">
            <span style={{ marginLeft: "3vw" }} className="login">Dashboard</span>
          </NavLink>

        </span>

      )
    }

    else {
      tabs = (
        <span>
          <NavLink to="/login">
            <span className="login">Log in</span>
          </NavLink>
          <NavLink to="/register">
            <span className="register">Register</span>
          </NavLink>
        </span>
      )
    }
    return (
      <div id="nav" className="Eventsheader">
        <NavLink to="/">
          {" "}
          <div className="idealogo" />
        </NavLink>

        <span className="mobile_menu">
          <div className="ecell-special-navbar-toggle">
            <div
              className={
                !this.state.displaynavbar
                  ? "new-navbarevent-i"
                  : "new-navbarevent-i span-cross"
              }
              onClick={() =>
                this.setState({
                  displaynavbar: !this.state.displaynavbar,
                })
              }
            >
              <span>
                <i />
              </span>
              <span>
                <i />
              </span>
              <span>
                <i />
              </span>
            </div>
          </div>
          {this.state.navdisplay ? (
            <div
              className={
                this.state.displaynavbar
                  ? "ecell-mobile-navbarevent-active"
                  : "ecell-mobile-navbar-inactive"
              }
            >
              <Link
                activeClass="active"
                to="events"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <div
                  className={
                    this.state.displaynavbar
                      ? "navbar-show ecell-mobile-menuback"
                      : "navbar-hide ecell-mobile-menuback"
                  }
                >

                  <p
                    className={
                      this.state.isActive === "Events"
                        ? "esummit-navbarevent-cto-active"
                        : "esummit-navbarevent-cto-inactive"
                    }
                    onClick={() => this.setState({ isActive: "Events", displaynavbar: !this.state.displaynavbar, })}
                  >
                    EVENTS
                </p>
                </div>

              </Link>

              <Link
                activeClass="active"
                to="speakers"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >

                <div
                  className={
                    this.state.displaynavbar
                      ? "navbar-show ecell-mobile-menuback"
                      : "navbar-hide ecell-mobile-menuback"
                  }
                >
                  <p
                    className={
                      this.state.isActive === "speakers"
                        ? "esummit-navbarevent-cto-active"
                        : "esummit-navbarevent-cto-inactive"
                    }
                    onClick={() => this.setState({ isActive: "speakers", displaynavbar: !this.state.displaynavbar, })}
                  >
                    SPEAKERS
                </p>
                </div>
              </Link>

              <Link
                activeClass="active"
                to="sponsors"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <div
                  className={
                    this.state.displaynavbar
                      ? "navbar-show ecell-mobile-menuback"
                      : "navbar-hide ecell-mobile-menuback"
                  }
                >
                  <p
                    className={
                      this.state.isActive === "Sponsors"
                        ? "esummit-navbarevent-cto-active"
                        : "esummit-navbarevent-cto-inactive"
                    }
                    onClick={() => this.setState({ isActive: "Sponsors", displaynavbar: !this.state.displaynavbar, })}
                  >
                    PARTNERS
                    </p>
                </div>

              </Link>

              <Link
                activeClass="active"
                to="faq"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >

                <div
                  className={
                    this.state.displaynavbar
                      ? "navbar-show ecell-mobile-menuback"
                      : "navbar-hide ecell-mobile-menuback"
                  }
                >
                  <p
                    className={
                      this.state.isActive === "FAQs"
                        ? "esummit-navbarevent-cto-active"
                        : "esummit-navbarevent-cto-inactive"
                    }
                    onClick={() => this.setState({ isActive: "FAQs", displaynavbar: !this.state.displaynavbar, })}
                  >
                    FAQs
                 </p>
                </div>

              </Link>

              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >

                <div
                  className={
                    this.state.displaynavbar
                      ? "navbar-show ecell-mobile-menuback"
                      : "navbar-hide ecell-mobile-menuback"
                  }
                >
                  <p
                    className={
                      this.state.isActive === "Contact"
                        ? "esummit-navbarevent-cto-active"
                        : "esummit-navbarevent-cto-inactive"
                    }
                    onClick={() => this.setState({ isActive: "Contact", displaynavbar: !this.state.displaynavbar, })}
                  >
                    CONTACT US
                 </p>
                </div>

              </Link>

              <NavLink to="/campusambassador">

                <div
                  className={
                    this.state.displaynavbar
                      ? "navbar-show ecell-mobile-menuback"
                      : "navbar-hide ecell-mobile-menuback"
                  }
                >
                  <p
                    className={
                      this.state.isActive === "Ambassador"
                        ? "esummit-navbarevent-cto-active"
                        : "esummit-navbarevent-cto-inactive"
                    }
                    onClick={() => this.setState({ isActive: "Ambassador", displaynavbar: !this.state.displaynavbar, })}
                  >
                    CAMPUS AMBASSADOR
                </p>
                </div>
              </NavLink>
             
              <NavLink to="/ignite">

                <div
                  className={
                    this.state.displaynavbar
                      ? "navbar-show ecell-mobile-menuback"
                      : "navbar-hide ecell-mobile-menuback"
                  }
                >
                  <p
                    className={
                      this.state.isActive === "ignite"
                        ? "esummit-navbarevent-cto-active"
                        : "esummit-navbarevent-cto-inactive"
                    }
                    onClick={() => this.setState({ isActive: "ignite", displaynavbar: !this.state.displaynavbar, })}
                  >
                    STARTUP IGNITE
                </p>
                </div>

              </NavLink>


              <div className="esummit-mobile-navbar-register-login">
                {tabs}
              </div>
            </div>
          ) : null}
        </span>
      </div>
    );
  }
}
