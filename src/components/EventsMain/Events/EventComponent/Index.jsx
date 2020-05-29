import React, { Component } from 'react'
import Header from '../Header/Index'
import jump from 'jump.js'
import axios from 'axios'
import Perks from '../Perks/Index'
import ApplyNow from '../ApplyNow/Index'
import Eligibility from '../Eligibility/Index'
import FAQ from '../FAQ/Index'
import EventCo from '../EventCo/Index'
import Rules from '../Rules/Index'
import { BASE_URL } from '../../../../utils/urls'
// import Eventfooter from "../Common/footer/eventfooter";
import { NavLink } from 'react-router-dom'
import esummit from '../Common/es.png'
import EventHeader from '../Common/Navbar/header'
import Partners from '../Partners/Partners'
import Timeline from '../ideastormTimeline/timeline'
import './index.css'
/* eslint-disable react/prop-types */

class EventComponentIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: props.data
    }
  }
  componentDidMount() {
    // document
    //     .getElementById("loader")
    //     .style
    //     .display = "grid";
    // let event_name =
    //   this.props.match.params.id.charAt(0).toUpperCase() +
    //   this.props.match.params.id.slice(1);
    // let data = {
    //   event_name: event_name,
    // };
    // axios({
    //   method: "get",
    //   url: BASE_URL + "/v1/api/event_details/3/",
    // })
    //   .then(r => {
    //     this.setState({
    //       data: r.data,
    //     },()=>console.log(this.state.data,"Event1data"));
    //     // document
    //     //     .getElementById("loader")
    //     //     .style
    //     //     .display = "none";
    //   })
    //   .catch(response => {
    //     // document
    //     //     .getElementById("loader")
    //     //     .style
    //     //     .display = "none";
    //     // window.location.href = "/"
    //   });
    // this.setState({data:this.props.data});
  }

  Rules = () => {
    jump('.ideastormRules', { offset: -130 })
  }

  erks = () => {
    jump('.perk-parent', { offset: -130 })
  }

  faq_idea = () => {
    jump('#faq', { offset: -0 })
  }

  coordinator = () => {
    jump('.coordinator-parent', { offset: -130 })
  }

  eligiblity = () => {
    jump('.ideastormEligibility', { offset: -130 })
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
        {/* {this.state.data.event_data ? (
          <EventHeader logo={this.state.data.event_data} />
        ) : null} */}

        {/* <div id="nav" className="header">
          <span>
            {this.state.data.event_data ? (
              <img
                alt="IdeaStorm"
                src={BASE_URL + this.state.data.event_data[0].logo}
              />
            ) : null}
          </span>
          <span className="head_array">
            <span onClick={this.timeline}>Timeline</span>
            <span onClick={this.Rules}>Rules</span>
            <span onClick={this.eligiblity}>Eligiblity</span>
            <span onClick={this.erks}>Perks</span>
            {this.state.data.faq && this.state.data.faq.length > 0 && <span onClick={this.faq_idea}>FAQs</span>}
            <span onClick={this.coordinator}>Contact Us</span>
          </span>
          <span />
        </div> */}

        {this.state.data.head_section ? (
          <Header
            data={this.state.data.head_section}
            applydata={this.state.data.event_data}
            name={this.state.data.name}
          />
        ) : null}
        {}
        {this.state.data.timeline && this.state.data.timeline.length > 0 ? (
          <Timeline {...this.props} data={this.state.data.timeline} />
        ) : null}

        {this.state.data.rules && this.state.data.rules.length > 0 ? (
          <Rules data={this.state.data.rules} />
        ) : null}

        {this.state.data.elligiblity &&
        this.state.data.elligiblity.length > 0 ? (
          <Eligibility data={this.state.data.elligiblity} />
        ) : null}

        {this.state.data.perks ? <Perks data={this.state.data.perks} /> : null}

        {/* {this.state.data.name && this.state.data.event_data ? (
          <ApplyNow
            data={this.state.data.event_data}
            name={this.state.data.name}
          />
        ) : null} */}

        {this.state.data.partners && this.state.data.partners.length > 0 ? (
          <Partners data={this.state.data.partners} />
        ) : null}
        {this.state.data.faq && this.state.data.faq.length > 0 ? (
          <FAQ data={this.state.data.faq} />
        ) : null}

        {this.state.data.coordinator ? (
          <EventCo data={this.state.data.coordinator} />
        ) : null}

        {/* <Eventfooter /> */}
      </div>
    )
  }
}

export default EventComponentIndex
/* eslint-disable react/prop-types */
