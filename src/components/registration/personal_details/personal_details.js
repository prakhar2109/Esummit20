/* eslint-disable react/no-typos */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './personal_details.css'
import Navbar from '../navbar/navbar.js'
import Button from '../popup/button/register_button.js'
class Personaldetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      phone: '',
      profile_type: 'CA',
      college: '',
      tshirt_size: '',
      city: '',
      state: '',
      country: '',
      accomodation_needed: '',
      phone_error_bool: true,
      phone_error: '',
      name_error: '',
      name_error_bool: true,
      college_error: '',
      college_error_bool: true,
      city_error: '',
      city_error_bool: true,
      state_error: '',
      state_error_bool: true,
      country_error: '',
      country_error_bool: true,
      tshirt_error: '',
      tshirt_error_bool: true,
      email_error_bool: true
    }
  }

  componentDidMount() {
    this.setState({
      name: this.props.name,
      email: this.props.email,
      phone: this.props.phone,
      tshirt_size: this.props.tshirt_size,
      accomodation_needed: this.props.accomodation_needed
    })
    const height = window.innerHeight
    let push = 0 * height
    window.scroll({ top: push, behavior: 'auto' })
  }
  handleChange = e => {
    let change = {}
    change[e.target.name] = e.target.value
    this.setState(change)
  }
  handleSubmit = () => {
    if (this.state.name_error !== '' && !this.state.name_error_bool) {
      return this.name_validate
    }
    if (this.state.email_error !== '' && !this.state.email_error_bool) {
      return this.email_validate
    }
    if (this.state.phone_error !== '' && !this.state.phone_error_bool) {
      return this.phonevalidate
    }
    if (this.state.college_error !== '' && !this.state.college_error_bool) {
      return this.college_validate
    }

    if (this.state.country_error !== '' && !this.state.country_error_bool) {
      return this.country_validate
    }

    if (this.state.city_error !== '' && !this.state.city_error_bool) {
      return this.city_validate
    }

    if (this.state.state_error !== '' && !this.state.state_error_bool) {
      return this.state_validate
    }
    if (this.state.tshirt_error !== '' && !this.state.tshirt_error_bool) {
      return this.tshirt_validate
    }
    const {
      name,
      email,
      phone,
      college,
      city,
      country,
      state,
      tshirt_size,
      profile_type
    } = this.state
    let data = {
      phone: phone,
      name: name,
      email: email,
      city: city,
      country: country,
      state: state,
      college: college,
      tshirt_size: tshirt_size,
      profile_type: profile_type
    }
    this.props.handleDetail(data)
  }
  handleBack = () => {
    const {
      name,
      email,
      phone,
      college,
      city,
      country,
      state,
      tshirt_size,
      accomodation_needed,
      profile_type
    } = this.state
    let data = {
      phone: phone,
      name: name,
      email: email,
      college: college,
      city: city,
      country: country,
      state: state,
      tshirt_size: tshirt_size,
      profile_type: profile_type
    }
    this.props.handleBack(data)
  }
  phonevalidate = () => {
    setTimeout(
      function() {
        if (this.state.phone.length < 10 || this.state.phone.length > 10) {
          this.setState({
            phone_error_bool: true,
            phone_error: 'Phone number must contain 10 numbers'
          })
        } else {
          this.setState({
            phone_error_bool: false,
            phone_error: ''
          })
        }
      }.bind(this),
      1000
    )
  }
  name_validate = () => {
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
  email_validate = () => {
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
  tshirt_validate = () => {
    setTimeout(
      function() {
        if (this.state.tshirt_size !== '') {
          this.setState({
            tshirt_error_bool: false,
            tshirt_error: ''
          })
        } else {
          this.setState({
            tshirt_error_bool: true,
            tshirt_error: 'Write your Tshirt Size'
          })
        }
      }.bind(this),
      1000
    )
  }
  college_validate = () => {
    setTimeout(
      function() {
        if (this.state.college !== '') {
          this.setState({
            college_error_bool: false,
            college_error: ''
          })
        } else {
          this.setState({
            college_error_bool: true,
            college_error: 'Write Your College Name'
          })
        }
      }.bind(this),
      1000
    )
  }
  city_validate = () => {
    setTimeout(
      function() {
        if (this.state.city !== '') {
          this.setState({
            city_error_bool: false,
            city_error: ''
          })
        } else {
          this.setState({
            city_error_bool: true,
            city_error: 'Write Your City Name'
          })
        }
      }.bind(this),
      1000
    )
  }
  country_validate = () => {
    setTimeout(
      function() {
        if (this.state.country !== '') {
          this.setState({
            country_error_bool: false,
            country_error: ''
          })
        } else {
          this.setState({
            country_error_bool: true,
            country_error: 'Write Your Country Name'
          })
        }
      }.bind(this),
      1000
    )
  }
  state_validate = () => {
    setTimeout(
      function() {
        if (this.state.state !== '') {
          this.setState({
            state_error_bool: false,
            state_error: ''
          })
        } else {
          this.setState({
            state_error_bool: true,
            state_error: 'Write Your state Name'
          })
        }
      }.bind(this),
      1000
    )
  }
  render() {
    const {
      name,
      email,
      phone,
      college,
      city,
      country,
      state,
      tshirt_size,
      accomodation_needed,
      name_error_bool,
      name_error,
      email_error_bool,
      email_error,
      phone_error,
      phone_error_bool,
      college_error,
      college_error_bool,
      country_error,
      country_error_bool,
      city_error,
      city_error_bool,
      state_error,
      state_error_bool,
      tshirt_error,
      tshirt_error_bool
    } = this.state
    return (
      <React.Fragment>
        <div className="personaldetails">
          <Navbar />
          <div className="p_signupcircle_marker">
            <div className="p_signup_circle">
              <div className="p_signup_innercircle">
                <div>1</div>
              </div>
              <p className="p_signup">Sign Up</p>
            </div>

            <div className="p_between_line"></div>
            <div className="p_personaldetail_circle">
              <div className="p_personaldetail_innercircle">2</div>
            </div>
            <div className="p_personaldetail">
              <p>Personal Details</p>
            </div>
          </div>
          <div className="personaldetails_form">
            <div className="personaldetails_title">
              <p>Personal Details</p>
            </div>
            <div className="personaldetails_data">
              <form method="POST">
                <label htmlFor="inputName">Name</label>
                <div className="personaldetails_input_feild">
                  <input
                    id="inputName"
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    className="inputname"
                    value={name}
                    autoCorrect="off"
                    autoComplete="off"
                    autoCapitalize="on"
                    onChange={e => {
                      this.handleChange(e)
                      this.name_validate()
                    }}
                    required
                  />
                  <span className="personaldetails_input_error">
                    {name_error_bool ? (
                      <div className="error_message">{name_error}</div>
                    ) : null}
                  </span>
                </div>
                <label htmlFor="inputEmail">E-Mail</label>
                <div className="personaldetails_input_feild">
                  <input
                    id="inputEmail"
                    type="email"
                    name="email"
                    placeholder="Enter E-Mail"
                    value={email}
                    autoCorrect="off"
                    autoComplete="off"
                    autoCapitalize="off"
                    onChange={e => {
                      this.handleChange(e)
                      this.email_validate()
                    }}
                    required
                  />
                  <span className="personaldetails_input_error">
                    {email_error_bool ? (
                      <div className="error_message">{email_error}</div>
                    ) : null}
                  </span>
                </div>
                <label htmlFor="inputPhone">Contact No.</label>
                <div className="personaldetails_input_feild">
                  <input
                    id="inputPhone"
                    type="number"
                    name="phone"
                    placeholder="Enter Mobile Number"
                    value={phone}
                    autoCorrect="off"
                    autoComplete="off"
                    autoCapitalize="off"
                    onChange={e => {
                      this.handleChange(e)
                      this.phonevalidate()
                    }}
                    required
                  />
                  <span className="personaldetails_input_error">
                    {phone_error_bool ? (
                      <div className="error_message">{phone_error}</div>
                    ) : null}
                  </span>
                </div>
                <label htmlFor="inputCollege">College</label>
                <div className="personaldetails_input_feild">
                  <input
                    id="inputCollege"
                    type="text"
                    name="college"
                    placeholder="Enter College name"
                    value={college}
                    autoCorrect="off"
                    autoComplete="off"
                    autoCapitalize="off"
                    onChange={e => {
                      this.handleChange(e)
                      this.college_validate()
                    }}
                    required
                  />
                  <span className="personaldetails_input_error">
                    {college_error_bool ? (
                      <div className="error_message">{college_error}</div>
                    ) : null}
                  </span>
                </div>
                <label htmlFor="inputCountry">Country</label>
                <div className="personaldetails_input_feild">
                  <input
                    id="inputCountry"
                    type="text"
                    name="country"
                    placeholder="Enter country name"
                    value={country}
                    autoCorrect="off"
                    autoComplete="off"
                    autoCapitalize="off"
                    onChange={e => {
                      this.handleChange(e)
                      this.country_validate()
                    }}
                    required
                  />
                  <span className="personaldetails_input_error">
                    {country_error_bool ? (
                      <div className="error_message">{country_error}</div>
                    ) : null}
                  </span>
                </div>
                <label htmlFor="inputState">State</label>
                <div className="personaldetails_input_feild">
                  <input
                    id="inputState"
                    type="text"
                    name="state"
                    placeholder="Enter state name"
                    value={state}
                    autoCorrect="off"
                    autoComplete="off"
                    autoCapitalize="off"
                    onChange={e => {
                      this.handleChange(e)
                      this.state_validate()
                    }}
                    required
                  />
                  <span className="personaldetails_input_error">
                    {state_error_bool ? (
                      <div className="error_message">{state_error}</div>
                    ) : null}
                  </span>
                </div>
                <label htmlFor="inputCity">City</label>
                <div className="personaldetails_input_feild">
                  <input
                    id="inputCity"
                    type="text"
                    name="city"
                    placeholder="Enter city name"
                    value={city}
                    autoCorrect="off"
                    autoComplete="off"
                    autoCapitalize="off"
                    onChange={e => {
                      this.handleChange(e)
                      this.city_validate()
                    }}
                    required
                  />
                  <span className="personaldetails_input_error">
                    {city_error_bool ? (
                      <div className="error_message">{city_error}</div>
                    ) : null}
                  </span>
                </div>
                <label htmlFor="inputTshirt">T-Shirt Size</label>
                <div className="personaldetails_input_feild">
                  <input
                    id="inputTshirt"
                    type="text"
                    name="tshirt_size"
                    placeholder="Enter T-Shirt Size"
                    value={tshirt_size}
                    autoCorrect="off"
                    autoComplete="off"
                    autoCapitalize="off"
                    onChange={e => {
                      this.handleChange(e)
                      this.tshirt_validate()
                    }}
                    required
                  />
                  <span className="personaldetails_input_error">
                    {tshirt_error_bool ? (
                      <div className="error_message">{tshirt_error}</div>
                    ) : null}
                  </span>
                </div>
              </form>
            </div>

            <Button
              name="BACK"
              style={{
                marginLeft: '48px',
                border: '2px solid #09C9C3',
                backgroundColor: '#fff',
                fontWeight: 'bold',
                color: 'rgba(9, 201, 195, 0.87)'
              }}
              handleClick={this.handleBack}
            />

            <Button
              name="Submit"
              style={{
                marginLeft: '350px',
                marginTop: '-40.5px',
                fontWeight: 'bold',
                borderRadius: '3px'
              }}
              handleClick={this.handleSubmit}
            />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Personaldetail
Personaldetail.propTypes = {
  name: PropTypes.string,
  email: PropTypes.email,
  phone: PropTypes.number,
  college: PropTypes.string,
  tshirt_size: PropTypes.string,
  accomodation_needed: PropTypes.string,
  handleBack: PropTypes.func,
  handleDetail: PropTypes.func
}