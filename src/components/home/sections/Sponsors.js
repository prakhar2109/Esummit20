import React, { Component } from 'react'
import sponsorsHeadingBackground from '../../../assets/sponsors-heading-background.svg'
import kamalCard from '../../../assets/kamal.png'
import ajayCard from '../../../assets/ajay.png'
import samironCard from '../../../assets/samiron.png'
import tarunCard from '../../../assets/tarun.png'
import gulzarCard from '../../../assets/gulzar.png'
import sharadCard from '../../../assets/sharad.png'
class Sponsors extends Component {
  render() {
    return (
      <div className="sponsors-section-container">
        <div className="section-image-heading-container">
          <div className="section-image-heading">SPONSORS</div>
          <img
            src={sponsorsHeadingBackground}
            className="section-image-heading-background"
            id="section-image-heading-background-sponsor"
            alt=""
          />
        </div>
        <div className="sponsors-section-card-container">
          <div className="sponsors-section-card">
            <img src="" alt="" className="sponsors-section-card-image" />
            <div className="sponsors-section-card-content">
              <div className="sponsors-section-card-heading">Kamal Bali</div>
            </div>
          </div>
          <div className="sponsors-section-card">
            <img src="" alt="" className="sponsors-section-card-image" />
            <div className="sponsors-section-card-content">
              <div className="sponsors-section-card-heading">
                Ajay Prakash Sawhney
              </div>
            </div>
          </div>
          <div className="sponsors-section-card">
            <img src="" alt="" className="sponsors-section-card-image" />
            <div className="sponsors-section-card-content">
              <div className="sponsors-section-card-heading">
                Samiron Ghoshal
              </div>
            </div>
          </div>
          <div className="sponsors-section-card">
            <img src="" alt="" className="sponsors-section-card-image" />
            <div className="sponsors-section-card-content">
              <div className="sponsors-section-card-heading">Tarun Katiyal</div>
            </div>
          </div>
          <div className="sponsors-section-card">
            <img src="" alt="" className="sponsors-section-card-image" />
            <div className="sponsors-section-card-content">
              <div className="sponsors-section-card-heading">Gulzar Azad</div>
            </div>
          </div>
          <div className="sponsors-section-card">
            <img src="" alt="" className="sponsors-section-card-image" />
            <div className="sponsors-section-card-content">
              <div className="sponsors-section-card-heading">Sharad Sagar</div>
            </div>
          </div>
        </div>
        <a href="#" className="section-button">
          <button>view all sponsors</button>
        </a>
      </div>
    )
  }
}

export default Sponsors
