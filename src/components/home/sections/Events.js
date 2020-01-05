import React, { Component } from 'react'
import eventHeadingBackground from '../../../assets/events-heading-background.svg'
import ideastormCard from '../../../assets/ideastorm.png'
import productathonCard from '../../../assets/productathon.png'
import investorCard from '../../../assets/investor.png'
import caseStudyCard from '../../../assets/case-study.png'
import conclaveCard from '../../../assets/conclave.png'
import eConferenceCard from '../../../assets/e-conference.png'
import iPitchCard from '../../../assets/ipitch.png'
import leadershipCard from '../../../assets/leadership.png'
import meetupCard from '../../../assets/meetups.png'
import onSpotCard from '../../../assets/on-spot.png'
import onlineCard from '../../../assets/online.png'
import recreationalNightCard from '../../../assets/recreational.png'
import schoolEventsCard from '../../../assets/school.png'
import startupCard from '../../../assets/startup.png'
import workshopsCard from '../../../assets/workshops.png'
class Events extends Component {
  render() {
    return (
      <div className="home-section-event-container">
        <div className="section-image-heading-container">
          <div className="section-image-heading">EVENTS</div>
          <img
            src={eventHeadingBackground}
            className="section-image-heading-background"
            alt=""
          />
        </div>
        <div className="home-section-event-card-container">
          <div className="home-section-event-card">
            <div className="home-section-event-card-background-tint" />
            <img
              src={ideastormCard}
              className="home-section-event-card-background"
              alt=""
            />
            <div className="home-section-event-card-heading">Ideastorm</div>
          </div>
          <div className="home-section-event-card">
            <div className="home-section-event-card-background-tint" />
            <img
              src={productathonCard}
              className="home-section-event-card-background"
              alt=""
            />
            <div className="home-section-event-card-heading">Productathon</div>
          </div>
          <div className="home-section-event-card">
            <div className="home-section-event-card-background-tint" />
            <img
              src={investorCard}
              className="home-section-event-card-background"
              alt=""
            />
            <div className="home-section-event-card-heading">
              Investor’s Vista
            </div>
          </div>
          <div className="home-section-event-card">
            <div className="home-section-event-card-background-tint" />
            <img
              src={startupCard}
              className="home-section-event-card-background"
              alt=""
            />
            <div className="home-section-event-card-heading">Startup Expo</div>
          </div>
          <div className="home-section-event-card">
            <div className="home-section-event-card-background-tint" />
            <img
              src={conclaveCard}
              className="home-section-event-card-background"
              alt=""
            />
            <div className="home-section-event-card-heading">Conclaves</div>
          </div>
          <div className="home-section-event-card">
            <div className="home-section-event-card-background-tint" />
            <img
              src={leadershipCard}
              className="home-section-event-card-background"
              alt=""
            />
            <div className="home-section-event-card-heading">
              Leadership Series
            </div>
          </div>
        </div>
        <a href="#" className="section-button">
          <button>view all events</button>
        </a>
      </div>
    )
  }
}

export default Events
