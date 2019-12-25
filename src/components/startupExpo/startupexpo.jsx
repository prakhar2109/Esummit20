import React, { Component } from 'react'
import './startupexpo.css'
import Eligibility from './Eligibility/eligibility'
import Rules from './rules/rules'
import Header from './Header/header'
import Timeline from './Timeline/timeline'
import Faqlist from '../eventscomponent/faqs/index.js'
import PropTypes from 'prop-types'
import EventPerks from '../eventscomponent/perks/singlePerk.js'
import Partners from '../eventscomponent/partner/partner'
import Partner1photo from '../eventscomponent/partner/assets/partner1.png'
import Partner2photo from '../eventscomponent/partner/assets/partner2.png'
import Partner3photo from '../eventscomponent/partner/assets/partner3.png'
import EventCoordinator from '../eventscomponent/eventcordinator/eventCord'
export default class StartupExpo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      partnersList: [
        {
          id: 1,
          logo: Partner1photo,
          name: 'Merchandise'
        },
        {
          id: 2,
          logo: Partner2photo,
          name: 'Merchandise'
        },
        {
          id: 3,
          logo: Partner3photo,
          name: 'Merchandise'
        },
        {
          id: 4,
          logo: Partner1photo,
          name: 'Merchandise'
        }
      ],
      coordinatorInfo: [
        {
          id: 1,
          name: 'Amritha Muthuraman',
          email: 'amritha@gmail.com',
          phone: ' +91 8888 888 888 '
        },
        {
          id: 2,
          name: 'Amritha Muthuraman',
          email: 'amritha@gmail.com',
          phone: ' +91 8888 888 888 '
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
