import React, { Component } from 'react'
import facebookLogo from '../../assets/facebook.svg'
import instaLogo from '../../assets/insta.svg'
import linkedinLogo from '../../assets/linkedin.svg'
import youtubeLogo from '../../assets/youtube.svg'
import twitterLogo from '../../assets/twitter.svg'
import FetchAPI from '../../utils/fetchAPI'

import './footer.scss'

class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      contact: '',
      message: '',
      loader: false,
      error: false,
      success: false
    }
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault()
    let token = localStorage.getItem('user_token')
    this.setState({
      loader: true
    })
    FetchAPI('POST', 'v1/api/contact_form/', this.state, token)
      .then(res => {
        this.setState({
          loader: false,
          error: false,
          success: true,
          name: '',
          email: '',
          contact: '',
          message: ''
        })
      })
      .catch(e => {
        this.setState({
          loader: false,
          error: true,
          success: false
        })
      })
  }
  render() {
    const { name, email, contact, message, loader, error, success } = this.state
    return (
      <div className="new-footer-container">
        <div className="new-footer-container-child width-30">
          <a
            href="https://ecelliitr.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="new-footer-section-esummit-logo" />
          </a>
          <div>
            <div className="new-footer-section-contact-container">
              <div className="new-footer-section-contact-heading">
                E-Mail ID
              </div>
              <div className="new-footer-section-contact-subheading">
                esummit@iitr.ac.in
              </div>
            </div>
            <div className="new-footer-section-contact-container">
              <div className="new-footer-section-contact-heading">
                Follow us at:
              </div>
              <div className="new-footer-section-contact-subheading logo-container">
                <a
                  href="https://www.facebook.com/ecelliitr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="new-footer-section-contact-link"
                >
                  <img
                    src={facebookLogo}
                    className="new-footer-section-contact-logo"
                    alt=""
                  />
                </a>
                <a
                  href="https://www.instagram.com/ecelliitr/"
                  target="_blank"
                  className="new-footer-section-contact-link"
                  rel="noopener noreferrer"
                >
                  <img
                    src={instaLogo}
                    className="new-footer-section-contact-logo"
                    alt=""
                  />
                </a>
                <a
                  className="new-footer-section-contact-link"
                  href="https://www.youtube.com/channel/UCf1py66Ov1easJAswwjxQZw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={youtubeLogo}
                    className="new-footer-section-contact-logo"
                    alt=""
                  />
                </a>
                <a
                  className="new-footer-section-contact-link"
                  href="https://twitter.com/EDC_IITRoorkee"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={twitterLogo}
                    className="new-footer-section-contact-logo"
                    alt=""
                  />
                </a>
                <a
                  className="new-footer-section-contact-link"
                  href="https://www.linkedin.com/company/esummit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={linkedinLogo}
                    className="new-footer-section-contact-logo"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="new-footer-container-child width-30">
          <a
            href="https://ecelliitr.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="new-footer-section-ecell-logo" />
          </a>
          <div>
            <div className="new-footer-section-contact-container">
              <div className="new-footer-section-contact-heading">
                Phone no.
              </div>
              <div className="new-footer-section-contact-subheading">
                Raghav : +91 7414 069 716 <br /> Gagneet : +91 9027 014 108
              </div>
            </div>
            <div className="new-footer-section-contact-container">
              <div className="new-footer-section-contact-heading">
                Our Address
              </div>
              <div className="new-footer-section-contact-subheading">
                E-Cell Office, SAC Building, IIT Roorkee, Roorkee, Uttrakhand,
                India
              </div>
            </div>
          </div>
        </div>
        <div className="new-footer-container-child width-40 padding-left-3rem">
          <form className="new-footer-form" onSubmit={this.onSubmit}>
            <div className="new-footer-form-heading">GET IN TOUCH</div>
            {!loader && error ? (
              <div className="new-form-error">Something went wrong!</div>
            ) : !loader && success ? (
              <div className="new-form-success">
                Form submitted successfully!
              </div>
            ) : (
              <></>
            )}
            <div className="new-footer-form-input-container">
              <input
                id="inputName"
                type="text"
                className="new-footer-form-field"
                placeholder="Name"
                name="name"
                value={name}
                autoCorrect="off"
                autoComplete="off"
                autoCapitalize="off"
                spellCheck="false"
                onChange={this.onChange}
                required
              />
            </div>
            <div className="new-footer-form-input-container">
              <input
                id="inputEmail"
                type="email"
                className="new-footer-form-field"
                placeholder="E-Mail"
                name="email"
                value={email}
                autoCorrect="off"
                autoComplete="off"
                autoCapitalize="off"
                spellCheck="false"
                onChange={this.onChange}
                required
              />
            </div>
            <div className="new-footer-form-input-container">
              <input
                id="inputContact"
                type="text"
                className="new-footer-form-field"
                placeholder="Contact No."
                name="contact"
                value={contact}
                autoCorrect="off"
                autoComplete="off"
                autoCapitalize="off"
                spellCheck="false"
                onChange={this.onChange}
                required
              />
            </div>
            <div className="new-footer-form-input-container">
              <textarea
                id="inputMessage"
                type="text"
                className="new-footer-form-field textarea-field"
                placeholder="Message"
                name="message"
                value={message}
                rows="5"
                autoCorrect="off"
                autoComplete="off"
                autoCapitalize="off"
                spellCheck="false"
                onChange={this.onChange}
                required
              />
            </div>
            <button className="new-form-submit-button" type="submit">
              {loader ? (
                <>
                  <i className="fa fa-circle-o-notch fa-spin"></i>
                </>
              ) : (
                <>Submit</>
              )}
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default Footer
