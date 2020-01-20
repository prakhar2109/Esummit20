import React, { Component } from 'react'
import linkdImage from '../../../../assets/linkd.svg'
import cardImage from '../../../../assets/speakers/harsh-hande.jpeg'
import { BASE_URL } from '../../../../utils/urls'

/* eslint-disable react/prop-types */

export default class TeamCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: '',
      faq: ''
    }
  }

  render() {
    return (
        <div className="team-card">
          <img src={BASE_URL+this.props.image} alt="" className="team-card-image" />
          <div className="team-card-content">
            <div className="team-card-heading">{this.props.name}</div>
            <div className="team-card-subheading">
              {this.props.position}
            </div>
            <div className="team-card-subheading">
              +91 {this.props.phone}
            </div>
            <div className="team-card-linkd">
              <a href={this.props.linkd}><img src={linkdImage} alt="" className="card-linkd-icon" /></a>
            </div>
        </div>
      </div>
    )
  }
}
/* eslint-disable react/prop-types */
