import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../../utils/urls'
import '../login/login.css'
import colorEye from '../registration/Noncaregister/svg/color-eye.svg'
import eye from '../registration/Noncaregister/svg/eye.svg'
import correct from '../registration/Noncaregister/svg/correct.svg'
import wrong from '../registration/Noncaregister/svg/wrong.svg'
import axios from 'axios'

/* eslint-disable react/prop-types */

class SetNewPassword extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggleEye: false,
      toggleConfirmEye: false,
      password: '',
      passError: '',
      passErrorBool: '',
      errorMessage: '',
      loader: true,
      success: false,
      error: false
    }
  }

  componentDidMount() {
    const { match } = this.props
    this.setState({
      loader: true
    })
    axios({
      method: 'post',
      url: BASE_URL + '/v1/api/user/verify-code/' + match.params.uuid + '/'
    })
      .then(res => {
        this.setState({
          loader: false
        })
      })
      .catch(response => {
        this.setState({
          loader: false,
          error: true
        })
      })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { password } = this.state
    const { match, history } = this.props
    let data = {
      password: password
    }
    this.setState({
      loader: true
    })
    axios({
      method: 'post',
      url: BASE_URL + '/v1/api/user/reset-password/' + match.params.uuid + '/',
      data: data
    })
      .then(res => {
        this.setState({
          success: true,
          loader: false,
          error: false
        })
      })
      .catch(response => {
        this.setState({
          errorMessage: 'Something went wrong!',
          error: true,
          loader: false,
          password: '',
          passErrorBool: ''
        })
      })
  }

  passvalidate = () => {
    setTimeout(
      function() {
        if (this.state.password.length < 7) {
          this.setState({
            passErrorBool: 'true',
            passError: 'Password should be more than 8 letters'
          })
        } else {
          this.setState({
            passErrorBool: 'false',
            passError: ''
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
    const {
      password,
      toggleEye,
      passError,
      passErrorBool,
      loader,
      errorMessage,
      success,
      error
    } = this.state

    return (
      <div className="form-password-container">
        <form className="forgot-password-form">
          {loader ? (
            <>
              <div className="loader-text">Checking.....</div>
            </>
          ) : (
            <>
              {success && !loader ? (
                <div className="success-text">
                  Successfully resetted password!{' '}
                  <Link to="/login">Login!</Link>
                </div>
              ) : (
                <></>
              )}
              {error && !loader ? (
                <div className="error-text">{errorMessage}</div>
              ) : (
                <></>
              )}
              <div className="esummit-register-form-input-specific">
                <label htmlFor="inputPassword">NEW PASSWORD</label>
                <div className="esummit-register-form-input-specific-eye">
                  <input
                    id="inputPassword"
                    type="password"
                    className={
                      passError === ''
                        ? null
                        : 'esummit-register-form-field-error-text'
                    }
                    placeholder="Enter new password"
                    name="password"
                    autoCorrect="off"
                    autoComplete="off"
                    autoCapitalize="off"
                    value={password}
                    onChange={event => {
                      this.onChange(event)
                      this.passvalidate()
                    }}
                    spellCheck="false"
                    required
                  />
                  <span onClick={this.handleToggle}>
                    <img
                      alt=""
                      className="esummit-register-form-input-specific-eye-svg"
                      src={!toggleEye ? eye : colorEye}
                    />
                  </span>
                  <span className="esummit-register-form-field-error-svg">
                    {passErrorBool === '' ? null : (
                      <img
                        alt="correc/wrong"
                        src={
                          passErrorBool === 'true'
                            ? wrong
                            : passErrorBool === 'false'
                            ? correct
                            : null
                        }
                      />
                    )}
                  </span>
                </div>
                <div className="esummit-register-form-field-error">
                  {passError}
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
            </>
          )}
        </form>
      </div>
    )
  }
}
export default SetNewPassword

/* eslint-disable react/prop-types */
