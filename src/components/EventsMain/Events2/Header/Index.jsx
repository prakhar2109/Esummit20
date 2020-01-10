import React, { Component } from 'react'
// import Vector from '../Common/img/headVector.png';
import '../Common/ignite.css'
import { BASE_URL } from '../../../../utils/urls'
/* eslint-disable react/prop-types */
import ignite from '../../../ignite/igniteHeader/assets/ignite.svg'

export default class HeaderEvents2 extends Component {
  render() {
    return (
      <div className="igniteHeaderSection">
        <div>
          <img src={ignite} alt="" />
        </div>

        <p>Startup Ignite</p>

        <p>Be a part of something bigger</p>

        <br />
        <p>
          Idea Storm is the annual business plan competition,conducted as a part
          of Entrepreneurship Summit, the flagship event of Entrepreneurship
          Cell IIT Roorkee. The best Ideas get mentorship from experienced
          entrepreneurs, cash rewards worth 2.5 lakhs and the impressive ones
          even have opportunity to raise funding from the VCs. Gear up to
          compete with the best minds of the country to prove your business
          acumen. This would be a perfect stage for you, If you want to turn
          your ideas into an entrepreneurial ventures
        </p>
      </div>
      // <div
      //   className="suignite-parent"
      //   style={{
      //     backgroundImage: `url(${BASE_URL + this.props.data.card_image})`
      //   }}
      // >
      //   <div className="suignite-parent-img"></div>
      //   <p>{this.props.data.title}</p>
      //   <p>{this.props.data.tagline}</p>
      //   <p>{this.props.data.long_description}</p>
      // </div>
    )
  }
}

/* eslint-disable react/prop-types */
