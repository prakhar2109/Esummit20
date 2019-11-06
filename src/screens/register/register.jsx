import React, { Component } from "react";
import "./register.css";
import Footer from "../footer/footer";
import { NavLink } from "react-router-dom";
import Header from "../header/header";
import axios from "axios";
import Select from "react-select";
import colleges from './colleges.json';
import citys from './citys.json';
import countries from './countries.json';

import { BASE_URL } from "../../utils/urls";
import CreatableSelect from 'react-select/lib/Creatable';

import Loader from "../loader/loader"

// import CollegeSelect from './College' import StateSelect from './state'

let token = localStorage.getItem('ca_token');

const gender_option = [
  {
    value: 'M',
    label: "Male"
  }, {
    value: 'F',
    label: "Female"
  }, {
    value: 'O',
    label: "Others"
  }, {
    value: 'N',
    label: "Prefer Not Say"
  }
];

const options = [

  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",

  "Chattisgarh",

  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",

  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",

  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal"
].map(state => ({ value: state, label: state }));

const defaultState = {
  name: "",
  email: "",
  contact: "",
  password: "",
  college: "",
  states: "",
  gender: "",
  country: "",
  city: ""
};

export default class Register extends Component {

  state = defaultState;

  constructor(props) {
    super(props);
    if (token !== null && token !== undefined) {
      window.location.href = "/dashboard";
    }
  }

  getCountries = () => {
    return countries.map(country => ({ value: country.name, label: country.name }))
  }

  getCities = (state) => {
    let cities = citys[state];
    cities = cities.map(city => ({ value: city, label: city }))
    return cities;
  }

  handleChange = (selectedOption) => {
    this.setState({
      college: this.state.country === "India"
        ? selectedOption.label
        : selectedOption
    });
  };
  handleCountryChange = (selectedOption) => {
    this.setState({ country: selectedOption });
  };

  handleCityChange = (selectedOption) => {
    this.setState({ city: selectedOption });
  };
  handleStateChange = states => {
    this.setState({ states: states });
  };

  handleGenderChange = gendr => {
    this.setState({ gender: gendr });
  };

  validate = () => {

    var re = /\S+@\S+\.\S+/
    if (this.state.email.match(re)) {
      document
        .getElementById('email_check')
        .innerHTML = '';

    } else {
      document
        .getElementById('email_check')
        .innerHTML = 'Please Enter Correct Email';
    }

    if (this.state.name === "") {
      document
        .getElementById('name_error')
        .innerHTML = 'Please Enter Name';
    } else {
      document
        .getElementById('name_error')
        .innerHTML = '';
    }

    if (this.state.contact.length === 9 || this.state.contact.length === 10) {
      document
        .getElementById('phone_error')
        .innerHTML = '';
    } else {

      document
        .getElementById('phone_error')
        .innerHTML = 'Mobile Number Must be 10 digits';
    }

    if (this.state.password.length < 7) {
      document
        .getElementById('pass_error')
        .innerHTML = 'Password must be greater than 8 characters';
    } else {
      document
        .getElementById('pass_error')
        .innerHTML = '';
    }

    if (this.state.message !== "" && this.state.name !== "" && this.state.email.match(re)) {
      return "true";
    } else {
      return "false";
    }

  }

  handleClick = e => {

    e.preventDefault();
    if (this.state.password.length < 8) {
      alert("Password length must be greater than 8");
    } else {
      let data = {
        name: this.state.name,
        college: this.state.country.value === "India"
          ? this.state.college.value
          : this.state.college,
        email: this.state.email,
        phone: this.state.contact,
        password: this.state.password,
        state: this.state.country.value === "India"
          ? this.state.states.value
          : null,
        gender: this.state.gender.value,
        user_type: "AMB", //for now in CA dashboard
        country: this.state.country.value,
        city: this.state.country.value === "India"
          ? this.state.city.label
          : null
      };
      document
        .getElementById("loader")
        .style
        .display = "flex";
      axios({
        method: "post",
        url: BASE_URL + "/v1/api/user/signup/",
        data: data,
        config: {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      }).then((r) => {
        document
          .getElementById("loader")
          .style
          .display = "none";

        var d = new Date();
        d.setTime(d.getTime() + 365 * 24 * 60 * 60 * 1000);

        if (r.data.token) {
          localStorage.setItem("ca_token", r.data.token);
        }
        window.location.href = "/dashboard";
        data = "";
      }).catch((response) => {
        document
          .getElementById("loader")
          .style
          .display = "none";
        this.setState(defaultState);
        alert(response);
      });
    }
  };

  render() {
    const { gender } = this.state;

    return (
      <div>
        <Loader />
        <Header />

        <div className="register_main">
          <div className="register_text">
            <span>
              CAMPUS AMBASSADOR</span>

            <span>
              The CAP( Campus Ambassador Programme) is a pinion initiative of E-Summit IIT
              Roorkee, 2018 organized by the Entrepreneurship Cell, IIT Roorkee and aims to
              amplify our purview to newer horizons. We aspire to increase our outreach to as
              many students as possible throughout the country and spread the spirit of
              entrepreneurship to similar extents. This year E-Summit IIT Roorkee brings with
              it loads and loads of colossal opportunities for the participating students and
              exciting perks for the Campus Ambassadors.{" "}
            </span>

            <span id="perksexcite">
              <p>the exciting perks!
              </p>
              <br />
              1. For every successful payment from the participants who have registered from
              the referral link, the CA would be awarded Rs. 150 off on the registration plus
              accommodation fees for E-Summit 2019.<br />
              2. An official certificate from E-Summit IIT Roorkee will be provided as an
              acknowledgment of your work as a CA for the same.<br />
              3. Endorsement of your LinkedIn profile by E-Summit IIT Roorkee.<br />
              4. Other additional goodies and benefits will be awarded to the top performing
              CAs.
            </span>

            {/* <center>
              <a href="./../../pdfs/perks.pdf" target="_blank">
                {" "}
                <button>PERKS</button>
              </a>
            </center> */}
          </div>

          <div className="register_form">
            <span className="register_login">
              {" "}
              <NavLink activeClassName="act" to="/login">
                Sign In
              </NavLink>
            </span>
            <span className="register_register">
              {" "}
              <NavLink activeClassName="act" to="/register">
                Sign Up
              </NavLink>
            </span>

            <form>
              <label>NAME
              </label>

              <input
                type="text"
                value={this.state.name}
                onChange={event => {
                  this.setState({ name: event.target.value });
                  {
                    this.validate()
                  }
                }}
                placeholder="Enter your full name" />

              <div className="error" id="name_error"></div>

              <label>PHONE NO.</label>

              <input
                type="tel"
                value={this.state.contact}
                parse={value => Number(value)}
                onChange={event => {
                  this.setState({ contact: event.target.value });
                  {
                    this.validate()
                  }
                }}
                placeholder="Enter your phone number" />

              <div className="error" id="phone_error"></div>

              <label>EMAIL-ID</label>

              <input
                type="email"
                value={this.state.email}
                onChange={event => {
                  this.setState({ email: event.target.value });
                  {
                    this.validate()
                  }
                }}
                placeholder="Enter your Email ID" />
              <div className="error" id="email_check"></div>

              <label>PASSWORD
              </label>

              <input
                type="password"
                value={this.state.passowrd}
                onChange={event => {
                  this.setState({ password: event.target.value });
                  {
                    this.validate()
                  }
                }}
                placeholder="******" />

              <div className="error" id="pass_error"></div>

              <label>
                GENDER
              </label>
              <Select
                placeholder="Enter your gender"
                value={gender}
                onChange={this.handleGenderChange}
                options={gender_option} /> {/*
                        <label>PROGRAMME </label>

                        <input type="text"

                        value={this.state.program}

                            onChange={event => {
                                this.setState({
                                    program: event.target.value
                                })
                            }}

                        ></input>
                        <label>YEAR </label>

                        <input type="number"

                        value={this.state.year}

                            onChange={event => {
                                this.setState({
                                    year: event.target.value
                                })
                            }}
                        ></input>

                    */}
              <label>COUNTRY
              </label>

              <Select
                value={this.state.country}
                onChange={this.handleCountryChange}
                options={this.getCountries()}
                placeholder="Enter your country name" />


              {this.state.country.value === "India"
                ? <div>

                  <label>STATE
                  </label>

                  <Select value={this.state.states} // onChange={event => {} //   this.setState({} //     states: event.target.value,}}
                    onChange={this.handleStateChange}
                    options={options}
                    placeholder="Enter your state name" />

                  <label>COLLEGE
              </label>

                  <CreatableSelect
                    placeholder="Enter your college name"
                    searchable={true}
                    required={true}
                    onChange={this.handleChange}
                    options={colleges[this.state.states.value]}
                    clearable={false}
                    value={this.state.college} />

                  <label>CITY
              </label>

                  <CreatableSelect
                    placeholder="Enter your city"
                    searchable={true}
                    required={true}
                    onChange={this.handleCityChange}
                    options={this.state.states === ""
                      ? []
                      : this.getCities(this.state.states.value)}
                    clearable={false}
                    value={this.state.city} />

                </div>
                :
                <div>
                  <label>COLLEGE
              </label>
                  <input
                    type="text"
                    value={this.state.college}
                    onChange={event => {
                      this.setState({ college: event.target.value })
                    }}></input>

                </div>
              }

            </form>

            <br />

            <button onClick={this.handleClick}>
              SIGN UP
          </button>
          </div>
          <Footer />
        </div>
      </div>
    )
  }
}

