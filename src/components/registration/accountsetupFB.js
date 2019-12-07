import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'

class Facebooklogin extends Component {
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
        if (this.state.name.length < 3) {
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
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
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
    this.setState({
      name: response.name,
      accessToken: response.accessToken,
      email: response.email,
      image_url: response.picture.data.url,
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
    console.log(response)
    // this.props.handleFacebook(data)
    this.namevalidate()
    this.emailvalidate()
  }

  render() {
    return (
      <React.Fragment>
        <div className="facebook_login">
          <FacebookLogin
            appId="630305827505065"
            size="medium"
            autoLoad={true}
            textButton="Facebook"
            fields="name,email,picture"
            callback={this.responseFacebook}
          />
        </div>
      </React.Fragment>
    )
  }
}

export default Facebooklogin
