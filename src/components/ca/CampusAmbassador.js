import React, { Component } from 'react'
import { CAIntro, CAAbout } from './sections'
class CampusAmbassador extends Component {
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
