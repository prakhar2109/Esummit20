import React, { Component } from 'react'
// import Vector from '../Common/img/headVector.png';
import '../Common/ignite.css'
import { BASE_URL } from '../../../../utils/urls'
/* eslint-disable react/prop-types */
import ignite from '../../../ignite/igniteHeader/assets/ignite.svg'

export default class HeaderEvents2 extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    console.log(this.props.data, 'rahul')
    return (
      <div className="igniteheaderSection">
        <div className="igniteHeader-image">
          {/* <img src={BASE_URL + this.props.data.card_image} alt="" /> */}
        </div>

        <p>{this.props.data.title}</p>

        <p>{this.props.data.short_description}</p>

        <br />
        <p>{this.props.data.long_description}</p>
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
