import React, { Component } from 'react'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
import Round from './round'
import PropTypes from 'prop-types'
import './timeline.css'
/* eslint-disable react/prop-types */

class Timeline extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activestate:1,
      roundcontent:null
    }
  }
  setActive=(data)=>{
    this.setState({activestate:data.round_number})
  }
  render() {
    // const match = this.props.match
    console.log(this.props.data,"timeline")
    return (
      <div className="timeline">
        <div className="timelineHeader">
          <div className="title">TIMELINE</div>
          <div className="rounds">
              {this.props.data.map((round,index)=>
                <div key={index} className={this.state.activestate===round.rounds_details[0].round_number?"Active":"timelineInactive"} 
                onClick={()=>this.setActive(round.rounds_details[0])}>
                ROUND {round.rounds_details[0].round_number}
              </div>
              )}
          </div>
        </div>
        {/* <Switch>
          <Route exact path={`${match.path}`}>
            {<Redirect to={`${match.path}/round/1`} />}
          </Route>
          <Route
            exact
            path={`${match.path}/round/:id`}
            component={props => <Round {...props} />}
          />
        </Switch> */}
        {this.props.data.length>0 ? <Round round_number={this.state.activestate} data={this.props.data}/>:null}

      </div>
    )
  }
}

Timeline.propTypes = {
  match: PropTypes.string,
  history: PropTypes.string
}

export default Timeline
/* eslint-disable react/prop-types */
