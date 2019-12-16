import React, { Component } from 'react'
import logo from '../header/static/logo.png'
import './../css/caLeaderboard.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Header from '../header/caheader'
import { BASE_URL } from '../../../utils/urls'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

class caLeaderboard extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      score: '0',
      activeState: '',
      data: []
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
            score: res.data.score,
            name: res.data.name,
            data: res.data
          })

          localStorage.setItem('profile', res.data.user_type)
          localStorage.setItem('invite', res.data.invite_url)
        })
        .catch(response => {
          window.location.href = "/login";
        })
    }
    else
    window.location.href = "/login";
  }

  render() {
    let { name, score, data } = this.state
    // let profile = this.state.data.user_type
    let profile = 'CA'
    let profile_display
    let scorePercentage = (score / 10000) * 100 + ''
    let options
    // let is_ca =
    //   this.state.data.user_type === 'AMB' || this.state.data.user_type === 'CA'

    let is_ca = true
    console.log(`${profile}aaaaa${is_ca}`, 'abdsmnbdasn')

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
      <div>
        <Header />
        <div id="container">
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
                  <span id="scoreValue">{score}/10000</span>
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
                  <span id="sidebar-dashboard-esummitId">E-Summit’19 ID</span>
                  <span id="sidebar-dashboard-esummitId-value">
                    {data.esummit_id}
                  </span>
                </div>
              </div>

              <div className="sidebar-dashboard-esummit">
                <span id="sidebar-dashboard-esummitId">
                  Contingent No (Leader)
                </span>
                <span id="sidebar-dashboard-esummitId-value">CN 2</span>
              </div>

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
              >
                <Link
                  to="/dashboard/payment"
                  onClick={() => {
                    this.setActive('payment')
                  }}
                >
                  PAYMENT
                </Link>
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
                    href="https://drive.google.com/a/iitr.ac.in/file/d/10xdhHFS-OVZVYh6fIJRm-XSMuPga4TqX/view?usp=sharing"
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
        </div>
      </div>
    )
  }
}

export default withRouter(caLeaderboard)
