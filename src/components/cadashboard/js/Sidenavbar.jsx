/* eslint-disable no-lone-blocks */
import React, { Component } from 'react'
import './../css/caLeaderboard.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Header from '../header/caheader'
import { BASE_URL } from '../../../utils/urls'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

class SideNavbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      score: 0,
      totalScore: 0,
      activeState: '',
      data: [],
      contingent: false,
      contingentid: ''
    }
  }

  setActive = state => {
    this.setState({
      activeState: state
    })
  }
  handleLogout = () => {
    localStorage.removeItem('user_token')
    window.location.href = '/'
  }
  componentDidMount = () => {
    this.setState({
      activeState: window.location.pathname.substring(11)
    })

    let token = localStorage.getItem('user_token')

    if (token !== undefined) {
      axios
        .get(BASE_URL + '/v1/api/user/profile', {
          headers: {
            Authorization: `Token ${token}`
          }
        })
        .then(res => {
          this.setState({
            totalScore: res.data.total_score,
            score: res.data.score,
            name: res.data.name,
            data: res.data
          })
          localStorage.setItem('profile', res.data.user_type)
          localStorage.setItem('invite', res.data.invite_url)
        })
        .catch(response => {
          this.props.history.push('/login')
        })

      axios
        .get(BASE_URL + '/v1/api/contingent/info', {
          headers: {
            Authorization: `Token ${token}`
          }
        })
        .then(res => {
          if (res.status === 200) {
            {
              this.setState({
                contingentid: res.data.contingent_id,
                contingent: true
              })
            }
          }
        })
        .catch(response => {})
    } else this.props.history.push('/login')
  }

  render() {
    let { name, score, data, totalScore } = this.state
    let profile = this.state.data.user_type
    // let profile = 'CA'
    let profile_display
    let scorePercentage = (score / 10000) * 100 + ''
    let options
    let is_ca =
      this.state.data.user_type === 'AMB' || this.state.data.user_type === 'CA'

    // let is_ca = true

    if (profile === 'AMB') {
      profile_display = 'CAMPUS AMBASSADOR'
    } else if (profile === 'IIT') {
      profile_display = 'IITR Student '
    } else if (profile === 'NONIIT') {
      profile_display = 'Delegate'
    } else if (profile === 'PROF') {
      profile_display = 'Professor'
    } else if (profile === 'CA') {
      profile_display = 'CAMPUS AMBASSADOR'
    } else if (profile === 'PROFE') {
      profile_display = 'Professional'
    } else {
      profile_display = ''
    }
    if (is_ca) {
      options = (
        <>
          <div
            className={
              this.state.activeState === 'task'
                ? 'linkEventson'
                : 'linkEventson-inactive'
            }
          >
            <Link
              to="/dashboard/task"
              onClick={() => {
                this.setActive('task')
              }}
            >
              TASKS
            </Link>
            <br />
          </div>

          <div
            className={
              this.state.activeState === 'leaderboard'
                ? 'linkEventson'
                : 'linkEventson-inactive'
            }
          >
            <Link
              to="/dashboard/leader"
              onClick={() => {
                this.setActive('leaderboard')
              }}
            >
              LEADERBOARD
            </Link>
          </div>
        </>
      )
    } else {
      options = null
    }
    return (
      <>
        <Header />
        <div id="leftPane">
          <a href="/">
            {/* <img id="logo" src={logo} alt="" /> */}
            <div className="leftpane-esummit-logo"></div>
          </a>

          <div className="side-navbar-details">
            <div id="dropShape">{name[0]}</div>
            <p id="name">{name}</p>

            <p id="dashboard-typename">{profile_display}</p>
            {is_ca && (
              <div className="sidebar-dashboard-esummit">
                <span id="scoreWritten">SCORE</span>
                <span id="scoreValue">
                  {score}/{totalScore}
                </span>
              </div>
            )}
            {/* {is_ca && (
                <div className="progress">
                  <div
                    className="progress-bar bg-custom"
                    style={{
                      width: scorePercentage + '%'
                    }}
                  />
                </div>
              )} */}
            <div className="sidebar-dashboard-box">
              <div className="sidebar-dashboard-esummit">
                <span id="sidebar-dashboard-esummitId">E-Summit’20 ID</span>
                <span id="sidebar-dashboard-esummitId-value">
                  {data.esummit_id}
                </span>
              </div>
            </div>
            {profile !== 'IIT' && this.state.contingent ? (
              <div className="sidebar-dashboard-esummit">
                <span id="sidebar-dashboard-esummitId">Contingent No</span>
                <span id="sidebar-dashboard-esummitId-value">
                  {this.state.contingentid}
                </span>
              </div>
            ) : null}
            <Link to="/dashboard/Viewprofile">
              <div
                className="link-viewprofile"
                onClick={() => {
                  this.setActive('Viewprofile')
                }}
              >
                ViewProfile
              </div>
            </Link>
          </div>
          <div id="optionsToggle">
            {options}
            <div
              className={
                this.state.activeState === 'payment'
                  ? 'linkEventson'
                  : 'linkEventson-inactive'
              }
              onClick={() => {
                this.setActive('payment')
              }}
            >
              <Link to="/dashboard/payment"> PAYMENT</Link>

              <br />
            </div>
            <div
              className={
                this.state.activeState === 'invite'
                  ? 'linkEventson'
                  : 'linkEventson-inactive'
              }
            >
              <Link
                to="/dashboard/invite"
                onClick={() => {
                  this.setActive('invite')
                }}
              >
                INVITE
              </Link>
              <br />
            </div>
            {profile !== 'IIT' && (
              <div
                className={
                  this.state.activeState === 'contigent'
                    ? 'linkEventson'
                    : 'linkEventson-inactive'
                }
              >
                <Link
                  to="/dashboard/contingent"
                  onClick={() => {
                    this.setActive('contigent')
                  }}
                >
                  CONTINGENT
                </Link>
                <br />
              </div>
            )}
            <div
              className={
                this.state.activeState === 'Events'
                  ? 'linkEventson'
                  : 'linkEventson-inactive'
              }
            >
              <Link
                to="/dashboard/Events"
                onClick={() => {
                  this.setActive('Events')
                }}
              >
                EVENTS
              </Link>
              <br />
            </div>
            {/*<span id="leaderboardButton">LeaderBoard</span>*/}
            {is_ca && (
              <div id="leaderboardButton">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  // href="https://drive.google.com/a/iitr.ac.in/file/d/10xdhHFS-OVZVYh6fIJRm-XSMuPga4TqX/view?usp=sharing"
                  href="https://drive.google.com/file/d/1_E8seQecjY77O0CrAlRR9hHgZcFS5jaE/view?usp=sharing"
                >
                  CA RULEBOOK
                </a>
              </div>
            )}
          </div>
          <div id="submitButton">
            <button type="submit" onClick={this.handleLogout}>
              Log Out
            </button>
          </div>
        </div>
      </>
    )
  }
}

SideNavbar.propTypes = {
  history: PropTypes.func
}

export default withRouter(SideNavbar)
