/* eslint react/prop-types: 0 */
import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'
import PropTypes from 'prop-types'
import Navbar from '../navbar/navbar.js'
import './accountsetup.css'
class FacebookloginCom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      image_url: '',
      accessToken: '',
      social_signup: false,
      name_error: '',
      name_error_bool: false
    }
  }

  namevalidate = () => {
    setTimeout(
      function() {
        if (this.state.name && this.state.name.length < 3) {
          this.setState({
            name_error_bool: true,
            name_error: 'Name should be more than 3 letters'
          })
        } else {
          this.setState({
            name_error_bool: false,
            name_error: ''
          })
        }
      }.bind(this),
      1000
    )
  }
  emailvalidate = () => {
    setTimeout(
      function() {
        const re = /^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$/

        if (!re.test(this.state.email)) {
          this.setState({
            email_error_bool: 'true',
            email_error: 'Email is not valid'
          })
        } else {
          this.setState({
            email_error_bool: 'false',
            email_error: ''
          })
        }
      }.bind(this),
      1000
    )
  }

  responseFacebook = response => {
    if (response.status !== 'unknown') {
      console.log(response)
      this.setState({
        name: response.name,
        accessToken: response.accessToken,
        email: response.email,
        image_url:
          response.picture &&
          response.picture.data &&
          response.picture.data.url,
        social_signup: true
      })
      let { name, email, image_url, social_signup, accessToken } = this.state
      let data = {
        name: name,
        email: email,
        image_url: image_url,
        social_signup: social_signup,
        accessToken: accessToken
      }

      this.props.handleProfile(data)
      this.namevalidate()
      this.emailvalidate()
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="account_setup">
          <div className="signup-container">
            <div className="signupcircle_marker">
              <div className="signup_circle">
                <div className="signup_innercircle">
                  <div>1</div>
                </div>
              </div>
              <div className="between_line"></div>
              <div className="personaldetail_circle">
                <div className="personaldetail_innercircle">2</div>
              </div>
            </div>
            <div className="accountsetup_popup">
              <div className="accountsetup_popup_title">
                <p>Account Setup</p>
              </div>
              <div className="accountsetup_popup_content">
                <div className="account_popup_data">
                  You will be given tasks which requires facebook sign-up.
                </div>
                <div className="facebook_login">
                  <FacebookLogin
                    // appId="630305827505065"
                    appId="613264019415150"
                    // appId="2546035355673765"
                    size="medium"
                    autoLoad={true}
                    textButton="Facebook"
                    fields="name,email,picture"
                    callback={this.responseFacebook}
                  />
                </div>
              </div>
            </div>
          
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default FacebookloginCom
FacebookLogin.propTypes = { handleProfile: PropTypes.func }
