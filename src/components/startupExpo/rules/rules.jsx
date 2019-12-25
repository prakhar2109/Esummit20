import React, { Component } from 'react'
import Header from '../../IdeaStorm/Vector/vector'
import './rules.css'

class Rules extends Component {
  render() {
    return (
      <div className="Rules">
        <p>RULES & REGULATIONS </p>

        <ol>
          <li>
            Each team may consist of at least three to at most five members, who
            need not belong to the same organization.
          </li>

          <li>
            Multiple teams from the same university / organization are allowed
            to participate in the event.
          </li>

          <li>
            The decision of the judges shall be final and binding, though in all
            the rounds, E-Cell IIT Roorkee retains the right to evaluate all
            ideas and choose the eligibility criteria.
          </li>
        </ol>
      </div>
    )
  }
}

export default Rules
