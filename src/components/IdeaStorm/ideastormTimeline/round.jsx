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
        {/* <p>Round {roundNumber}</p> */}
        <br />
        <br />
        <p>
          {' '}
          Registration starts on :{' '}
          <span style={{ color: '#359D9A' }}>12 December, 2019</span>
        </p>
        <br />
        <p>
          Registration deadline :{' '}
          <span style={{ color: '#359D9A' }}>7 January, 2019</span>
        </p>
        <br />
        <p>
          All startups willing to participate are required to fill the
          application form before the Registration deadline after which a
          confirmation email will be sent to all selected entries by{' '}
          <span style={{ color: '#359D9A' }}> 9 January, 2019</span>
        </p>
        <br />
        <p>
          In respond to the email, each entry has to confirm and finalize their
          presence on the day of the event by{' '}
          <span style={{ color: '#359D9A' }}> 12 January, 2019</span>
        </p>
        <br />
        <p>
          All entries are then expected to pay through the payment portal by{' '}
          <span style={{ color: '#359D9A' }}> 20 January, 2019</span>
        </p>
        <br />
        <br />
        <br />
        <br />
        <br />
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
