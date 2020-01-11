import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Loader from '../loader/loader'
import axios from 'axios'
import { BASE_URL } from '../../utils/urls'
import Events from './Events/EventComponent/Index'
import Events2 from './Events2/EventComponent/Index'
/* eslint-disable react/prop-types */

// const Events2 = Loadable({
//     loader: () => import("./Events2/EventComponent/Index"),
//     loading: () => <Loader />,
// });

export default class EventsMainIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: '',
      faq: ''
    }
  }

  componentDidMount() {
    
    document
        .getElementById("loader")
        .style
        .display = "grid";

    console.log(this.props, 'maaaaaaaaaaaxxxxxxxxxxxxxxxx')
    let event_name =
      this.props.match.params.id.charAt(0).toUpperCase() +
      this.props.match.params.id.slice(1)
    console.log(event_name, 'maaaaaaaaaaaxxxxxxxxxxxxxxxx')
    let data = {
      event_name: event_name
    }

    axios.get(BASE_URL + '/v1/api/events/').then(res => {
      console.log(res.data, 'events')
      //   for(const event of res.data)
      //   {
      //       if(event.title===data.event_name)
      //       id=event.id
      //   }
      let id = res.data.find(event => event.title == event_name).id
      return axios({
        method: 'get',
        url: BASE_URL + `/v1/api/event_details/${id}/`
      })
        .then(r => {
          document.getElementById('loader').style.display = 'none'
          window.scrollTo(0, 0)
          this.setState({
            data: r.data.event_data,
            faq: r.data,
            event1data: r.data
          })

          console.log(r.data, 'data')
          // document
          //     .getElementById("loader")
          //     .style
          //     .display = "none";
        })
        .catch(response => {
          // document
          //     .getElementById("loader")
          //     .style
          //     .display = "none";
          // window.location.href = "/"
        })
    })
  }
  render() {
    return (
      <React.Fragment>
        <Loader/>
        {this.state.data.event_type2 === 'TYPE1' ? (
          <Route
            exact
            path="/events/:id"
            render={props => <Events {...props} data={this.state.event1data} />}
          />
        ) : this.state.data.event_type2 === 'TYPE2' ? (
          <Route
            exact
            path="/events/:id"
            render={props => (
              <Events2 {...props} faq={this.state.faq} data={this.state.data} />
            )}
          />
        ) : null}
      </React.Fragment>
    )
  }
}

/* eslint-disable react/prop-types */
