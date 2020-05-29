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
  componentDidMount(){
    window.scrollTo(0, 0);
  }
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
