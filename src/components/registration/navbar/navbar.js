import React, { Component } from 'react'
import './navbar.css'
import PropTypes from 'prop-types'
import logo from '../../../assets/esummit-logo.svg'

function Navbar(props) {
  return (
    <div className="navbar_main">
      <div className="navbar_content">Campus Ambassador Registration</div>
    </div>
  )
}
export default Navbar

Navbar.propTypes = {
  style: PropTypes.object,
  handleClick: PropTypes.func
}
