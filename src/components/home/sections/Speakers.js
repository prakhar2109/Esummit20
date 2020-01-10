import React, { Component } from 'react'

import speakersHeadingBackground from '../../../assets/speakers-heading-background.svg'
import karthik from '../../../assets/speakers/karthik-reddy.jpg'
import coming from '../../../assets/speakers/download.png'
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
        </div>
        <div className="speakers-section-card-container">
          <div className="speakers-section-card">
            <img
              src={karthik}
              alt=""
              className="speakers-section-card-image"
            />
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
              src={coming}
              alt=""
              className="speakers-section-card-image"
            />
            <div className="speakers-section-card-content">
              <div className="speakers-section-card-heading">
                Coming Soon
              </div>
              <div className="speakers-section-card-subheading">
              </div>
            </div>
          </div>
        </div>
        <a href="speakers" className="section-button">
          <button>view all speakers</button>
        </a>
      </div>
    )
  }
}

export default Speakers
