import React from 'react'
// import { withStyles } from '@material-ui/core/styles';
// import Stepper from '@material-ui/core/Stepper';
// import Step from '@material-ui/core/Step';
// import StepLabel from '@material-ui/core/StepLabel';
import AccountSetup from './Accountsetup'
// import CommonIndex from "../common/Index"
// import Loader from "../../../screens/loader/loader"
import { Link } from 'react-router-dom'

import './css/stepform.css'
import '../popup/profile_type/profile_type.css'
import EmailVerification from './EmailVerification'
// import ProfileType from "./ProfileType"
import PersonalDetails from './PersonalDetails'
import axios from 'axios'
import sample_image from './sample_image.jpeg'
import { BASE_URL } from '../../../utils/urls'

// const styles = theme => ({
//     root: {
//         width: '90%',
//     },
//     // backButton: {
//     //     marginRight: theme.spacing.unit,
//     // },
//     // instructions: {
//     //     marginTop: theme.spacing.unit,
//     //     marginBottom: theme.spacing.unit,
//     // },
//     iconContainer: {
//         color: "red !important"
//     },
//     step: {
//         color: "red !important",
//         backgroundColor: "#1A4D66 !important",
//     },
//     active: {
//         color: "red !important"
//     },
//     completed: {
//         color: "#F39423 !important",
//     },
//     steproot: {
//         color: "red !important"
//     },
//     icon: {
//         //color of all icons
//         color: "#153D50 !important",
//         fontFamily: "Montserrat"
//     },
//     label: {
//         color: "white !important",
//         fontFamily: "Montserrat",
//         fontWeight: "500"
//     },
//     iconactive: {
//         color: "#F39423 !important",
//         fontFamily: "Montserrat"
//     },
//     iconcomplete: {
//         color: "#F39423 !important",
//     },
//     stepper: {
//         padding: "0px !important",
//         background: "#1A4D66 !important"
//     },
//     connroot: {
//         color: "#153D50 !important",
//     }
// });

// function getSteps() {
//     return ['ACCOUNT SETUP', 'PROFILE TYPE', 'PERSONAL DETAILS'];
// }
/* eslint-disable react/prop-types */

class NonCARegistration extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeStep: 0,
      toggleEye: false,
      toggleConfirmEye: false,
      name: '',
      email: '',
      image_url: '',
      password: '',
      token: '',
      confirm_password: '',
      otp: '',
      confirm_otp: '',
      resend_email: '',
      year: '',
      tshirt_size: '',
      programme: '',
      about_esummit: '',
      email_verified: false,
      profile_type: '',
      country: '',
      phone_no: '',
      gender: '',
      enrollment_no: '',
      college: '',
      city: '',
      states: '',
      organisation_name: '',
      industry: '',
      social_signup: false
    }
  }
  componentDidMount() {
    // document
    //     .getElementById("loader")
    //     .style
    //     .display = "none";
    // const query=new URLSearchParams(this.props.location.search);
    // // console.log(query)
    // for(let param of query.entries())
    // {
    //   console.log(param[0]);
    //   console.log(param[1]);

    // }
    var url_string = window.location.href
    var url = new URL(url_string)
    // var ref = url.searchParams.get("ref");
    // console.log(ref);
    var profile_type = url.searchParams.get('profile_type')
    this.setState({ profile_type })
  }

  handleAccountSetup = data => {
    this.setState({
      name: data.name,
      email: data.email,
      password: data.password,
      confirm_password: data.confirm_password,
      social_signup: data.social_signup,
      activeStep: this.state.activeStep + 1
    })
  }
  handleEmailVerification = data => {
    this.setState({
      otp: data.otp,
      resend_email: data.resend_email
    })
    if (data.resend_email !== '') {
      this.setState({
        email: data.resend_email
      })
    }
    this.handleFullSubmit()
  }
  handleProfile = data => {
    this.setState({
      profile_type: data.profile_type,
      activeStep: this.state.activeStep + 1
    })
  }

  responseFacebook = response => {
    this.setState(
      {
        name: response.name,
        email: response.email,
        image_url: response.image_url,
        social_signup: true,
        token: response.accessToken,
        activeStep: this.state.activeStep + 1
      },
      () => {
        console.log(this.state)
      }
    )
  }

  responseGoogle = response => {
    this.setState(
      {
        name: response.name,
        email: response.email,
        image_url: response.image_url,
        social_signup: true,
        activeStep: this.state.activeStep + 1
      },
      () => {
        console.log(this.state)
      }
    )
  }
  goToDashboard = () => {
    window.location.href = '/dashboard/invite'
    // document
    //     .getElementById("loader")
    //     .style
    //     .display = "none";
  }

  handleFullSubmit = () => {
    let {
      name,
      email,
      image_url,
      password,
      confirm_password,
      year,
      tshirt_size,
      programme,
      about_esummit,
      profile_type,
      country,
      phone_no,
      gender,
      enrollment_no,
      college,
      city,
      states,
      organisation_name,
      industry
    } = this.state
    if (name) name = name.trim()
    if (phone_no) phone_no = phone_no.trim()
    if (image_url) {
      image_url = image_url.trim()
    } else {
      image_url = null
    }
    if (email) email = email.trim()
    if (profile_type) {
      profile_type = profile_type.trim()
      if (profile_type === 'iitr_student') {
        profile_type = 'IIT'
        city = 'Roorkee'
        states = 'Uttrakhand'
        college = 'IITR'
      }
      if (profile_type === 'non_iitr_student') {
        profile_type = 'NONIIT'
      }
      if (profile_type === 'ca') {
        profile_type = 'CA'
      }
      if (profile_type === 'professional') {
        profile_type = 'PROFE'
      }
      if (profile_type === 'professor') {
        profile_type = 'PROF'
      }
    }

    if (gender) {
      gender = gender.trim()
      gender = gender[0]
    }
    if (states) states = states.trim()
    else {
      states = null
    }
    if (country) {
      country = country.trim()
    } else {
      country = 'India'
    }
    if (college) {
      college =
        country === 'India' && college !== 'IITR'
          ? college.value.trim()
          : college.trim()
    } else {
      college = 'null'
    }
    if (about_esummit) about_esummit = about_esummit
    else {
      about_esummit = null
    }
    if (tshirt_size) tshirt_size = tshirt_size
    else {
      tshirt_size = null
    }
    if (password) password = password.trim()
    if (confirm_password) confirm_password = confirm_password.trim()
    if (year) year = year
    else {
      year = null
    }
    if (programme) programme = programme.value
    else {
      programme = null
    }
    if (enrollment_no) enrollment_no = enrollment_no
    else {
      enrollment_no = null
    }
    if (industry) industry = industry
    else {
      industry = null
    }
    if (organisation_name) organisation_name = organisation_name
    else {
      organisation_name = null
    }

    let url_q = window.location.href
    let url = new URL(url_q)
    let ref = url.searchParams.get('ref')
    let endpoint =
      ref === null ? '/v1/api/user/signup/' : `/v1/api/user/signup/?ref=${ref}`
    let data = {
      name: name,
      email: email,
      image_url: image_url,
      password: password,
      user_type: profile_type,
      country: country,
      phone: phone_no,
      gender: gender,
      enrollment_no: enrollment_no,
      programme: programme,
      college: college,
      city: city,
      state: states,
      organisation_name: organisation_name,
      industry: industry,
      tshirt_size: tshirt_size,
      about_esummit: about_esummit,
      year: year
    }
    // document
    //     .getElementById("loader")
    //     .style
    //     .display = "grid";
    axios({
      method: 'post',
      url: BASE_URL + endpoint,
      data: data
    })
      .then(r => {
        var d = new Date()
        d.setTime(d.getTime() + 365 * 24 * 60 * 60 * 1000)
        if (r.data.token) {
          localStorage.setItem('user_token', r.data.token)
          this.setState({
            activeStep: this.state.activeStep + 1
          })
        }
        // document
        //     .getElementById("loader")
        //     .style
        //     .display = "none";
      })
      .catch(response => {
        // document
        //     .getElementById("loader")
        //     .style
        //     .display = "none";
        alert('Email id already registered')
        window.location.href = '/register'
      })
  }
  handleDetails = data => {
    this.setState({
      phone_no: data.phone_no,
      gender: data.gender.value,
      enrollment_no: data.enrollment_no,
      country: data.country,
      states: data.states,
      city: data.city,
      college: data.college,
      programme: data.programme,
      year: data.year,
      about_esummit: data.about_esummit,
      tshirt_size: data.tshirt_size,
      organisation_name: data.organisation_name,
      industry: data.industry,
      activeStep: this.state.activeStep + 1
    })
    // ()=>{
    //     console.log(this.state)
    // })
    // function () {
    //     this.handleFullSubmit()
    // })
  }
  handleNext = () => {
    // document
    //     .getElementById("loader")
    //     .style
    //     .display = "grid";
    this.setState(state => ({
      activeStep: state.activeStep + 1
    }))
    // document
    //     .getElementById("loader")
    //     .style
    //     .display = "none";
  }

  handleBack = data => {
    if (this.state.activeStep === 2) {
      this.setState({
        phone_no: data.phone_no,
        gender: data.gender,
        enrollment_no: data.enrollment_no,
        country: data.country,
        states: data.states,
        city: data.city,
        college: data.college,
        programme: data.programme,
        year: data.year,
        about_esummit: data.about_esummit,
        tshirt_size: data.tshirt_size,
        organisation_name: data.organisation_name,
        industry: data.industry
      })
    }
    // document
    //     .getElementById("loader")
    //     .style
    //     .display = "grid";
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }))
    // document
    //     .getElementById("loader")
    //     .style
    //     .display = "none";
  }

  handleReset = () => {
    this.setState({
      activeStep: 0
    })
  }

  onChange = e => {
    const name = e.target.name
    let value = e.target.value
    this.setState({ [name]: value })
  }

  render() {
    // const { classes } = this.props;
    // const steps = getSteps();
    const { otp, social_signup, activeStep, email, profile_type } = this.state
    return (
      <div className="profiletype_outer">
        <div className="profiletype-left">
          <div className="profiletype-left-heading">
            BECOME A PART OF SOMETHING DISRUPTIVE
          </div>
          <div className="profiletype-left-subHeading">
            Join hundreds of startup enthusiasts and embark on a journey from
            zero to one.
          </div>
        </div>
        <div className="profiletype_main">
          <div className="esummit-register-form-parent">
            <div className="esummit-register-form-heading">
              <div className="esummit-regsiter-form-heading-child">
                {activeStep === 0
                  ? 'ACCOUNT SETUP'
                  : activeStep === 1
                  ? 'PROFILE TYPE'
                  : activeStep === 2
                  ? 'PERSONAL DETAILS'
                  : // activeStep === 3 ? "EMAIL VERIFICATION" :
                  activeStep === 3
                  ? 'REGISTRATION COMPLETED'
                  : null}
              </div>
              {activeStep !== 3 ? (
                <div className="esummit-regsiter-form-heading-child-second">
                  Let’s begin with setting up your account
                </div>
              ) : (
                <div className="esummit-regsiter-form-heading-child-second">
                  Congrats! You have successfully registered for E-Summit’20
                </div>
              )}
            </div>
            <div>
              <form onSubmit={this.handleSubmit}>
                {/* <Loader /> */}
                {activeStep === 0 ? (
                  <AccountSetup
                    data={this.state}
                    handleGoogle={this.responseGoogle}
                    handleFacebook={this.responseFacebook}
                    handleSubmit={this.handleAccountSetup}
                  />
                ) : null}

                {activeStep === 1 ? (
                  <PersonalDetails
                    handleState={this.state}
                    handleBack={this.handleBack}
                    profile_type={profile_type}
                    handleDetails={this.handleDetails}
                  />
                ) : null}
                {!this.state.social_signup && activeStep === 2 ? (
                  <EmailVerification
                    email={email}
                    handleOTP={otp}
                    handleSubmit={this.handleEmailVerification}
                  />
                ) : null}

                {this.state.social_signup && activeStep === 2
                  ? this.handleFullSubmit()
                  : null}
                {activeStep === 3 ? (
                  <div className="esummit-register-form-successfull-grand-parent">
                    <div className="esummit-register-form-successfull-parent"></div>
                    <div className="esummit-register-form-go-to-name">
                      {this.state.name}
                    </div>
                    <div
                      className="esummit-register-form-button"
                      style={{ justifyContent: 'center' }}
                    >
                      <div
                        className="esummit-register-form-button-back"
                        onClick={this.goToDashboard}
                      >
                        GO TO DASHBOARD
                      </div>
                    </div>
                  </div>
                ) : null}
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NonCARegistration

/* eslint-disable react/prop-types */
