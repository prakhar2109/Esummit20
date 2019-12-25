import React, { Component } from 'react'
import './startupexpo.css'
import Eligibility from './startupExpoEligibility/eligibility'
import Rules from './startupExporules/rules'
import Header from './startupExpoHeader/header'
import Timeline from './startupExpoTimeline/timeline'
import PropTypes from 'prop-types'

export default class StartupExpo extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="startupexpo">
        <Header />
        <Timeline {...this.props} />
        <Rules />
        <Eligibility />
      </div>
    )
  }
}

StartupExpo.propTypes = {
  match: PropTypes.string
}
