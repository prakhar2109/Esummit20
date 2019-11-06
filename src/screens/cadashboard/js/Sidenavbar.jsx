import React, { Component } from "react";
import logo from "../../header/static/esummit.png";
import "./../css/caLeaderboard.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../../header/caheader";
import { BASE_URL } from "../../../utils/urls";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";

class caLeaderboard extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      score: "0",
      activeState: "",
      data: []
    };
  }

  setActive = state => {
    this.setState({
      activeState: state,
    });
  };
  handleLogout = () => {
    localStorage.removeItem("user_token");
    window.location.href = "/";
  };
  componentDidMount = () => {
    let token = localStorage.getItem("user_token");

    if (token !== undefined) {
      axios
        .get(BASE_URL + "/v1/api/user/profile", {
          headers: {
            Authorization: `Token ${token}`,
          },
        })
        .then(res => {
          this.setState({ score: res.data.score, name: res.data.name, data: res.data });

          localStorage.setItem("profile", res.data.user_type);
          localStorage.setItem("invite", res.data.invite_url);

        })
        .catch(response => {
          window.location.href = "/login";
        });
    }
  };



  render() {
    let { name, score, data } = this.state;
    let profile = this.state.data.user_type;
    let profile_display;
    let scorePercentage = (score / 10000) * 100 + "";
    let options;
    let is_ca = this.state.data.user_type === "AMB" || this.state.data.user_type === "CA";

    if (profile === "AMB") {
      profile_display = "CAMPUS AMBASSADOR";
    }

    else if (profile === "IIT") {
      profile_display = "IITR Student ";
    }

    else if (profile === "NONIIT") {
      profile_display = "Delegate";
    }

    else if (profile === "PROF") {
      profile_display = "Professor";
    }


    else if (profile === "CA") {
      profile_display = "CAMPUS AMBASSADOR";
    }


    else if (profile === "PROFE") {
      profile_display = "Professional";
    }

    else {
      profile_display = "";

    }
    if (is_ca) {

      options = (
        <>
          <span>
            <Link
              to="/dashboard/task"
              className={
                this.state.activeState === "task" ? "linkEventson" : "linkEventson-inactive"
              }
              onClick={() => {
                this.setActive("task");
              }}
            >
              TASKS
                </Link>
            <br />
          </span>

          {<span>
            <Link
              to="/dashboard/leader"
              className={
                this.state.activeState === "leaderboard"
                  ? "linkEventson"
                  : "linkEventson-inactive"
              }
              onClick={() => {
                this.setActive("leaderboard");
              }}
            >
              LEADERBOARD
</Link>
            <br />
          </span>}

        </>
      )
    }



    else {
      options = null;
    }
    return (
      <div>
        <Header />
        <div id="container">
          <div id="leftPane">

            <a href="/">
              <img id="logo" src={logo} alt="" />
            </a>

            <hr id="line1" />

            <Link to="/dashboard/Viewprofile" onClick={() => {
              this.setActive("Viewprofile");
            }} className="link-viewprofile">
              <div id="dropShape">{name[0]}</div>
              <p id="name">{name}</p>
            </Link>
            <p id="dashboard-typename">{profile_display}</p>
            <div className="sidebar-dashboard-box">
              <div className="sidebar-dashboard-esummit">
                <span id="sidebar-dashboard-esummitId">E-Summit’19 ID</span>
                <span id="sidebar-dashboard-esummitId-value">{data.esummit_id}</span>
              </div>
            </div>
            {/*
              <div className="sidebar-dashboard-esummit">
                <span id="sidebar-dashboard-esummitId">
                  Contingent No (Leader)
                </span>
                <span id="sidebar-dashboard-esummitId-value">CN 2</span>
              </div>
            </div>
              */}
            {is_ca && <div className="score">
              <span id="scoreWritten">SCORE</span>
              <span id="scoreValue">{score}/10000</span>
            </div>}
            {is_ca && <div className="progress">
              <div
                className="progress-bar bg-custom"
                style={{
                  width: scorePercentage + "%",
                }}
              />
            </div>}

            <div id="optionsToggle">

              {options}

              <span>
                <Link
                  to="/dashboard/payment"
                  className={
                    this.state.activeState === "payment" ? "linkEventson" : "linkEventson-inactive"
                  }
                  onClick={() => {
                    this.setActive("payment");
                  }}
                >
                  PAYMENT
                </Link>
                <br />
              </span>

              <span>
                <Link
                  to="/dashboard/invite"
                  className={
                    this.state.activeState === "invite" ? "linkEventson" : "linkEventson-inactive"
                  }
                  onClick={() => {
                    this.setActive("invite");
                  }}
                >
                  INVITE
                </Link>
                <br />
              </span>


              {profile !== "IIT" && <span>
                <Link
                  to="/dashboard/contingent"
                  className={
                    this.state.activeState === "contigent"
                      ? "linkEventson"
                      : "linkEventson-inactive"
                  }
                  onClick={() => {
                    this.setActive("contigent");
                  }}
                >
                  CONTINGENT
                </Link>
                <br />
              </span>}

              <span>
                <Link
                  to="/dashboard/Events"
                  className={
                    this.state.activeState === "Events"
                      ? "linkEventson"
                      : "linkEventson-inactive"
                  }
                  onClick={() => {
                    this.setActive("Events");
                  }}
                >
                  EVENTS
                </Link>
                <br />
              </span>


              {/*<span id="leaderboardButton">LeaderBoard</span>*/}
              {is_ca && <div id="leaderboardButton">
                <a target="_blank" href="https://drive.google.com/a/iitr.ac.in/file/d/10xdhHFS-OVZVYh6fIJRm-XSMuPga4TqX/view?usp=sharing">CA RULEBOOK</a>
              </div>}
            </div>
            <div id="submitButton">
              <button type="submit" onClick={this.handleLogout}>
                Log Out
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default withRouter(caLeaderboard);