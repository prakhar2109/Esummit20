import React, { Component } from 'react'
import caHeading from '../../../assets/ca.svg'
import { Link } from 'react-router-dom'
class CAIntro extends Component {
  render() {
    return (
      <div className="ca-section-intro-container">
        <div className="ca-section-intro-background-tint" />
        <img
          src={caHeading}
          alt=""
          className="section-image-heading ca-section-intro-heading"
        />
        <div className="ca-section-intro-paragraph">
          The CAP (Campus Ambassador Programme) is a pinion initiative of
          E-Summit IIT Roorkee, 2018 organized by the Entrepreneurship Cell, IIT
          Roorkee and aims to amplify our purview to newer horizons. We aspire
          to increase our outreach to as many students as possible throughout
          the country and spread the spirit of entrepreneurship to similar
          extents. This year E-Summit IIT Roorkee brings with it loads and loads
          of colossal opportunities for the participating students and exciting
          perks for the Campus Ambassadors.
        </div>
        <Link to="/ca-registration" className="ca-section-intro-link">
          <button className="ca-section-intro-button">Register</button>
        </Link>
      </div>
    )
  }
}

export default CAIntro
