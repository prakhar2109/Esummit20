import React, { Component } from 'react'
import FacebookLogin from './account_setup/accountsetup.js'
import Personaldetails from './personal_details/personal_details.js'
import PropTypes from 'prop-types'
import FetchApi from '../../utils/fetchAPI'
class Registration extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active_step: 1,
      name: '',
      email: '',
      image_url: '',
      fb_access_token: '',
      phone: '',
      city: '',
      countrt: '',
      state: '',
      profile_type: 'CA',
      college: '',
      tshirt_size: '',
      success: false,
      password: 'cada@1234',
      error: false
    }
  }
  handleBack = data => {
    if (this.state.activeStep === 2) {
      this.setState({
        phone: data.phone,
        college: data.college,
        tshirt_size: data.tshirt_size
      })
    }

    this.setState(state => ({
      active_step: state.active_step - 1
    }))
  }
  handleFullSubmit = () => {
    FetchApi('POST', '/v1/api/user/signup/', this.state, null)
      .then(res => {
        if (res.data) {
          this.setState({ success: true, activeStep: 0 })
        }
      })
      .catch(error => {
        this.setState({
          activeStep: 0,
          error: true
        })
        console.log(error)
      })
  }
  responseFacebook = response => {
    this.setState({
      name: response.name,
      email: response.email,
      fb_access_token: response.accessToken,
      image_url: response.image_url,
      social_signup: response.social_signup,
      active_step: 2
    })
  }
  handleProfile = data => {
    if (data) {
      return this.setState(
        {
          city: data.city,
          country: data.country,
          state: data.state,
          email:data.email,
          phone: data.phone,
          college: data.college,
          tshirt_size: data.tshirt_size
        },
        () => this.handleFullSubmit()
      )
    }
  }
  render() {
    const {
      active_step,
      name,
      email,
      profile_type,
      success,
      error
    } = this.state
    return (
      <React.Fragment>
        {active_step === 1 ? (
          <FacebookLogin
            handleProfile={this.responseFacebook}
            profile_type={profile_type}
          />
        ) : null}
        {active_step === 2 ? (
          <Personaldetails
            handleDetail={this.handleProfile}
            handleBack={this.handleBack}
            profile_type={profile_type}
            name={name}
            email={email}
          />
        ) : null}
        {success ? this.props.history.push('/register-success') : null}
        {error ? this.props.history.push('/register-failure') : null}
      </React.Fragment>
    )
  }
}
export default Registration
Registration.propTypes = {
  history: PropTypes.func
}
