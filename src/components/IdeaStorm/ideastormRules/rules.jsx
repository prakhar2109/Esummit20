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
            Each startup may consist of a maximum of three members, who will be
            present their on the stall.
          </li>

          <li>
            The decision of the judges shall be final and binding, though in all
            the rounds, E-Cell IIT Roorkee retains the right to evaluate all
            ideas and choose the eligibility criteria.
          </li>
          <li>
            The startups that will be joining us on the event day are expected
            to bring their own promotional posters and standees.
          </li>
        </ol>
      </div>
    )
  }
}

export default Rules
