import React, { Component } from 'react'
import previousSpeakersHeading from '../../../assets/previous-speakers.svg'
import kamalCard from '../../../assets/kamal.png'
import ajayCard from '../../../assets/ajay.png'
import samironCard from '../../../assets/samiron.png'
import tarunCard from '../../../assets/tarun.png'
import gulzarCard from '../../../assets/gulzar.png'
import sharadCard from '../../../assets/sharad.png'
class PreviousSpeakers extends Component {
  render() {
    return (
      <div className="previous-speakers-section-container">
        <img
          src={previousSpeakersHeading}
          alt=""
          className="section-image-heading"
        />
        <div className="previous-speakers-section-card-container">
          <div className="previous-speakers-section-card">
            <img
              src={kamalCard}
              alt=""
              className="previous-speakers-section-card-image"
            />
            <div className="previous-speakers-section-card-content">
              <div className="previous-speakers-section-card-heading">
                Kamal Bali
              </div>
              <div className="previous-speakers-section-card-subheading">
                CEO & MD, Volvo India
              </div>
            </div>
          </div>
          <div className="previous-speakers-section-card">
            <img
              src={ajayCard}
              alt=""
              className="previous-speakers-section-card-image"
            />
            <div className="previous-speakers-section-card-content">
              <div className="previous-speakers-section-card-heading">
                Ajay Prakash Sawhney
              </div>
              <div className="previous-speakers-section-card-subheading">
                Secretary Meity
              </div>
            </div>
          </div>
          <div className="previous-speakers-section-card">
            <img
              src={samironCard}
              alt=""
              className="previous-speakers-section-card-image"
            />
            <div className="previous-speakers-section-card-content">
              <div className="previous-speakers-section-card-heading">
                Samiron Ghoshal
              </div>
              <div className="previous-speakers-section-card-subheading">
                Managing Partner, IBM GBS
              </div>
            </div>
          </div>
          <div className="previous-speakers-section-card">
            <img
              src={tarunCard}
              alt=""
              className="previous-speakers-section-card-image"
            />
            <div className="previous-speakers-section-card-content">
              <div className="previous-speakers-section-card-heading">
                Tarun Katiyal
              </div>
              <div className="previous-speakers-section-card-subheading">
                CEO, ZEE5
              </div>
            </div>
          </div>
          <div className="previous-speakers-section-card">
            <img
              src={gulzarCard}
              alt=""
              className="previous-speakers-section-card-image"
            />
            <div className="previous-speakers-section-card-content">
              <div className="previous-speakers-section-card-heading">
                Gulzar Azad
              </div>
              <div className="previous-speakers-section-card-subheading">
                Country Head, Google India
              </div>
            </div>
          </div>
          <div className="previous-speakers-section-card">
            <img
              src={sharadCard}
              alt=""
              className="previous-speakers-section-card-image"
            />
            <div className="previous-speakers-section-card-content">
              <div className="previous-speakers-section-card-heading">
                Sharad Sagar
              </div>
              <div className="previous-speakers-section-card-subheading">
                CEO, Dextrity Global
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PreviousSpeakers
