import React, { Component } from 'react'

import { Intro, About, Events, PreviousSpeakers } from './sections/'
class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <Intro />
        <About />
        <Events />
        <PreviousSpeakers />
      </div>
    )
  }
}

export default Home
