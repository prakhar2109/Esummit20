import React, { Component } from 'react'
import Button from '../button/register_button.js'
import PropTypes from 'prop-types'
import './success.css'

class Successmessage extends Component {
  navigateMain = () => {
    const { history } = this.props
    history.push('/')
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
            You have successfully registered. The link to the dashboard will be
            uploaded soon.
          </div>
          <div className="closeButton">
            <Button
              name="CLOSE"
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
