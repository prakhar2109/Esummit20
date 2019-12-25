import React, { Component } from 'react'
import Button from '../button/register_button.js'
import PropTypes from 'prop-types'
import './success.css'

class Successmessage extends Component {
  navigateMain = () => {
    window.location.href='/dashboard/invite'
  }
  render() {
    return (
      <div className="registration_success">
        <div className="success_main">
          <div className="success_heading">Success !</div>
          <div
            className="success_close"
            onClick={() => {
              this.navigateMain()
            }}
          ></div>
          <div className="success_content">
            You have successfully registered. 
          </div>
          <div className="closeButton">
            <Button
              name="go to Dashboard"
              style={{
                fontFamily: 'Poppins',
                width: 'fitContent',
                letterSpacing: '2px',
                fontWeight: 'bold',
                fontSize: '16px',
                marginTop: '44px',
                marginLeft: '416px'
              }}
              handleClick={() => {
                this.navigateMain()
              }}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Successmessage
Successmessage.propTypes = {
  history: PropTypes.func
}
