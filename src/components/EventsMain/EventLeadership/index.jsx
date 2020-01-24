/* eslint-disable react/prop-types */
import React, { Component } from 'react'
// import '../Common/scrollanimation.css'
import '../Events/Common/scrollanimation.css'
import './style.css'
import karthik from '../../../assets/speakers/karthik-reddy.jpg'
import harshCard from '../../../assets/speakers/harsh-hande.jpeg'
import abhishek from '../../../assets/speakers/abhishek-prabhuda.jpeg'
import BackgroundImage from '../../../assets/leadershipBack.png'
import speakersHeadingBackground from '../../../assets/speakers-heading-background.svg'
function SpeakerCard(props) {
  return (
    <div className="leadership-speaker">
      <div className="leadership-speaker-image">
        <img
          src={props.SpeakerImage}
          className="leadership-speaker-image-each"
          alt="LeaderShip Speaker Image"
        />
      </div>
      <div className="leadership-speaker-details">
        <div className="leadership-speaker-name">{props.SpeakerName}</div>
        <div className="leadership-speaker-designation">
          {props.speakerDesignation}
        </div>
        <div className="leadership-speaker-date-time">
          {props.date}{' '}
          <span className="leadership-speaker-time">{props.time}</span>
        </div>
        <div className="leadership-speaker-topic">{props.topic}</div>
      </div>
    </div>
  )
}

class LeadershipSummit extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <div className="eventDashboard-background-image">
          <div className="ideastormHeaderSection">
            <p> Leadership Summit</p>

            <p>This is a generic tagline !</p>

            <br />
            <br />
            <br />

            <p>
              Some Description mentioning big words lianufhrn ouienvginhjvr
              inwetvnluovrgjvbi donfsklcijhv newnvhnrwigwehciv ehugcnhi kj l;j
              kcnhweuihcgej rkl nkwe kvniwenvgi jnrhklvmwklhrv f kns hfdv9
              gjkasr ihnadlkvunhg597
            </p>
          </div>
        </div>
        <div className="speaker-page-container">
          <div className="section-page-image-heading-container">
            <div className="section-page-image-heading">SPEAKERS</div>
            <img
              src={speakersHeadingBackground}
              className="section-image-heading-background"
              id="section-image-heading-background-speaker"
              alt=""
            />
          </div>
          <div className="leadership-speakers">
            <SpeakerCard
              SpeakerImage={karthik}
              SpeakerName="Karthik Reddy"
              speakerDesignation="Founder And Managing Partner,Blume Ventures"
              date=" DATE: 1 February 2020"
              time="TIME: 10.30 AM"
              topic="lfsdn ikjshvlnisfnios njsa ;n asdkinasv lkjas dvkasdv ;lksav "
            />
            <SpeakerCard
              SpeakerImage={abhishek}
              SpeakerName="Abhishek Prabudha"
              speakerDesignation="Founder And Managing Partner,Blume Ventures"
              date=" DATE: 1 February 2020"
              time="TIME: 10.30 AM"
              topic="lfsdn ikjshvlnisfnios njsa ;n asdkinasv lkjas dvkasdv ;lksav "
            />
            <SpeakerCard
              SpeakerImage={harshCard}
              SpeakerName="Harsh Hande"
              speakerDesignation="Founder And Managing Partner,Blume Ventures"
              date=" DATE: 1 February 2020"
              time="TIME: 10.30 AM"
              topic="lfsdn ikjshvlnisfnios njsa ;n asdkinasv lkjas dvkasdv ;lksav "
            />

          </div>
        </div>
      </div>
    )
  }
}

export default LeadershipSummit
