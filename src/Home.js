/* eslint-disable react/display-name */
import React, { Component } from 'react'

// import logo from './logo.svg'
import Loading from './assets/loading.gif'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
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
import './styles/main.scss'
import Ideastorm from './components/IdeaStorm/ideastorm'
import Failuremessage from './components/registration/popup/failure/failure.js'
import DashboardIndex from './components/cadashboard/js/index'
import StartupExpo from './components/startupExpo/startupexpo.jsx'
import Login from './components/login/Login'
import 'antd/dist/antd.css'
import NonCARegistration from './components/registration/Noncaregister/index'

class HomeLanding extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/campus-ambassador" component={CampusAmbassador} />
          <Route path="/register" component={Profiletype} />
          <Route path="/login" component={Login} />

          <Route path="/ca-registration" component={Registration} />
          <Route path="/noncaregister" component={NonCARegistration} />

            <Route path="/personal-detail" component={Personaldetail} />
            <Route path="/register-success" component={Success} />
            <Route path="/register-failure" component={Failuremessage} />
            <Route path="/Ideastorm" component={Ideastorm} />
            <Route
              path="/startupexpo"
              component={props => <StartupExpo {...props} />}
            />
            {/* <Route path="*" component={} /> */}
          </Switch>
          <Footer />
      </div>
    )
  }
}

export default HomeLanding
