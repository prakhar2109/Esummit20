import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './register_button.css'

function Button(props) {
  return (
    <button
      className={`register_button ${props.className}`}
      style={props.style}
      onClick={props.handleClick}
    >
      <div>{props.name}</div>
    </button>
  )
}

export default Button
Button.propTypes = {
  name: PropTypes.string,
  style: PropTypes.object,
  handleClick: PropTypes.func,
  className: PropTypes.string
}
