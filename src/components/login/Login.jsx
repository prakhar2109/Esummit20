import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'
import { BASE_URL } from '../../utils/urls'
import './login.css'

import axios from 'axios'

/* eslint-disable react/prop-types */

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active_step: 0,
      email: ''
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
  loginresponseFacebook = response => {
    if (response.status !== 'unknown') {
      console.log(response)
      this.setState(
        {
          name: response.name,
          accessToken: response.accessToken,
          email: response.email,
          image_url:
            response.picture &&
            response.picture.data &&
            response.picture.data.url,
          social_signup: true,
          active_step: 1
        },
        () => {
          console.log(this.state)
        }
      )
    }
  }
  handleChange = e => {
    let change = {}
    change[e.target.name] = e.target.value
    this.setState(change, () => {
      console.log(this.state)
    })
  }

  loginSubmit = () => {
    let data = {
      email: this.state.email,
      access_token: this.state.accessToken
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
      .then(function(res) {
        console.log(res)
        if (res !== undefined && res.data !== undefined) {
          if (res.data) {
            if (res.data.token) {
              localStorage.setItem('user_token', res.data.token)
            }
            window.location.href = '/dashboard/task'
            // document
            //     .getElementById("loader")
            //     .style
            //     .display = "none";
            // data = "";
          }
        }
      })

      .catch(response => {
        alert('Please Register first')
        window.location.href = '/register'
      })
  }
  render() {
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
                    <FacebookLogin
                      // appId="630305827505065"
                      appId="613264019415150"
                      // appId="2546035355673765"
                      size="medium"
                      autoLoad={false}
                      textButton="Facebook"
                      fields="name,email,picture"
                      callback={this.loginresponseFacebook}
                    />
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
