import React, { Component } from 'react'
import { CAIntro, CAAbout } from './sections'
class CampusAmbassador extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className="ca-container">
        <CAIntro />
        <CAAbout />
      </div>
    )
  }
}

export default CampusAmbassador
