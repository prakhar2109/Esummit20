import React, { Component } from 'react'
import footerLogo from '../../assets/footer-logo.svg'
import facebookLogo from '../../assets/facebook.svg'
import instaLogo from '../../assets/insta.svg'
import linkedinLogo from '../../assets/linkedin.svg'
import youtubeLogo from '../../assets/youtube.svg'
import twitterLogo from '../../assets/twitter.svg'
class Footer extends Component {
  render() {
    return (
      <div className="footer-section-container">
        <a
          href="https://ecelliitr.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={footerLogo} className="footer-section-logo" alt="" />
        </a>
        <div className="footer-section-contact-container">
          <div className="footer-section-contact-heading">E-Mail ID</div>
          <div className="footer-section-contact-subheading">
            esummit@iitr.ac.in{' '}
          </div>
        </div>
        <div className="footer-section-contact-container">
          <div className="footer-section-contact-heading">Phone no.</div>
          <div className="footer-section-contact-subheading">
            Raghav : +91 7414 069 716 <br /> Gagneet : +91 9027014108
          </div>
        </div>
        <div className="footer-section-contact-container">
          <div className="footer-section-contact-heading">Follow us at:</div>
          <div className="footer-section-contact-subheading">
            <a
              href="https://www.facebook.com/ecelliitr"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-section-contact-link"
            >
              <img
                src={facebookLogo}
                className="footer-section-contact-logo"
                alt=""
              />
            </a>
            <a
              href="https://www.instagram.com/ecelliitr/"
              target="_blank"
              className="footer-section-contact-link"
              rel="noopener noreferrer"
            >
              <img
                src={instaLogo}
                className="footer-section-contact-logo"
                alt=""
              />
            </a>
            <a
              className="footer-section-contact-link"
              href="https://www.youtube.com/channel/UCf1py66Ov1easJAswwjxQZw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={youtubeLogo}
                className="footer-section-contact-logo"
                alt=""
              />
            </a>
            <a
              className="footer-section-contact-link"
              href="https://twitter.com/EDC_IITRoorkee"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={twitterLogo}
                className="footer-section-contact-logo"
                alt=""
              />
            </a>
            <a
              className="footer-section-contact-link"
              href="https://www.linkedin.com/company/esummit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedinLogo}
                className="footer-section-contact-logo"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
