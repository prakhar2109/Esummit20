/* eslint-disable react/display-name */
import React, { Component } from 'react'

// import logo from './logo.svg'
import Loading from './assets/loading.gif'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import theme from './assets/theme.png'
import Success from './components/registration/popup/success/success.js'
import Loadable from 'react-loadable'
import Registration from './components/registration/index.js'
import Personaldetail from './components/registration/personal_details/personal_details.js'
// import Facebooklogin from './components/registration/account_setup/accountsetup.js'
import Profiletype from './components/registration/popup/profile_type/profile_type.js'
import Navbar from './components/navbar'
import Home from './components/home/Home.js'
import Footer from './components/footer'
import CampusAmbassador from './components/ca/CampusAmbassador'
import Sponsors from './components/sponsors/sponsors'
import './styles/main.scss'
// import Ideastorm from './components/IdeaStorm/ideastorm'
import Failuremessage from './components/registration/popup/failure/failure.js'
import DashboardIndex from './components/cadashboard/js/index'
// import StartupExpo from './components/startupExpo/startupexpo.jsx'
import StartupIgnite from './components/ignite/startupIgnite'
import Speakers from './components/speakers/speakers'
import Login from './components/login/Login'
import 'antd/dist/antd.css'
import NonCARegistration from './components/registration/Noncaregister/index'
import EventsMain from './components/EventsMain/index'
import Events from './components/home/sections/EventsAll/eventsAll'
import ForgotPassword from './components/forgot-password/forgot-password'
import SetNewPassword from './components/forgot-password/set-new-password'
import FAQs from './components/faq'
import LeadershipSummit from './components/EventsMain/EventLeadership'
import Team from './components/EventsMain/Events/teams/teams'
class HomeLanding extends Component {
  render() {
    return (
      <div>
        <Navbar {...this.props} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/campus-ambassador" component={CampusAmbassador} />
          <Route exact path="/sponsors" component={Sponsors} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/speakers" component={Speakers} />
          <Route path="/register" component={Profiletype} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/set-new-password/:uuid/" component={SetNewPassword} />
          <Route path="/ca-registration" component={Registration} />
          <Route path="/noncaregister" component={NonCARegistration} />
          <Route path="/faqs" component={FAQs} />
          <Route path="/team" component={Team} />
          <Route path="/personal-detail" component={Personaldetail} />
          <Route path="/register-success" component={Success} />
          <Route path="/register-failure" component={Failuremessage} />
          {/* <Route
            path="/ideastorm"
            component={props => <Ideastorm {...props} />}
          /> */}
          <Route
            path="/ideastorm"
            render={() => <Redirect to="/events/ideastorm" />}
          />
          <Route
            exact
            path="/events/:id"
            render={props => <EventsMain {...props} />}
          />
          <Route
            path="/startupexpo"
            render={() => <Redirect to="/events/Startupexpo" />}
          />
          <Route path="/event/leadershipsummit" component={LeadershipSummit} />

          {/* <Route
            path="/startupexpo"
            component={props => <StartupExpo {...props} />}
          /> */}

            <Route
              path="/startupignite"
              component={props => <StartupIgnite {...props} />}
            />

          {/* <Route path="*" component={} /> */}
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default HomeLanding
