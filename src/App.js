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
import Facebooklogin from './components/registration/account_setup/accountsetup.js'
import Profiletype from './components/registration/popup/profile_type/profile_type.js'
import Navbar from './components/navbar'
import Home from './components/home/Home.js'
import Footer from './components/footer'
import CampusAmbassador from './components/ca/CampusAmbassador'
import './styles/main.scss'
import Failuremessage from './components/registration/popup/failure/failure.js'

const register = Loadable({
  loader: () => import('./components/registration/index.js'),
  loading: () => <Loading />
})
const Registration_profiletype = Loadable({
  loader: () =>
    import('./components/registration/popup/profile_type/profile_type.js'),
  loading: () => <Loading />
})

export function Landing() {
  return (
    <div className="app-parent">
      <img src={theme} alt="theme" />
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://docs.google.com/forms/d/e/1FAIpQLSdaJH9lppWdVlgjXDiw60KvkT1kQeUcn-4s-UHDL_BirextvQ/viewform?usp=sf_link"
        className="register-now-button"
      >
        Register Now
      </a>
    </div>
  )
}
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/campus-ambassador"
              component={CampusAmbassador}
            />
            <Route path="/register" component={Profiletype} />
            <Route path="/ca-registration" component={Registration} />
            <Route path="/personal-detail" component={Personaldetail} />
            <Route path="/register-success" component={Success} />
            <Route path="/register-failure" component={Failuremessage} />
            {/* <Route path="*" component={} /> */}
          </Switch>

          {/* <Facebooklogin /> */}
          <Footer />
        </BrowserRouter>
      </div>
    )
  }
}

export default App
