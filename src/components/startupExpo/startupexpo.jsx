import React, { Component } from 'react'
import './startupexpo.css'
import Eligibility from './Eligibility/eligibility'
import Rules from './rules/rules'
import Header from './Header/header'
import Timeline from './Timeline/timeline'
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
