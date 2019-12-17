import React, { Component } from 'react'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import Viewprofile from './Profile/profile'
import LeaderBoard from './Sidenavbar'
import CATaskBoard from './catask'
// import CAOffers from './payment'
// import CAPayment from './payment/paymentwithoutworkshop'
// import CAcontingent from './payment/paymentwithworkshop'//edit afterwards
import CAInvite from './cainvite'
import CALeader from './caleader'
import CAnewcontigent from './Contigent/cacontigent'
import CAevents from './events'
// import { BASE_URL } from  './../../../../utils/urls'
import axios from 'axios'
import ComingSoon from '../js/Comingsoon'

/* eslint-disable react/prop-types */

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { enter } = this.state
    return (
      <div>
        <Switch>
          <React.Fragment>
            <Route path="/dashboard" component={LeaderBoard} />
            <Route
              exact
              path="/dashboard/Viewprofile"
              component={Viewprofile}
            />
            <Route exact path="/dashboard/task" component={CATaskBoard} />
            {/* <Route exact path="/dashboard/offers" component={CAOffers} /> */}
            {/* <Route path="/dashboard/payment" render={() => <CAPayment {...this.props} />} /> */}
            <Route path="/dashboard/payment" component={ComingSoon} />

            <Route exact path="/dashboard/invite" component={CAInvite} />
            <Route exact path="/dashboard/leader" component={CALeader} />
            <Route
              exact
              path="/dashboard/contingent"
              component={CAnewcontigent}
            />
            <Route exact path="/dashboard/events" component={CAevents} />
          </React.Fragment>
        </Switch>
      </div>
      // </Router>
    )
  }
}

export default App
/* eslint-disable react/prop-types */
