import React, { Component } from "react";

import { BASE_URL } from "../../../../../utils/urls";

import "./header.css";
import jump from "jump.js";

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
      this.setState({ navdisplay: false });
    }
  }

  timeline = () => {
    this.setState({
      displaynavbar: !this.state.displaynavbar,
    });
    jump(".timeline", { offset: -70 });
  };
  register = () => {
    this.setState({
      displaynavbar: !this.state.displaynavbar,
    });
    jump(".register");
  };

  Rules = () => {
    this.setState({
      displaynavbar: !this.state.displaynavbar,
    });
    jump(".Rules", { offset: -70 });
  };

  erks = () => {
    this.setState({
      displaynavbar: !this.state.displaynavbar,
    });
    jump(".erks", { offset: -70 });
  };

  faq_idea = () => {
    this.setState({
      displaynavbar: !this.state.displaynavbar,
    });
    jump("#faq_idea", { offset: -70 });
  };

  register = () => {
    this.setState({
      displaynavbar: !this.state.displaynavbar,
    });
    jump(".register");
  };
  coordinator = () => {
    this.setState({
      displaynavbar: !this.state.displaynavbar,
    });
    jump(".coordinator");
  };

  eligiblity = () => {
    this.setState({
      displaynavbar: !this.state.displaynavbar,
    });
    jump(".eligiblity");
  };

  render() {
    return (
      <div id="nav" className="Eventsheader">
        <div
          className="idealogo"
          style={{
            backgroundImage: `url(${BASE_URL + this.props.logo[0].logo})`,
            backgroundPosition: "center",
            backgroundSize: "40%",
            backgroundRepeat: "no-repeat",
          }}
        />

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
              <div
                onClick={this.timeline}
                className={
                  this.state.displaynavbar
                    ? "navbar-show ecell-mobile-menuback"
                    : "navbar-hide ecell-mobile-menuback"
                }
              >
                <p
                  className={
                    this.state.isActive === "timeline"
                      ? "esummit-navbarevent-cto-active"
                      : "esummit-navbarevent-cto-inactive"
                  }
                  onClick={() =>
                    this.setState({
                      isActive: "timeline",
                    })
                  }
                >
                  Timeline
                </p>
              </div>

              <div
                onClick={this.Rules}
                className={
                  this.state.displaynavbar ? "navbar-show" : "navbar-hide"
                }
              >
                <p
                  className={
                    this.state.isActive === "rules"
                      ? "esummit-navbarevent-cto-active"
                      : "esummit-navbarevent-cto-inactive"
                  }
                  onClick={() =>
                    this.setState({
                      isActive: "rules",
                    })
                  }
                >
                  Rules
                </p>
              </div>

              <div
                onClick={this.eligiblity}
                className={
                  this.state.displaynavbar ? "navbar-show" : "navbar-hide"
                }
              >
                <p
                  className={
                    this.state.isActive === "eligible"
                      ? "esummit-navbarevent-cto-active"
                      : "esummit-navbarevent-cto-inactive"
                  }
                  onClick={() =>
                    this.setState({
                      isActive: "eligible",
                    })
                  }
                >
                  Eligiblity
                </p>
              </div>
            </div>
          ) : null}
        </span>
      </div>
    );
  }
}
