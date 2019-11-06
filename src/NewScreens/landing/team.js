import React, { Component } from 'react';
import Gungan from "./static/gungan.jpg";
import Header from '../../components/header';

class Team extends Component {
  render() {
    return (
      <section id="team">
        <div className="land_team">

          <Header title="TEAM" />

          <div className="land_team_array">

            <div>
              <img src={Gungan} alt="Gungan" />
              <p className="name">Gunjan Surana</p>
              <p className="designation">
Convenor
              </p>
              <i className="fab fa-facebook-square" />
              <i className="fab fa-linkedin" />
              <i className="fas fa-envelope" />
              <br />
              <p className="mobile">+91 8888 888 888</p>
            </div>

            <div>
              <img src={Gungan} alt="Gungan" />
              <p className="name">Gunjan Surana</p>
              <p className="designation">
Convenor
              </p>
              <i className="fab fa-facebook-square" />
              <i className="fab fa-linkedin" />
              <i className="fas fa-envelope" />
              <br />
              <p className="mobile">+91 8888 888 888</p>
            </div>

            <div>
              <img src={Gungan} alt="Gungan" />
              <p className="name">Gunjan Surana</p>
              <p className="designation">
Convenor
              </p>
              <i className="fab fa-facebook-square" />
              <i className="fab fa-linkedin" />
              <i className="fas fa-envelope" />
              <br />
              <p className="mobile">+91 8888 888 888</p>
            </div>

          </div>
          <center>
            <button className="all_sponsors">VIEW FULL TEAM</button>
          </center>

          <center>
            <p className="why_wait">
Why Wait?
            </p>
            <p className="register_already">Register Already!</p>
          </center>
          <br />
          <br />
          <br />
          <center>
            <span className="register_now">REGISTER NOW</span>
          </center>

        </div>

      </section>
    );
  }
}

export default Team;
