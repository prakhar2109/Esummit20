import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import speakersHeadingBackground from '../../../assets/speakers-heading-background.svg'
import kamalCard from '../../../assets/kamal.png'
import ajayCard from '../../../assets/ajay.png'
import samironCard from '../../../assets/samiron.png'
import tarunCard from '../../../assets/tarun.png'
import harshCard from '../../../assets/speakers/harsh-hande.jpeg'
import gulzarCard from '../../../assets/gulzar.png'
import sharadCard from '../../../assets/sharad.png'
import arrow from '../../../assets/arrow.svg'
import karthik from '../../../assets/speakers/karthik-reddy.jpg'
import coming from '../../../assets/speakers/download.jpeg'
import abhishek from '../../../assets/speakers/abhishek-prabhuda.jpeg'

import './speakers.css'

class Speakers extends Component {
  render() {
    return (
      <div className="speakers-section-container">
        <div className="section-image-heading-container">
          <div className="section-image-heading">SPEAKERS</div>
          <img
            src={speakersHeadingBackground}
            className="section-image-heading-background"
            id="section-image-heading-background-speaker"
            alt=""
          />
          <div className="section-horizontal-navigate-container">
            <img
              src={arrow}
              alt=""
              className="section-horizontal-navigate-arrow arrow-left"
            />
            <img
              src={arrow}
              alt=""
              className="section-horizontal-navigate-arrow arrow-right"
            />
          </div>
        </div>
        <div
          className="speakers-section-card-container"
          data-scroll="horizontal"
        >
          <div className="speakers-section-card">
            <img src={karthik} alt="" className="speakers-section-card-image" />
            <div className="speakers-section-card-content">
              <div className="speakers-section-card-heading">Karthik Reddy</div>
              <div className="speakers-section-card-subheading">
                Blume Ventures
              </div>
            </div>
          </div>
          <div className="speakers-section-card">
            <img
              src={abhishek}
              alt=""
              className="speakers-section-card-image"
            />
            <div className="speakers-section-card-content">
              <div className="speakers-section-card-heading">
                Abhishek Prabhuda
              </div>
              <div className="speakers-section-card-subheading">
                Co-Head at Delhivery
              </div>
            </div>
          </div>
          <div className="speakers-section-card">
            <img
              src={harshCard}
              alt=""
              className="speakers-section-card-image"
            />
            <div className="speakers-section-card-content">
              <div className="speakers-section-card-heading">Harish Hande</div>
              <div className="speakers-section-card-subheading">
                CEO and Founder, SELCO India
              </div>
            </div>
          </div>
          {/* <div className="speakers-section-card">
            <img src={coming} alt="" className="speakers-section-card-image" />
            <div className="speakers-section-card-content">
              <div className="speakers-section-card-heading">Coming Soon</div>
              <div className="speakers-section-card-subheading"></div>
            </div>
          </div> */}
        </div>
        <Link to="/speakers" className="section-button">
          <button>view all speakers</button>
        </Link>
      </div>
    )
  }
}

export default Speakers
