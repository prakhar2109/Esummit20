import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './css/main.css'
import axios from 'axios'
import { BASE_URL } from '../../../utils/urls'
import esummit from './static/logo.png'
import './css/canavbar.css'
// import ca_rulebook from "../../pdfs/ca_rulebook.pdf"

// import Ca from "../caLeaderboard/js/caLeaderboard";

export default class ComingSoon extends Component {
  state = {
    name: '',
    score: '0',
    activeState: 'task',
    data: []
  }

  componentDidMount = () => {
    let token = localStorage.getItem('user_token')
    // document.getElementById("main_class").style.marginTop = '0px';

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
      })
      .catch(response => {
        window.location.href = "/login";
      })
  }

  // componentWillUnmount(){
  //   document.getElementById("main_class").style.marginTop = '13vh';
  // }
  setActive = state => {
    this.setState({
      activeState: state
    })
    this.hide_menu()
  }
  handleLogout = () => {
    localStorage.removeItem('user_token')
    window.location.href = '/login'
  }
  handle_menu() {
    document.getElementById('phone').style.display = 'block'
    document.getElementById('close_button').style.display = 'block'
    document.getElementById('menu_button').style.display = 'none'
    document.getElementById('optionsToggle').style.display = 'block'
    document.getElementById('cahead').style.minHeight = '100vh'

    document.getElementById('mobile-navbar-dashboard-logout').style.display =
      'block'
  }

  hide_menu() {
    document.getElementById('phone').style.display = 'none'
    document.getElementById('close_button').style.display = 'none'
    document.getElementById('menu_button').style.display = 'block'
    document.getElementById('optionsToggle').style.display = 'none'
    document.getElementById('cahead').style.minHeight = '0'

    document.getElementById('mobile-navbar-dashboard-logout').style.display =
      'none'
  }

  render() {
    let { score } = this.state
    let scorePercentage = (score / 10000) * 100 + ''
    let options
    // let profile = this.state.data.user_type
    let profile = 'CA'
    let profile_display
    let { name, data } = this.state
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

    if (
      2 == 2 ||
      this.state.data.user_type === 'AMB' ||
      this.state.data.user_type === 'CA'
    ) {
      options = (
        <>
          <Link to="/dashboard/task">
            <div
              className={
                this.state.activeState === 'task'
                  ? 'linkEventson'
                  : 'linkEventson-inactive'
              }
              onClick={() => {
                this.setActive('task')
              }}
            >
              TASKS
            </div>
          </Link>
          <Link to="/dashboard/leader">
            <div
              className={
                this.state.activeState === 'leaderboard'
                  ? 'linkEventson'
                  : 'linkEventson-inactive'
              }
              onClick={() => {
                this.setActive('leaderboard')
              }}
            >
              LEADERBOARD
            </div>
          </Link>
        </>
      )
    } else {
      options = null
    }
    return (
      <div className="caheader" id="cahead">
        <div className="caheader-parent">
          <span className="esummit_logo">
            <NavLink to="/">
              <img src={esummit} alt="Esummit Logo" />
            </NavLink>
          </span>

          <div
            id="menu_button"
            className="fas fa-bars new-navbar-i"
            onClick={this.handle_menu}
          >
            <span>
              <i></i>
            </span>
            <span>
              <i></i>
            </span>
            <span>
              <i></i>
            </span>
          </div>
          <div
            id="close_button"
            className="new-navbar-i span-cross"
            onClick={this.hide_menu}
          >
            <span>
              <i></i>
            </span>
            <span>
              <i></i>
            </span>
            <span>
              <i></i>
            </span>
          </div>
        </div>
        <div id="phone" className="mob_menu">
          <div className="dashboard-mobile-navbar">
            <div id="droperShape">{name[0]}</div>
            <div className="headerdata">
              <p id="nms">{name}</p>
              <p id="typeofdashboard">{profile_display}</p>
              <Link to="/dashboard/Viewprofile" onClick={this.hide_menu} className="link-mobile-viewprofile">
                View Profile
              </Link>
              {(this.state.data.user_type === 'AMB' ||
                this.state.data.user_type === 'CA') && (
                <div>
                  <div className="scor">
                    <span id="scoresWritten">SCORE</span>
                    <span id="scoresValue">{this.state.score}/10000</span>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-custom"
                      style={{
                        width: scorePercentage + '%'
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="mobile-profile-dashboard-esummit1">
            <span id="mobileprofile-dashboard-esummitId">E-Summit’19 ID</span>
            <span id="mobileprofile-dashboard-esummitId-value">
              {data.esummit_id}
            </span>
          </div>
          {/* <div className="mobile-profile-dashboard-esummit2">
            <span id="mobileprofile-dashboard-esummitId">Contingent No (Leader)</span>
            <span id="mobileprofile-dashboard-esummitId-value">CN 2</span>
          </div> */}
        </div>
        <div id="optionsToggle">
          {options}

          <Link to="/dashboard/invite">
            <div
              className={
                this.state.activeState === 'invite'
                  ? 'linkEventson'
                  : 'linkEventson-inactive'
              }
              onClick={() => {
                this.setActive('invite')
              }}
            >
              INVITE
            </div>
          </Link>

          <Link to="/dashboard/payment">
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
              PAYMENT
            </div>
          </Link>
          <Link to="/dashboard/contingent">
            <div
              className={
                this.state.activeState === 'contigent'
                  ? 'linkEventson'
                  : 'linkEventson-inactive'
              }
              onClick={() => {
                this.setActive('contigent')
              }}
            >
              CONTINGENT
            </div>
          </Link>
          <Link to="/dashboard/events">
            <div
              className={
                this.state.activeState === 'events'
                  ? 'linkEventson'
                  : 'linkEventson-inactive'
              }
              onClick={() => {
                this.setActive('events')
              }}
            >
              EVENTS
            </div>
          </Link>

          {this.state.data.user_type === 'AMB' ||
          this.state.data.user_type === 'CA' ? (
            <div id="leaderboardButton">
              <a
                without
                rel="noopener noreferrer"
                target="_blank"
                href="https://drive.google.com/a/iitr.ac.in/file/d/10xdhHFS-OVZVYh6fIJRm-XSMuPga4TqX/view?usp=sharing"
              >
                CA RULEBOOK
              </a>
            </div>
          ) : null}
        </div>
        <div id="mobile-navbar-dashboard-logout">
          <div id="mobile-navbar-submitButton">
            <button type="mobile-navbar-submit" onClick={this.handleLogout}>
              Log Out
            </button>
          </div>
        </div>
      </div>
    )
  }
}
