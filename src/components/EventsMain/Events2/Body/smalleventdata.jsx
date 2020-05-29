import React, { Component } from 'react'
import { BASE_URL } from '../../../../utils/urls'
import parse from 'html-react-parser'
/* eslint-disable react/prop-types */

export default class SmallEventData extends Component {
  render() {
    return (
      <React.Fragment>
        <p className="content topic">
          {this.props.data && this.props.data.heading}
        </p>

        {this.props.data.para === 'yes' ? (
          <p className="content">
            {this.props.data && parse(this.props.data.paragraph)}
          </p>
        ) : null}

        {this.props.data.bullets === 'no' &&
        this.props.data.array === 'no' &&
        this.props.data.speaker_2.length === 0 ? (
          <>
            <br />
            <br />
          </>
        ) : null}
        {this.props.data && this.props.data.bullets === 'yes' ? (
          <ul>
            {this.props.data &&
              this.props.data.bullets_data &&
              this.props.data.bullets_data.map((e, index) => (
                <ul  key={index} style={{listStyleType:"disc"}}>
                <li className="list-item perk-about">
                  {e.data}
                </li>
                </ul>
              ))}
          </ul>
        ) : null}
        {this.props.data && this.props.data.array === 'yes' ? (
          <div className="panel-list-card-container">
            {this.props.data &&
              this.props.data.array_data &&
              this.props.data.array_data.map((e, index) => (
                <div key={index} className="panel-list-card">
                  <div
                    className="suignite-panelists-img1"
                    style={{
                      backgroundImage: `url(${BASE_URL + e.photo})`
                    }}
                  ></div>
                  <div className="panel-list-card-content">
                    <div className="panel-list-card-heading">{e.name}</div>
                    <div className="panel-list-card-subheading">
                      {e.designation}, {e.companay_name}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        ) : null}
        {this.props.data && this.props.data.speaker_2 !== ''
          ? this.props.data.speaker_2.map((speaker, index) => (
              <div key={index} className="suignite-guestlecture-child-parent">
                {console.log(speaker, 'speaker')}
                <div
                  className="suignite-guestlecture-child1 back-jaipur-second"
                  style={{
                    backgroundImage: `url(${BASE_URL + speaker.photo})`
                  }}
                ></div>

                <div className="guest-list-card-content">
                  <div className="guest-list-card-heading">{speaker.name}</div>
                  <div className="guest-list-card-subheading">
                    {speaker.designation}, {speaker.companay_name}
                  </div>
                  <div className="guest-list-card-heading">
                    Topic : {speaker.topic}
                  </div>
                  <div className="guest-list-card-subheading">
                    {speaker.description}
                  </div>
                </div>
              </div>
            ))
          : null}
      </React.Fragment>
    )
  }
}

/* eslint-disable react/prop-types */
