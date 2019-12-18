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
import Ideastorm from './components/IdeaStorm/ideastorm'
import Failuremessage from './components/registration/popup/failure/failure.js'
import DashboardIndex from './components/cadashboard/js/index'
import 'antd/dist/antd.css'
import HomeLanding from './Home'
const register = Loadable({
  loader: () => import('./components/registration/index.js'),
  loading: () => <Loading />
})
const Registration_profiletype = Loadable({
  loader: () =>
    import('./components/registration/popup/profile_type/profile_type.js'),
  loading: () => <Loading />
})

class App extends Component {
  constructor(props) {
    super(props)
    // console.clear()
    console.log(
      '%cWelcome to ESummit IITR!',
      'color: rgb(243,147,36); font-size:30px;'
    )
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/dashboard/" component={DashboardIndex} />
            <Route path="/" component={HomeLanding} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
