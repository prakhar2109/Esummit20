import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './round.css'

class Round extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {}
  render() {
    let roundNumber
    if (this.props.match.params.id) roundNumber = this.props.match.params.id
    else roundNumber = 1
    return (
      <div className="round">
        <p>Round {roundNumber}</p>
        <br />
        <br />
        <p>
          {' '}
          Registration starts on :{' '}
          <span style={{ color: '#359D9A' }}>12 December, 2018</span>
        </p>
        <br />
        <p>
          Round 1 submission deadline :{' '}
          <span style={{ color: '#359D9A' }}>1 January, 2019</span>
        </p>
        <br />
        <p>
          In this round all the teams are required to submit an abstract of
          their idea along with the answers to some basic questions which will
          be evaluated by Industry Leaders on the basis of :
        </p>
        <br />
        <ol>
          <li>The innovation in your idea</li>
          <li>The real-world problem it mitigates </li>
          <li>The innovation in your idea</li>
        </ol>
        <br />
        <p>
          The teams with the ideas which qualify the minimum eligibility
          criteria would be allowed to progress to the next round.
        </p>
        <br />
        <p>Round 1 results will be announced in 1st week of January </p>
      </div>
    )
  }
}

Round.propTypes = {
  match: PropTypes.string,
  params: PropTypes.string,
  id: PropTypes.number,
  history: PropTypes.string
}

export default Round
