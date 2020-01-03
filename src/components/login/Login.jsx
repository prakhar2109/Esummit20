import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login'

import { BASE_URL } from '../../utils/urls'
import './login.css'
import color_eye from '../registration/Noncaregister/svg/color-eye.svg'
import eye from '../registration/Noncaregister/svg/eye.svg'
import correct from '../registration/Noncaregister/svg/correct.svg'
import wrong from '../registration/Noncaregister/svg/wrong.svg'
import axios from 'axios'

/* eslint-disable react/prop-types */

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active_step: 0,
      toggleEye: false,
      toggleConfirmEye: false,
      email: '',
      password: '',
      email_error: '',
      email_error_bool: '',
      pass_error: '',
      pass_error_bool: '',
      error_message: ''
    }
  }

  //   handleFullSubmit = () => {
  //     const query=new URLSearchParams(this.props.location.search);
  //     let ref=null;
  //     for(let param of query.entries())
  //       ref=param[1];

  //     let endpoint = ref === null ? "/v1/api/user/signup/" : `/v1/api/user/signup/?ref=${ref}`

  //     FetchApi('POST', endpoint, this.state, null)
  //       .then(res => {
  //         if (res.data) {
  //           this.setState({ success: true, active_step: 0 })
  //         }
  //       })
  //       .catch(error => {
  //         this.setState({
  //           active_step: 0,
  //           error: true,
  //           error_bool:error
  //         })

  //       })
  //   }
  // responseFacebook = response => {
  //   this.setState({
  //     name: response.name,
  //     email: response.email,
  //     fb_access_token: response.accessToken,
  //     image_url: response.image_url,
  //     social_signup: response.social_signup,
  //   },()=>{
  //       console.log(this.state)
  //   })
  // }
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
        active_step: 1
      })
    }
  }

  responseLoginGoogle = response => {
    // this.setState({
    //     name: response.profileObj.name,
    //     email: response.profileObj.email,
    //     image_url: response.profileObj.imageUrl,
    //     social_signup: true
    // })
    // let { name, email, image_url, social_signup } = this.state
    console.log(response)

    this.setState(
      {
        name: response.profileObj.name,
        accessToken: response.accessToken,
        email: response.profileObj.email,
        social_signup: true
      },
      () => this.loginSubmit()
    )

    // this.props.handleGoogle(data)
    // this.namevalidate()
    // this.emailvalidate()
  }
  handleChange = e => {
    let change = {}
    change[e.target.name] = e.target.value
    this.setState(change)
  }

  loginSubmit = () => {
    let data
    if (!this.state.accessToken) {
      data = {
        email: this.state.email,
        password: this.state.password
      }
    } else {
      data = {
        email: this.state.email,
        access_token: this.state.accessToken
      }
    }

    axios({
      method: 'post',
      url: BASE_URL + '/v1/api/user/login',
      data: data,
      config: {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    })
      .then(res => {
        if (res !== undefined && res.data !== undefined) {
          if (res.data) {
            if (res.data.token) {
              localStorage.setItem('user_token', res.data.token)
              window.location.href = '/dashboard/task'
            }
          }
        }
      })
      .catch(response => {
        alert('Please Register first!')

        this.setState({
          error_message: 'Email/Password is invalid',
          email: '',
          password: '',
          email_error_bool: '',
          pass_error_bool: ''
        })

        this.props.history.push('/register')
      })
  }

  emailvalidate = () => {
    setTimeout(
      function() {
        var re = /\S+@\S+\.\S+/
        if (!this.state.email.match(re)) {
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
  passvalidate = () => {
    setTimeout(
      function() {
        if (this.state.password.length < 7) {
          this.setState({
            pass_error_bool: 'true',
            pass_error: 'Password should be more than 8 letters'
          })
        } else {
          this.setState({
            pass_error_bool: 'false',
            pass_error: ''
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
      email,
      password,
      toggleEye,
      email_error,
      email_error_bool,
      pass_error,
      pass_error_bool
    } = this.state

    return (
      <React.Fragment>
        <div className="account_setup">
          <div className="signup-container">
            {this.state.active_step === 0 ? (
              <div className="accountsetup_popup">
                <div className="accountsetup_popup_title">
                  <p>Account Setup</p>
                </div>
                <div className="accountsetup_popup_content">
                  <div className="account_popup_data">
                    You will be given tasks which requires facebook sign-up.
                  </div>
                  <div className="facebook_login">
                    {/* <GoogleLogin
                      clientId="73234389568-ad4s6dav417kmlut5n7n0gmrbpfkb44i.apps.googleusercontent.com"
                      buttonText="Google"
                      onSuccess={this.responseLoginGoogle}
                      onFailure={this.responseLoginGoogle}
                      className="tushar"
                      theme="dark"
                    /> */}
                    <FacebookLogin
                      appId="630305827505065"
                      // appId="613264019415150"
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
                      {this.state.error_message}
                    </div>
                    <div className="esummit-register-form-input-specific">
                      <label htmlFor="inputEmail">E-MAIL ID</label>
                      <div className="esummit-register-form-input-specific-inner">
                        <input
                          id="inputEmail"
                          type="email"
                          className={
                            email_error === ''
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
                          {email_error_bool === '' ? null : (
                            <img
                              alt="correc/wrong"
                              src={
                                email_error_bool === 'true'
                                  ? wrong
                                  : email_error_bool === 'false'
                                  ? correct
                                  : null
                              }
                            />
                          )}
                        </span>
                      </div>
                      <div className="esummit-register-form-field-error">
                        {email_error}
                      </div>
                    </div>
                    <div className="esummit-register-form-input-specific">
                      <label htmlFor="inputPassword">PASSWORD</label>
                      <div className="esummit-register-form-input-specific-eye">
                        <input
                          id="inputPassword"
                          type="password"
                          className={
                            pass_error === ''
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
                            src={!toggleEye ? eye : color_eye}
                          />
                        </span>
                        <span className="esummit-register-form-field-error-svg">
                          {pass_error_bool === '' ? null : (
                            <img
                              alt="correc/wrong"
                              src={
                                pass_error_bool === 'true'
                                  ? wrong
                                  : pass_error_bool === 'false'
                                  ? correct
                                  : null
                              }
                            />
                          )}
                        </span>
                      </div>
                      <div className="esummit-register-form-field-error">
                        {pass_error}
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
            {this.state.active_step === 1 ? (
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
                  Login
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
