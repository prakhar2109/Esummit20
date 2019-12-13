import React, { Component } from 'react'
import '../css/events.css'
import { BASE_URL } from '../../../utils/urls'
import axios from 'axios'
import Allevents from './allevents'
import App from '.'
import Appliedevents from './appliedevents'
/* eslint-disable react/prop-types */

export default class Events extends Component {
  constructor(props) {
    super(props)
    this.state = {
      appliedevents: [],
      status: [],
      events: props.events
    }
  }

  componentDidMount() {
    let appliedevents = []
    let status = []

    let token = localStorage.getItem('user_token')
    axios
      .get(BASE_URL + '/v1/api/user/events', {
        headers: {
          Authorization: `Token ${token}`
        }
      })
      .then(res => {
        appliedevents = res.data.map(eventlist => {
          return eventlist.event
        })
        status = res.data.map(eventlist => {
          return eventlist.status
        })
        this.setState({
          appliedevents: appliedevents,
          status: status
        })
        console.log(this.state.status, 'dnfnnjndnnjnj')
      })
      .catch(response => {})
  }
  discardEvent = id => {
    // console.log("hello")
    let token = localStorage.getItem('user_token')

    axios
      .get(BASE_URL + `/v1/api/event/${id}/unregister`, {
        headers: {
          Authorization: `Token ${token}`
        }
      })
      .then(res => {
        if (res.status === 200) window.location.href = '/dashboard/Events'
        // console.log(res)
      })
      .catch(response => {})
  }

  render() {
    return (
      <div className="caevents-parent">
        {this.state.appliedevents && this.state.appliedevents.length > 0 ? (
          <>
            <div className="ca-events-parent-heading1 caeventsparent-font">
              Applied Events
            </div>
          </>
        ) : null}
        <div className="caevents-earnedcoupons-rowparent1">
          {this.state.appliedevents &&
            this.state.appliedevents.map((event, index) => (
              <Appliedevents
                key={event.id}
                event={event}
                index={index}
                status={this.state.status}
                discardEvent={this.discardEvent}
              />
            ))}
        </div>

        <div className="ca-events-parent-heading2 caeventsparent-font">
          All Events
        </div>
        <Allevents events={this.state.events} />
      </div>
    )
  }
}
/* eslint-disable react/prop-types */
