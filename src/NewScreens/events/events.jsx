import React, { Component } from "react";
import Nav from "../landing/nav/nav.jsx";
import "./events.scss";

export class events extends Component {
  render() {
    return (
      <>
        <Nav />
        <div className="events">
          <p>LEADERSHIP SERIES</p>

          <p>Tagline for the event or minimal discription of event.</p>
          <p>
            The Idea Storm is the annual business model competition organized by
            Entrepreneurship Cell, IIT Roorkee in its flagship event, the
            E-Summit. Every year, IIT Roorkee is a spectacle to over 300
            startups showcasing their business, vision and novelty. The plans
            that are judged to be the best, get mentorship and a prize money as
            the funding.
          </p>
          <center>
            <span className="details">Details</span>
            <span className="register">Register</span>
          </center>
        </div>
      </>
    );
  }
}

export default events;
