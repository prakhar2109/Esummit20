import React, { Component } from 'react'
import './ideastorm.css'
import Idea from './static/idea.png'
import jump from 'jump.js'
import Eligibility from './ideastormEligibility/eligibility'
import Rules from './ideastormRules/rules'
import Header from './ideastormHeader/header'
import Timeline from './ideastormTimeline/timeline'

export class IdeaStorm extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  timeline = () => {
    jump('.timeline', { offset: -130 })
  }

  Rules = () => {
    jump('.Rules', { offset: -130 })
  }

  erks = () => {
    jump('.erks', { offset: -130 })
  }

  faq_idea = () => {
    jump('#faq', { offset: -0 })
  }

  coordinator = () => {
    jump('.coordinator', { offset: -130 })
  }

  eligiblity = () => {
    jump('.eligiblity', { offset: -130 })
  }
  register = () => {
    jump('.register', { offset: -130 })
  }
  jum = () => {
    jump('#timeline')
  }

  render() {
    return (
      <div className="ideastorm">
        {/* <Eventsheader /> */}

        <div id="nav" className="header">
          <span>
            <img alt="IdeaStorm" src={Idea} />
          </span>

          <span className="head_array">
            <span onClick={this.timeline}>Timeline</span>

            <span onClick={this.Rules}>Rules</span>

            <span onClick={this.eligiblity}>Eligiblity</span>

            <span onClick={this.erks}>Perks</span>
            <span onClick={this.register}>Apply</span>
            <span onClick={this.faq_idea}>FAQs</span>

            <span onClick={this.coordinator}>Contact Us</span>
          </span>

          <span />
        </div>

        <Header />
        <Timeline {...this.props} />
        <Rules />
        <Eligibility />
      </div>
    )
  }
}

export default IdeaStorm
