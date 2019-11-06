import React, { Component } from 'react';
import './css/main.css';
import $ from 'jquery';
import Header from "../header/header";
// import { NavLink } from 'react-router-dom'
import logo from './static/logo-18.svg';
import phone from './static/Group.svg';
import mail from './static/mail-icon.png';


import 'form-serializer';

// const category_option = [
//   {
//     value :"Student",
//     label :"Student"
//   },

//   {
//     value : "Professional",
//     label : "Professional"
//   }
// ]

export default class ComingSoon extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      phone: "",
      email: "",
      college: "",
      city: "",
      error: "",
      success: "",
    };
  }

  onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  }

  handleClick = (e) => {
    e.preventDefault();

    let {
      name, phone, email, college, city,
    } = this.state;

    if (name) name = name.trim();
    if (phone) phone = phone.trim();
    if (email) email = email.trim();
    if (college) college = college.trim();
    if (city) city = city.trim();

    if (name) {
      if (phone) {
        if (!isNaN(phone) && phone.substring(0).length === 10) {
          if (email) {
            const $form = $('form');
            const url = 'https://script.google.com/macros/s/AKfycbz5J9fogQMFcasbcEpf7_IyyCu-_O3FmMzKcDpGJ7RNUuqwAbcr/exec';
            $.ajax({
              url,
              method: 'GET',
              dataType: 'json',
              data: $form.serializeObject(),
              success:
                this.setState({
                  success: "Form submitted successfully",
                  errors: "",
                  name: "",
                  phone: "",
                  email: "",
                  college: "",
                  city: "",
                }),
              error:
                console.log("error"),
              //   this.setState({
              //   errors: "Something went wrong"
              // })

            });
          } else {
            this.setState({
              errors: "Email field is invalid",
            });
          }
        } else {
          this.setState({
            errors: "Contact number is invalid",
          });
        }
      } else {
        this.setState({
          errors: "Contact cannot be empty",
        });
      }
    } else {
      this.setState({
        errors: "Name cannot be empty",
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <Header />

        <div className="main_conta">

          <div className="Part1">

            <center>
              <img src={logo} alt="logo" />

              <div className="text">

                E-Summit IIT Roorkee brings a platform to celebrate the history and the spirit of  entrepreneurship and to inspire the leaders and problem solvers of today and tomorrow. This 2-day extravaganza will be a congregation of students, corporates, entrepreneurs and budding enthusiasts on a common stage.

              </div>

              {/* <NavLink to='/ignite'>
                <button>
                                    Know More
                </button>
              </NavLink> */}

            </center>

            <div className="social">
              <span>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/esummit/">
                  <i className="fab fa-linkedin" />
                </a>
                <br />
                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/ecelliitr/">
                  <i className="fab fa-facebook-f" />
                </a>
                <br />
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/ecelliitr/">
                  <i className="fab fa-instagram" />
                </a>
              </span>
            </div>
            <center className="contact">

              <span>
                <span className="phone">
                  <img src={phone} alt="phone" />
                </span>

                <span className="phone_no">
                  <a href="tel:7302200596">+91 7302200596</a>
                </span>
              </span>

              <span>
                <span className="phone">
                  <img src={mail} alt="phone" />
                </span>

                <span className="email">
                  <a href="mailto:esummit@iitr.ac.in"> esummit@iitr.ac.in</a>
                </span>
              </span>

            </center>

          </div>

          <div className="form">

            <form>
              <center>
                <p>
                  Pre-Register Now
                </p>
                <hr />

              </center>
              <div className={this.state.success ? "form-success" : "form-errors"}>
                {this.state.errors}
                {this.state.success}
              </div>
              {/* <label>Name</label> */}
              <div className="form-fields">
                <input onChange={this.onChange} name="name" value={this.state.name} type="text" placeholder="Name*" />
              </div>

              {/* <label>Phone</label> */}
              <div className="form-fields">
                <input onChange={this.onChange} name="phone" type="number" value={this.state.phone} minLength="10" maxLength="10" placeholder="Phone*" />
              </div>
              {/* <label>Email</label> */}
              <div className="form-fields">
                <input onChange={this.onChange} name="email" type="email" value={this.state.email} placeholder="Email*" />
              </div>
              {/* <label>College</label> */}
              <div className="form-fields">
                <input onChange={this.onChange} name="college" type="text" value={this.state.college} placeholder="College" />
              </div>
              {/* <label>City</label> */}
              <div className="form-fields">
                <input onChange={this.onChange} name="city" type="text" value={this.state.city} placeholder="City" />
              </div>
              <button onClick={this.handleClick}>SUBMIT</button>
            </form>

          </div>

          <div className="social_mobile">
            <span>
              <a target="blank" href="https://www.linkedin.com/company/esummit/">
                <i className="fab fa-linkedin" />
              </a>

              <a target="blank" href="https://www.facebook.com/ecelliitr/">
                <i className="fab fa-facebook-f" />
              </a>

              <a target="blank" href="https://www.instagram.com/ecelliitr/">
                <i className="fab fa-instagram" />
              </a>
            </span>
          </div>
          <center className="contact_mobile">

            <span>
              <span className="phone">
                <img src={phone} alt="phone" />
              </span>

              <span className="phone_no">
                <a href="tel:7302200596">+91 7302200596</a>
              </span>
            </span>

            <span>
              <span className="phone2">
                <img src={phone} alt="phone" />
              </span>

              <span className="email">
                <a href="mailto:esummit19@gmail.com"> esummit19@gmail.com</a>
              </span>
            </span>

          </center>

        </div>
      </React.Fragment>
    );
  }
}
