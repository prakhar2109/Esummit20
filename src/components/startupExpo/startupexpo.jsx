import React, { Component } from 'react'
import './startupexpo.css'
import Eligibility from './startupExpoEligibility/eligibility'
import Rules from './startupExporules/rules'
import Header from './startupExpoHeader/header'
import Timeline from './startupExpoTimeline/timeline'
import Faqlist from '../eventscomponent/faqs/index.js'

import PropTypes from 'prop-types'
import EventPerks from '../eventscomponent/perks/singlePerk.js'
import Partners from '../eventscomponent/partner/partner'
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

import EventCoordinator from '../eventscomponent/eventcordinator/eventCord'
export default class StartupExpo extends Component {
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
          name: 'Murari Kumar',
          email: 'm_Kumar@ts.iitr.ac.in',
          phone: ' +91 8826 287 678'
        
        },
        {
          id: 2,
          name: 'Maanav Seth',
          email: 'manuseth30@gmail.com',
          phone: ' +91 8604 074 120 '
        }
      ]
    }
  }
  render() {
    return (
      <div className="startupexpo">
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

StartupExpo.propTypes = {
  match: PropTypes.string
}
