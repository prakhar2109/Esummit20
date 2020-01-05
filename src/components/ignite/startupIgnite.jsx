import React, { Component } from 'react'
import Panel from './ignitePanel/panel'
import Guest from './igniteGuest/guest'
import WitBid from './igniteWitbid/witbid'
import ProblemStatement from './igniteProblem/problem'
import Format from './igniteFormat/format'
import Rules from './igniteRules/rules'
import Eligibility from './igniteEligibility/eligibility'
import Prizes from './ignitePrizes/prizes'
import Partners from '../eventscomponent/partner/partner'
import Faqlist from '../eventscomponent/faqs/index'
import EventCoordinator from '../eventscomponent/eventcordinator/eventCord'
import Header from './igniteHeader/header'

import Tides from '../eventscomponent/partner/assets/tides.png'
import Boudhik from '../eventscomponent/partner/assets/boudhik_ventures.png'
import ThousandX from '../eventscomponent/partner/assets/100X_VC.png'
import Ah from '../eventscomponent/partner/assets/ah_ventures.png'
import Nexus from '../eventscomponent/partner/assets/nexus_venture.png'
import Oyo from '../eventscomponent/partner/assets/oyo.png'
import Kolkata from '../eventscomponent/partner/assets/kolkata_ventures.jpg'
import Marwari from '../eventscomponent/partner/assets/marwari_catalysts.png'
import AWP from '../eventscomponent/partner/assets/amazing_worksspaces.png'
import HunchCircle from '../eventscomponent/partner/assets/hunch_circle.png'

class StartupIgnite extends Component {
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
          logo: Oyo,
          name: 'Oyo Ventures'
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
          logo: AWP,
          name: 'Amazing Workspaces'
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

  render() {
    return (
      <div className="startupIgnite">
        <Header />
        <Panel />
        <Guest />
        <WitBid />
        <ProblemStatement />
        <Format />
        <Rules />
        <Eligibility />
        <Prizes />
        <Partners partners={this.state.partnersList} />
        <Faqlist />
        <EventCoordinator coordinatorInfo={this.state.coordinatorInfo} />
      </div>
    )
  }
}

export default StartupIgnite
