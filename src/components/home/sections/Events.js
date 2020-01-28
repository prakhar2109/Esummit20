import React, { Component } from 'react'
import eventHeadingBackground from '../../../assets/events-heading-background.svg'
import ideastormCard from '../../../assets/Ideastorm-main.png'
import softwareProductathonCard from '../../../assets/productathon-main.png'
import hardwareProductathonCard from '../../../assets/hardware productathon-main.png'
import investorCard from '../../../assets/Vista-main.png'
import caseStudyCard from '../../../assets/case-study.png'
import conclaveCard from '../../../assets/Conclaves-main.png'
import eConferenceCard from '../../../assets/e-conference.png'
import iPitchCard from '../../../assets/ipitch.png'
import leadershipCard from '../../../assets/leadership.png'
import meetupCard from '../../../assets/meetups.png'
import onSpotCard from '../../../assets/on-spot.png'
import onlineCard from '../../../assets/online.png'
import recreationalNightCard from '../../../assets/recreational.png'
import schoolEventsCard from '../../../assets/school.png'
import startupCard from '../../../assets/Expo-main.png'
import workshopsCard from '../../../assets/workshops.png'
import { Link } from 'react-router-dom'
class Events extends Component {
  render() {
    return (
      <div className="home-section-event-container">
        <div className="section-image-heading-container">
          <div className="section-image-heading">EVENTS</div>
          <img
            src={eventHeadingBackground}
            className="section-image-heading-background"
            id="section-image-heading-background-events"
            alt=""
            // style={{ width: 'auto' }}
          />
        </div>
        <div className="home-section-event-card-container">
        <Link
              to="/events/Ideastorm"
              className="home-section-event-card-link"
            >
          <div className="home-section-event-card">
           
            <div className="home-section-event-card-background-tint1" />
            <div className="home-section-event-card-heading">
              Ideastorm
            </div>
            
          </div>
        </Link>
          <div className="home-section-event-card">
            <Link
              to="/events/Softwareproductathon"
              className="home-section-event-card-link"
            />
            <div className="home-section-event-card-background-tint2" />

            <div className="home-section-event-card-heading">
              Software Productathon
            </div>
          </div>

          <div className="home-section-event-card">
            <Link
              to="/events/Hardwareproductathon"
              className="home-section-event-card-link"
            />
            <div className="home-section-event-card-background-tint3" />

            <div className="home-section-event-card-heading">
              Hardware Productathon
            </div>
          </div>
          <div className="home-section-event-card">
            <Link
              to="/events/Investorvista"
              className="home-section-event-card-link"
            />
            <div className="home-section-event-card-background-tint4" />

            <div className="home-section-event-card-heading">
              Investor’s Vista
            </div>
          </div>
          <div className="home-section-event-card">
            <Link
              to="/events/Startupexpo"
              className="home-section-event-card-link"
            />
            <div className="home-section-event-card-background-tint5" />

            <div className="home-section-event-card-heading">
              Startup Expo 2.0
            </div>
          </div>
          
          <div className="home-section-event-card">
          <Link
              to="/events/Conclaves"
              className="home-section-event-card-link"
            />
            <div className="home-section-event-card-background-tint6" />
            
            <div className="home-section-event-card-heading">Conclaves
            </div>
          </div>
          {/* <div className="home-section-event-card">
            <div className="home-section-event-card-background-tint" />
            <img
              src={leadershipCard}
              className="home-section-event-card-background"
              alt=""
            />
            <div className="home-section-event-card-heading">
              Leadership Series
            </div>
          </div> */}
        </div>
        <Link to="/events" className="section-button">
          <button>view all events</button>
        </Link>
      </div>
    )
  }
}

export default Events
