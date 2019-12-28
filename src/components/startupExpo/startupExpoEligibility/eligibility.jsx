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
            There is no restriction on any individual to participate. Members of
            all educational and professional fraternities are welcome to
            participate.
          </li>

          <li>
            Start-ups which have been incorporated more than a year ago (i.e.
            registered on or before 1 December, 2017) are not eligible to
            participate in the Idea Storm.
          </li>
          <li>
            Ventures that have acquired funding from external investor-networks
            (angels, VC&apos;s, etc) can not participate. We believe in
            promoting startups that require assistance in the form of seed
            capital, mentoring and various types of consultancies.
          </li>
        </ol>
      </div>
    )
  }
}

export default Eligibility
