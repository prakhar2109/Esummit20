import React, { Component } from 'react'
import Header from '../../IdeaStorm/Vector/vector'
import './eligibility.css'
class Eligibility extends Component {
  render() {
    return (
      <div className="eligiblity">
        <p>ELIGIBILITY CRITERIA</p>
        <ol>
          <li>
            The participating Start-up should have been a registered Indian
            entity in operation for at least 3 months.
          </li>
          <li>
            The participating Start-up should be less than five years old.
          </li>
          <li>
            Each participating Start-up should have an effective Business model
            and Pitch deck that they will present in front of all the investors.
          </li>

          
        </ol>
      </div>
    )
  }
}

export default Eligibility
