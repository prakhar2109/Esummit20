import React, { Component } from 'react'
import FacebookLoginCom from './account_setup/accountsetup.js'
import Personaldetails from './personal_details/personal_details.js'
import PropTypes from 'prop-types'
import FetchApi from '../../utils/fetchAPI'
import Registersucess from './popup/success/success'
import Registerfailure from './popup/failure/failure'
import Loader from '../loader/loader'
/* eslint-disable react/prop-types */

class Registration extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
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
      user_type: 'CA',
      college: '',
      tshirt_size: '',
      success: false,
      password: 'cada@1234',
      error: false
    }
  }
  componentDidMount() {
    window.scrollTo(0, 0)
    document.getElementById('loader').style.display = 'none'
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
    const query = new URLSearchParams(this.props.location.search)
    let ref = null
    for (let param of query.entries()) ref = param[1]

    let endpoint =
      ref === null ? '/v1/api/user/signup/' : `/v1/api/user/signup/?ref=${ref}`
    document.getElementById('loader').style.display = 'grid'

    FetchApi('POST', endpoint, this.state, null)
      .then(res => {
        if (res.data) {
          if (res.data.token) {
            document.getElementById('loader').style.display = 'none'

            localStorage.setItem('user_token', res.data.token)
            // this.setState({ success: true, active_step: 0 })
            window.location.href = '/dashboard/task'
          }
          // window.location.href='/dashboard/task';
          // }
          // else
          // this.setState({ success: true, active_step: 0 })
        }
      })
      .catch(error => {
        document.getElementById('loader').style.display = 'none'

        this.setState({
          active_step: 0,
          error: true,
          error_bool: error
        })
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
          email: data.email,
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
        <Loader />
        {active_step === 1 ? (
          <FacebookLoginCom
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

        {/* {success ? this.props.history.push('/register-success') : null}
        {error ? this.props.history.push('/register-failure') : null} */}
        {success ? <Registersucess {...this.props} /> : null}
        {error ? <Registerfailure {...this.props} /> : null}
      </React.Fragment>
    )
  }
}
export default Registration
Registration.propTypes = {
  history: PropTypes.func
}
/* eslint-disable react/prop-types */
