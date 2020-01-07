import React, { Component } from 'react'
import sponsorsHeadingBackground from '../../../../assets/sponsors-heading-background.svg'
// import kamalCard from '../../../../assets/kamal.png'
// import ajayCard from '../../../assets/ajay.png'
// import samironCard from '../../../assets/samiron.png'
// import tarunCard from '../../../assets/tarun.png'
// import gulzarCard from '../../../assets/gulzar.png'
// import sharadCard from '../../../assets/sharad.png'
import { BASE_URL } from "../../../../utils/urls"

import './partners.css'
/* eslint-disable react/prop-types */

class Partners extends Component {
  componentDidMount(){
    console.log(this.props.data)
  }
  render() {
    return (
      <div className="sponsors-section-container events-partners-parent">
        {/* <div className="section-image-heading-container">
          <div className="section-image-heading">SPONSORS</div>
          <img
            src={sponsorsHeadingBackground}
            className="section-image-heading-background"
            alt=""
          />
        </div> */}
        <div className="events-partner-head">Partners</div>
        <div className="sponsors-section-card-container">
          {this.props.data.map((partner,index)=>
            <div className="sponsors-section-card" key={index}>
            <img src={BASE_URL+partner.logo} alt="" className="sponsors-section-card-image" />
            <div className="sponsors-section-card-content">
              <div className="sponsors-section-card-heading">{partner.name}</div>
            </div>
          </div>
          
          )}
          
          {/* <div className="sponsors-section-card">
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
          </div> */}
        </div>
      </div>
    )
  }
}

export default Partners
/* eslint-disable react/prop-types */
