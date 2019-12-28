import React, { Component } from 'react'
import './ideastorm.css'
import Idea from './static/idea.png'
import jump from 'jump.js'
import Eligibility from './ideastormEligibility/eligibility'
import Rules from './ideastormRules/rules'
import Header from './ideastormHeader/header'
import Timeline from './ideastormTimeline/timeline'
import EventPerks from '../eventscomponent/perks/singlePerk.js'

import Faqlist from '../eventscomponent/faqs/index'
import Partners from '../eventscomponent/partner/partner'
import EventCoordinator from '../eventscomponent/eventcordinator/eventCord'
import Tides from "../eventscomponent/partner/assets/tides.png"
import Boudhik from "../eventscomponent/partner/assets/boudhik_ventures.png"
import ThousandX from "../eventscomponent/partner/assets/100X_VC.png"
import Ah from "../eventscomponent/partner/assets/ah_ventures.png"
import Nexus from "../eventscomponent/partner/assets/nexus_venture.png"
import Oyo from "../eventscomponent/partner/assets/oyo.png"
import Hq from "../eventscomponent/partner/assets/hqdefault.jpg"
import Zenfold from "../eventscomponent/partner/assets/zenfold.svg"
import Kolkata from "../eventscomponent/partner/assets/kolkata_ventures.jpg"
import Marwari  from "../eventscomponent/partner/assets/marwari_catalysts.png"
import AWP from "../eventscomponent/partner/assets/amazing_worksspaces.png"
import HunchCircle from "../eventscomponent/partner/assets/hunch_circle.png"
export class IdeaStorm extends Component {
  constructor(props) {
    super(props)
    this.state = {  
      partnersList: [
        {
          id: 1,
          logo: Tides,
          name: 'Tides'
        },
        {
          id: 2,
          logo: Boudhik,
          name: 'Boudhik Ventures'
        },
        {
          id: 3,
          logo: ThousandX,
          name: '100X VC'
        },
        {
          id: 4,
          logo: Ah,
          name: 'Ah! Ventures'
        },
        {
          id: 5,
          logo: AWP,
          name: 'Amazing Workspaces'
        },
        {
          id: 6,
          logo: HunchCircle,
          name: 'Hunch Circle'
        },
        {
          id: 7,
          logo: Kolkata,
          name: 'Kolkata Ventures'
        },
        {
          id: 8,
          logo: Marwari,
          name: 'Marwari Catalysts'
        },
        {
          id: 9,
          logo: Nexus,
          name: 'Nexus Venture Partners'
        },
        {
          id: 10,
          logo: Oyo,
          name: 'Oyo Ventures'
        }
      ],
      coordinatorInfo: [
        {
          id: 1,
          name: 'Bharat',
          email: 'nbharat@ch.iitr.ac.in',
          phone: ' +91 9121681948'
        
        },
        {
          id: 2,
          name: 'Pranay',
          email: 'pjain@ch.iitr.ac.in',
          phone: ' +91 8003427771 '
        }
      ]
    }
  }

  timeline = () => {
    jump('.timeline', { offset: -130 })
  }

  Rules = () => {
    jump('.Rules', { offset: -130 })
  }

  erks = () => {
    jump('.erks', { offset: -130 })
  }

  faq_idea = () => {
    jump('#faq', { offset: -0 })
  }

  coordinator = () => {
    jump('.coordinator', { offset: -130 })
  }

  eligiblity = () => {
    jump('.eligiblity', { offset: -130 })
  }
  register = () => {
    jump('.register', { offset: -130 })
  }
  jum = () => {
    jump('#timeline')
  }

  render() {
    return (
      <div className="ideastorm">
        {/* <Eventsheader /> */}

        {/* <div id="nav" className="header">
          <span>
            <img alt="IdeaStorm" src={Idea} />
          </span>

          <span className="head_array">
            <span onClick={this.timeline}>Timeline</span>

            <span onClick={this.Rules}>Rules</span>

            <span onClick={this.eligiblity}>Eligiblity</span>

            <span onClick={this.erks}>Perks</span>
            <span onClick={this.register}>Apply</span>
            <span onClick={this.faq_idea}>FAQs</span>

            <span onClick={this.coordinator}>Contact Us</span>
          </span>

          <span />
        </div> */}

        <Header />
        <Timeline {...this.props} />
        <Rules />
        <Eligibility />
        <EventPerks
          cashReward={true}
          mentorship={true}
          networkingSession={true}
          fundingOpportunity={true}
          mediaCoverage={true}
        />
        <Faqlist />
        <Partners partners={this.state.partnersList} />
        <EventCoordinator coordinatorInfo={this.state.coordinatorInfo} />
      </div>
    )
  }
}

export default IdeaStorm
