import React, { Component } from 'react'
import Header from '../Header/Index'
// import axios from "axios"
import { BASE_URL } from '../../../../utils/urls'
// import Eventfooter from "../Common/footer/eventfooter"
// import { NavLink } from "react-router-dom";
// import esummit from "../Common/es.png";
// import EventHeader from "../../Events/Common/Navbar/header"
// import MobileNav from "../../../../NewScreens/mobile_nav/header"
// import Eventfooter from "../Common/footer/eventfooter"
// import Nav from "../Common/nav/nav"
import '../../Events/Common/ideastorm.scss'
import Body from '../Body/Index'
import { NavLink } from 'react-router-dom'
import Rules from '../../Events/Rules/Index'
import Eligibility from '../../Events/Eligibility/Index'
import Perks from '../../Events/Perks/Index'
import jump from 'jump.js'
import '../css/eligibility.css'
import '../css/header.css'
import '../css/panel.css'
import '../css/guest.css'
// import Faq from "../FAQ/Index"
/* eslint-disable react/prop-types */

class EventComponentIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: '',
      faq: ''
    }
  }
  componentDidMount() {
    this.setState(
      {
        data: this.props.data,
        faq: this.props.faq
      },
      () => console.log(this.state.data, 'r.data.event_data[0]')
    )
  }

  events = () => {
    this.setState({
      displaynavbar: !this.state.displaynavbar
    })
    jump('#events')
  }
  coordinator = () => {
    this.setState({
      displaynavbar: !this.state.displaynavbar
    })
    jump('#coordinators')
  }

  faq_idea = () => {
    this.setState({
      displaynavbar: !this.state.displaynavbar
    })
    jump('#faq_idea', { offset: -70 })
  }
  render() {
    let token = localStorage.getItem('user_token')
    let tabs
    console.log(this.state.data,"events2")
  
    return (
      <React.Fragment>      
        <div className="ideastorm">
         
        </div>
       
        {this.state.data ? <Header data={this.state.data.event_data} /> : null}
        {this.state.data ? <Body data={this.state.data.event_data} /> : null}
       
        {this.state.data.rules&&this.state.data.rules.length>0 ? <Rules data={this.state.data.rules} /> : null}

        {this.state.data.elligiblity&&this.state.data.elligiblity.length>0 ? (
          <Eligibility data={this.state.data.elligiblity} />
        ) : null}

        {this.state.data.perks&&this.state.data.perks.length>0 ? <Perks data={this.state.data.perks} /> : null}
      </React.Fragment>
    )
  }
}

export default EventComponentIndex
/* eslint-disable react/prop-types */
