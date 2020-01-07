import React, { Component } from 'react'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
import Round from './round'
import PropTypes from 'prop-types'
import './timeline.css'

class Timeline extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const match = this.props.match
    console.log(this.props.match)
    return (
      <div className="timeline">
        <div className="timelineHeader">
          <div className="title">TIMELINE</div>
          <div className="rounds">
            <div>
              <NavLink to={`${match.url}/round/1`} activeClassName="Active">
                ROUND 1
              </NavLink>
            </div>
            <div>
              <NavLink activeClassName="Active" to={`${match.url}/round/2`}>
                ROUND 2
              </NavLink>
            </div>
            <div>
              <NavLink activeClassName="Active" to={`${match.url}/round/3`}>
                ROUND 3
              </NavLink>
            </div>
          </div>
        </div>
        <Switch>
          <Route exact path={`${match.path}`}>
            {<Redirect to={`${match.path}/round/1`} />}
          </Route>
          <Route
            exact
            path={`${match.path}/round/:id`}
            component={props => <Round {...props} />}
          />
        </Switch>
      </div>
    )
  }
}

Timeline.propTypes = {
  match: PropTypes.string,
  history: PropTypes.string
}

export default Timeline
