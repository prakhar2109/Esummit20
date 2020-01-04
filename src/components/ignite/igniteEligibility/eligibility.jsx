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
            There is no restriction on any individual to participate Members of all educational and professional fraternities are welcome to participate
          </li>
          <li>
            The participating Start-up should be more than one years old.
          </li>
          <li>
            Ventures which acquired funding from external investor network cannot participate.
          </li>
        </ol>
      </div>
    )
  }
}

export default Eligibility
