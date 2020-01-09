import React, { Component } from 'react'
import speakersHeadingBackground from '../../../assets/speakers-heading-background.svg'
import kamalCard from '../../../assets/kamal.png'
import ajayCard from '../../../assets/ajay.png'
import samironCard from '../../../assets/samiron.png'
import tarunCard from '../../../assets/tarun.png'
import gulzarCard from '../../../assets/gulzar.png'
import sharadCard from '../../../assets/sharad.png'
import arrow from '../../../assets/arrow.svg'
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
            <img
              src={kamalCard}
              alt=""
              className="speakers-section-card-image"
            />
            <div className="speakers-section-card-content">
              <div className="speakers-section-card-heading">Kamal Bali</div>
              <div className="speakers-section-card-subheading">
                CEO & MD, Volvo India
              </div>
            </div>
          </div>
          <div className="speakers-section-card">
            <img
              src={ajayCard}
              alt=""
              className="speakers-section-card-image"
            />
            <div className="speakers-section-card-content">
              <div className="speakers-section-card-heading">
                Ajay Prakash Sawhney
              </div>
              <div className="speakers-section-card-subheading">
                Secretary Meity
              </div>
            </div>
          </div>
          <div className="speakers-section-card">
            <img
              src={samironCard}
              alt=""
              className="speakers-section-card-image"
            />
            <div className="speakers-section-card-content">
              <div className="speakers-section-card-heading">
                Samiron Ghoshal
              </div>
              <div className="speakers-section-card-subheading">
                Managing Partner, IBM GBS
              </div>
            </div>
          </div>
          <div className="speakers-section-card">
            <img
              src={tarunCard}
              alt=""
              className="speakers-section-card-image"
            />
            <div className="speakers-section-card-content">
              <div className="speakers-section-card-heading">Tarun Katiyal</div>
              <div className="speakers-section-card-subheading">CEO, ZEE5</div>
            </div>
          </div>
          <div className="speakers-section-card">
            <img
              src={gulzarCard}
              alt=""
              className="speakers-section-card-image"
            />
            <div className="speakers-section-card-content">
              <div className="speakers-section-card-heading">Gulzar Azad</div>
              <div className="speakers-section-card-subheading">
                Country Head Of Connectivity, Google India
              </div>
            </div>
          </div>
          <div className="speakers-section-card">
            <img
              src={sharadCard}
              alt=""
              className="speakers-section-card-image"
            />
            <div className="speakers-section-card-content">
              <div className="speakers-section-card-heading">Sharad Sagar</div>
              <div className="speakers-section-card-subheading">
                CEO, Dextrity Global
              </div>
            </div>
          </div>
        </div>
        <a href="#" className="section-button">
          <button>view all speakers</button>
        </a>
      </div>
    )
  }
}

export default Speakers
