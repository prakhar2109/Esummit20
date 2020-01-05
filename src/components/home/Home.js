import React, { Component } from 'react'

import {
  Intro,
  About,
  Events,
  Speakers,
  Sponsors,
  Testemonials,
  FAQ
} from './sections/'
class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <Intro />
        <About />
        <Events />
        <Speakers />
        <Sponsors />
        <Testemonials />
        <FAQ />
      </div>
    )
  }
}

export default Home
