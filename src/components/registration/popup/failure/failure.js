import React, { Component } from 'react'
import './failure.css'
import Button from '../button/register_button.js'
import Navbar from '../../navbar/navbar.js'
import PropTypes from 'prop-types'
/* eslint-disable react/prop-types */

class Failuremessage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  navigateMain = () => {
    this.props.history.push('/')
  }
  navigateRegister = () => {
    this.props.history.push('/register')
  }
  render() {
    return (
      <div className="registration_success">
        <div className="success_main">
          <div className="success_heading">Failure</div>
          <div
            className="success_close"
            onClick={() => {
              this.navigateMain()
            }}
          ></div>
          <div className="success_content">
            Your Registration could not be completed. <br />
            User already registered
          </div>
          <div className="closeButton">
            <Button
              name="Register"
              style={{
                fontFamily: 'Poppins',
                width: '104px',
                letterSpacing: '2px',
                fontWeight: 'bold',
                fontSize: '16px',
                marginTop: '44px',
                marginLeft: '416px'
              }}
              handleClick={() => {
                this.navigateRegister()
              }}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Failuremessage
Failuremessage.propTypes = {
  history: PropTypes.func
}
/* eslint-disable react/prop-types */
