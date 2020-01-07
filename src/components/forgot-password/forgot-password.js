import React, { Component } from 'react'
import { BASE_URL } from '../../utils/urls'
import correct from '../registration/Noncaregister/svg/correct.svg'
import wrong from '../registration/Noncaregister/svg/wrong.svg'
import '../login/login.css'
import './forgot-password.css'
import axios from 'axios'

/* eslint-disable react/prop-types */

class ForgotPassword extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      emailError: '',
      emailErrorBool: '',
      success: false,
      loader: false,
      emailMessage: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    const { email } = this.state

    let data = {
      email: email
    }
    this.setState({
      loader: true
    })
    axios({
      method: 'post',
      url: BASE_URL + '/v1/api/user/forgot-password/',
      data: data
    })
      .then(res => {
        this.setState({
          success: true,
          loader: false
        })
      })
      .catch(response => {
        this.setState({
          error_message: 'Email/Password is invalid',
          success: false,
          loader: false,
          email: '',
          password: '',
          emailErrorBool: '',
          pass_errorBool: ''
        })
      })
  }

  emailvalidate = () => {
    setTimeout(
      function() {
        var re = /\S+@\S+\.\S+/
        if (!this.state.email.match(re)) {
          this.setState({
            emailErrorBool: 'true',
            emailError: 'Email is not valid'
          })
        } else {
          this.setState({
            emailErrorBool: 'false',
            emailError: ''
          })
        }
      }.bind(this),
      1000
    )
  }
  onChange = e => {
    const name = e.target.name
    let value = e.target.value
    this.setState({ [name]: value })
  }

  render() {
    const { email, emailError, emailErrorBool, success, loader } = this.state

    return (
      <div className="form-password-container">
        <form className="forgot-password-form">
          {success && !loader ? (
            <div className="success-text">
              We have sent you reset password link on your email!
            </div>
          ) : (
            <></>
          )}
          <div className="esummit-register-form-input-specific">
            <label htmlFor="inputEmail">E-MAIL ID</label>
            <div className="esummit-register-form-input-specific-inner">
              <input
                id="inputEmail"
                type="email"
                className={
                  emailError === ''
                    ? null
                    : 'esummit-register-form-field-error-text'
                }
                placeholder="Enter your mail ID"
                name="email"
                autoCorrect="off"
                autoComplete="off"
                autoCapitalize="off"
                value={email}
                onChange={event => {
                  this.onChange(event)
                  this.emailvalidate()
                }}
                spellCheck="false"
                required
              />
              <span className="esummit-register-form-field-error-svg">
                {emailErrorBool === '' ? null : (
                  <img
                    alt="correc/wrong"
                    src={
                      emailErrorBool === 'true'
                        ? wrong
                        : emailErrorBool === 'false'
                        ? correct
                        : null
                    }
                  />
                )}
              </span>
            </div>
            <div className="esummit-register-form-field-error">
              {emailError}
            </div>
          </div>
          <div className="loginformSubmit" onClick={this.handleSubmit}>
            {loader ? (
              <>
                <i className="fa fa-circle-o-notch fa-spin"></i>
              </>
            ) : (
              <>Submit</>
            )}
          </div>
        </form>
      </div>
    )
  }
}
export default ForgotPassword

/* eslint-disable react/prop-types */
