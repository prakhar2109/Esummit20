import React, { Component } from 'react'
import eventHeadingBackground from '../../../../assets/events-heading-background.svg'
import ideastormCard from '../../../../assets/Ideastorm-main.png'
import softwareProductathonCard from '../../../../assets/productathon-main.png'
import hardwareProductathonCard from '../../../../assets/hardware productathon-main.png'
import investorCard from '../../../../assets/Vista-main.png'
import caseStudyCard from '../../../../assets/case study-main.png'
import conclaveCard from '../../../../assets/Conclaves-main.png'
import eConferenceCard from '../../../../assets/econ-main.png'
import iPitchCard from '../../../../assets/ipitch.png'
import leadershipCard from '../../../../assets/Leadership Series-main.png'
import meetupCard from '../../../../assets/meetups.png'
import onSpotCard from '../../../../assets/on-spot.png'
import onlineCard from '../../../../assets/online.png'
import recreationalNightCard from '../../../../assets/recreational.png'
import schoolEventsCard from '../../../../assets/nurture entre-main.png'
import startupCard from '../../../../assets/Expo-main.png'
import workshopsCard from '../../../../assets/workshops.png'
import { Link } from 'react-router-dom'

import './eventsAll.css'
class Events extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div id="home-section-event-container-main">
        <div className="home-section-event-container ">
          <div
            className="section-image-heading-container"
            id="section-image-heading-container-main"
          >
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
            <Link to="/events/Ideastorm">
              <div className="home-section-event-card">
                <div className="home-section-event-card-background-tint1" />
                
                <div className="home-section-event-card-heading">Ideastorm</div>
              </div>
            </Link>
            <Link to="/events/Softwareproductathon">
              <div className="home-section-event-card">
                <div className="home-section-event-card-background-tint2" />
                
                <div className="home-section-event-card-heading">
                  Software Productathon
                </div>
              </div>
            </Link>
            <Link to="/events/Hardwareproductathon">
              <div className="home-section-event-card">
                <div className="home-section-event-card-background-tint3" />
                
                <div className="home-section-event-card-heading">
                  Hardware Productathon
                </div>
              </div>
            </Link>
            <Link to="/events/Investorvista">
              <div className="home-section-event-card">
                <div className="home-section-event-card-background-tint4" />
                
                <div className="home-section-event-card-heading">
                  Investor’s Vista
                </div>
              </div>
            </Link>
            <Link to="/events/Startupexpo">
              <div className="home-section-event-card">
                <div className="home-section-event-card-background-tint5" />
                
                <div className="home-section-event-card-heading">
                  Startup Expo
                </div>
              </div>
            </Link>

            <div className="home-section-event-card">
              <div className="home-section-event-card-background-tint6" />
             
              <div className="home-section-event-card-heading">Conclaves</div>
            </div>

            <div className="home-section-event-card">
              <div className="home-section-event-card-background-tint7" />
              
              <div className="home-section-event-card-heading">
                Leadership Series
              </div>
            </div>
            <Link to="/events/E-Conference">
              <div className="home-section-event-card">
                <div className="home-section-event-card-background-tint8" />
                
                <div className="home-section-event-card-heading">
                  E-Conference
                </div>
              </div>
            </Link>
            <Link to="/events/Nurture-Entrepreneurship">
              <div className="home-section-event-card">
                <div className="home-section-event-card-background-tint9" />
               
                <div className="home-section-event-card-heading">
                  Nurture Entrepreneurship
                </div>
              </div>
            </Link>
            <Link to="/events/Casechallenge">
              <div className="home-section-event-card">
                <div className="home-section-event-card-background-tint10" />
              
                <div className="home-section-event-card-heading">
                  Case Challenge
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Events
