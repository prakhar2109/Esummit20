import React, { Component } from 'react'
import cardImage from '../../../assets/kamal.png'
import './guest.css'
import guestlecture from '../igniteHeader/assets/guestlecture.svg'

class Guest extends Component {
  render() {
    return (
      <div className="guest-container">
        <div className="guest-lecture-heading-container">
          <img
            className="guest-lecture-heading-image"
            src={guestlecture}
            alt=""
          />
          <div className="guest-lecture-heading">GUEST LECTURE</div>
        </div>
        <div className="guest-format">
          <div className="guest-list-card">
            <img src={cardImage} alt="" className="guest-list-card-image" />
            <div className="guest-list-card-content">
              <div className="guest-list-card-heading">SAURABH KOCHHAR</div>
              <div className="guest-list-card-subheading">
                CEO, Company Name
              </div>
              <div className="guest-list-card-heading">
                Topic: Make in India
              </div>
              <div className="guest-list-card-subheading">
                A brisk description about what does the topic consist of and its
                benefits to our country andwhat will sourabh kochar do to make
                India great.
              </div>
            </div>
          </div>
          <div className="guest-list-card">
            <img src={cardImage} alt="" className="guest-list-card-image" />
            <div className="guest-list-card-content">
              <div className="guest-list-card-heading">SAURABH KOCHHAR</div>
              <div className="guest-list-card-subheading">
                CEO, Company Name
              </div>
              <div className="guest-list-card-heading">
                Topic: Make in India
              </div>
              <div className="guest-list-card-subheading">
                A brisk description about what does the topic consist of and its
                benefits to our country andwhat will sourabh kochar do to make
                India great.
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Guest
