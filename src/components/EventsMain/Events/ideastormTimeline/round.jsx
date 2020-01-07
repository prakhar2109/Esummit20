import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './round.css'
/* eslint-disable react/prop-types */

class Round extends Component {
  constructor(props) {
    super(props)
    this.state = {
      round: props.data[0].rounds_details[0]
    }
  }
  componentDidMount() {
    console.log(this.props.content, "round_content")
  }

  render() {
    // let roundNumber
    // if (this.props.match.params.id) roundNumber = this.props.match.params.id
    // else roundNumber = 1
    console.log(this.props.round_number, "round_number")

    return (
      <React.Fragment>

        {this.props.data.length > 0 && this.props.data.map((round, index) => {
          return (
             this.props.round_number === round.rounds_details[0].round_number ?

                <div className="round" key={index}>
                  <p>Round {round.rounds_details[0].round_number} </p>
                  <br />
                  <br />
                  <p>
                    {' '}
                    Registration starts on :{' '}
                    <span style={{ color: '#359D9A' }}>{round.rounds_details[0].round_registration_date}</span>
                  </p>
                  <br />
                  <p>
                    Registration deadline :{' '}
                    <span style={{ color: '#359D9A' }}>{round.rounds_details[0].round_submission_date}</span>
                  </p>
                  <br />


                  <p>

                    {round.rounds_details[0].round_description}
                  </p>
                  {/* <br />
                  <p>
                    In respond to the email, each entry has to confirm and finalize their
                    presence on the day of the event by{' '}
                    <span style={{ color: '#359D9A' }}> 12 January, 2019</span>
                  </p>
                  <br />
                  <p>
                    All entries are then expected to pay through the payment portal by{' '}
                    <span style={{ color: '#359D9A' }}> 20 January, 2019</span>
                  </p> */}
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </div> 
                : null
            
          )
        }

        )}
      </React.Fragment>

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
