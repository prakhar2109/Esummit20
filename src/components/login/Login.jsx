import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../../utils/urls'
import './login.css'
import hidden from '../registration/Noncaregister/svg/hidden.svg'
import eye from '../registration/Noncaregister/svg/eye.svg'
import correct from '../registration/Noncaregister/svg/correct.svg'
import wrong from '../registration/Noncaregister/svg/wrong.svg'
import axios from 'axios'
import Loader from '../loader/loader'
/* eslint-disable react/prop-types */

class Login extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  constructor(props) {
    super(props)
    this.state = {
      activeStep: 0,
      toggleEye: false,
      loader: false,
      toggleConfirmEye: false,
      accessToken: '',
      email: '',
      password: '',
      emailError: '',
      emailErrorBool: '',
      passError: '',
      passErrorBool: '',
      errorMessage: ''
    }
  }
  componentDidMount() {
    document.getElementById('loader').style.display = 'none'
  }
  handleToggle = () => {
    this.setState({
      toggleEye: !this.state.toggleEye
    })
    if (document.getElementById('inputPassword').type === 'password') {
      document.getElementById('inputPassword').type = 'text'
    } else {
      document.getElementById('inputPassword').type = 'password'
    }
  }
  loginresponseFacebook = response => {
    if (response.status !== 'unknown') {
      this.setState({
        name: response.name,
        accessToken: response.accessToken,
        email: response.email,
        image_url:
          response.picture &&
          response.picture.data &&
          response.picture.data.url,
        social_signup: true,
        activeStep: 1
      })
    }
  }

  handleChange = e => {
    let change = {}
    change[e.target.name] = e.target.value
    this.setState(change)
  }

  loginSubmit = () => {
    const { accessToken, email, password, loader } = this.state
    let data
    if (!accessToken) {
      data = {
        email: email,
        password: password
      }
    } else {
      data = {
        email: email,
        access_token: accessToken
      }
    }
    document.getElementById('loader').style.display = 'grid'
    axios({
      method: 'post',
      url: BASE_URL + '/v1/api/user/login',
      data: data
    })
      .then(res => {
        if (res !== undefined && res.data !== undefined) {
          if (res.data) {
            if (res.data.token) {
              document.getElementById('loader').style.display = 'none'
              localStorage.setItem('user_token', res.data.token)
              window.location.href = '/dashboard/Events'
            }
          }
        }
      })
      .catch(response => {
        this.setState(
          {
            loader: false,
            errorMessage: 'Email/Password is invalid',
            emailErrorBool: '',
            passErrorBool: ''
          },
          () => (document.getElementById('loader').style.display = 'none')
        )
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
      loader,
      activeStep,
      email,
      password,
      toggleEye,
      emailError,
      emailErrorBool,
      passError,
      passErrorBool,
      errorMessage
    } = this.state

    return (
      <React.Fragment>
        <div className="account_setup">
          <Loader />
          <div className="signup-container">
            {activeStep === 0 ? (
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
                      appId="630305827505065"
                      // appId="2546035355673765"
                      size="medium"
                      autoLoad={false}
                      disableMobileRedirect={true}
                      isMobile={true}
                      textButton="Sign in with Facebook"
                      fields="name,email,picture"
                      callback={this.loginresponseFacebook}
                    />
                  </div>

                  <div className="esummit-register-form-body-parent">
                    <div className="esummit-register-form-error-message-handle">
                      {errorMessage}
                    </div>
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
                    <div className="esummit-register-form-input-specific">
                      <label htmlFor="inputPassword">PASSWORD</label>
                      <div className="esummit-register-form-input-specific-eye">
                        <input
                          id="inputPassword"
                          type="password"
                          className={
                            passError === ''
                              ? null
                              : 'esummit-register-form-field-error-text'
                          }
                          placeholder="Enter password"
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
                            src={!toggleEye ? eye : hidden}
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

                      <div className="form-forgot-password-text">
                        <Link to="/forgot-password">Forgot Password?</Link>
                      </div>
                      <div
                        className="loginformSubmit"
                        onClick={this.loginSubmit}
                      >
                        Login
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
            {activeStep === 1 ? (
              <div className="accountsetup_popup">
                <div className="accountsetup_popup_title">
                  <p>Welcome {this.state.name}</p>
                </div>

                <div className="login-emailfield">
                  E-Mail (Enter the same Email-id through which you have
                  registered)
                </div>
                <div className="login-emailinputfield">
                  <input
                    className="login-emailinputfield"
                    id="inputEmail"
                    type="email"
                    name="email"
                    placeholder="Enter E-Mail"
                    value={this.state.email}
                    autoCorrect="off"
                    autoComplete="off"
                    autoCapitalize="off"
                    onChange={e => {
                      this.handleChange(e)
                    }}
                    required
                  />
                </div>

                <div className="loginformSubmit" onClick={this.loginSubmit}>
                  {loader ? (
                    <>
                      <i className="fa fa-circle-o-notch fa-spin"></i>
                    </>
                  ) : (
                    <>Login</>
                  )}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default Login

/* eslint-disable react/prop-types */
