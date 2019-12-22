import React, { Component } from 'react'
import './perks.css'
import cashrewardPhoto from './assets/prize.png'
import mediaPhoto from './assets/media.png'
import networkingPhoto from './assets/network.png'
import mentorPhoto from './assets/mentor.png'
import PropTypes from 'prop-types'

export function SinglePerk(props) {
  return (
    <div className="single-perk">
      <img src={props.src} style={props.style} alt="Perk Photo" />
      <p className="perk-title">{props.perkTitle}</p>
      <p className="perk-about">{props.perkAbout}</p>
    </div>
  )
}
SinglePerk.propTypes = {
  perkTitle: PropTypes.string,
  perkAbout: PropTypes.string,
  style: PropTypes.object,
  src: PropTypes.string
}
export default class EventPerks extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cashReward: false,
      mentorship: false,
      networkingSession: false,
      fundingOpportunity: false,
      mediaCoverage: false
    }
  }
  componentDidMount() {
    this.setState({
      cashReward: this.props.cashReward,
      mentorship: this.props.mentorship,
      networkingSession: this.props.networkingSession,
      fundingOpportunity: this.props.fundingOpportunity,
      mediaCoverage: this.props.mediaCoverage
    })
  }
  render() {
    return (
      <div>
        <div className="perk-head">PERKS</div>

        <div className="perk-board">
          {this.state.cashReward ? (
            <SinglePerk
              src={cashrewardPhoto}
              perkTitle="Cash Rewards"
              perkAbout="Cash Prize Of INR 2,00,000"
            />
          ) : null}
          {this.state.mentorship ? (
            <SinglePerk
              src={mentorPhoto}
              style={{ width: '200px' }}
              perkTitle="Mentorship"
              perkAbout=" Mentorship opportunities for Venture Capitalists and Industry Leaders."
            />
          ) : null}
          {this.state.networkingSession ? (
            <SinglePerk
              src={networkingPhoto}
              perkTitle="Networking Session"
              perkAbout="Networking session with CEOs,CXOs, Angel Investors, Venture Capitalists and Industry Leaders "
            />
          ) : null}
          {this.state.fundingOpportunity ? (
            <SinglePerk
              src=""
              style={{ width: '200px' }}
              perkTitle="Funding opportunities"
              perkAbout="An opportunity to raise real time funds"
            />
          ) : null}
          {this.state.mediaCoverage ? (
            <SinglePerk
              src={mediaPhoto}
              style={{ width: '200px' }}
              perkTitle="Media Coverage"
              perkAbout="Could get featured on many popular media platforms. "
            />
          ) : null}
        </div>
      </div>
    )
  }
}
EventPerks.propTypes = {
  cashReward: PropTypes.bool,
  mentorship: PropTypes.bool,
  networkingSession: PropTypes.bool,
  fundingOpportunity: PropTypes.bool,
  mediaCoverage: PropTypes.bool
}
