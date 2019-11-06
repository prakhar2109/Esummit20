import React, { Component } from "react";
import Header from "../../components/header";
import Nav from "../landing/nav/nav.jsx";
import "./team.scss";
import Gungan from "./static/gungan.jpg";
export default class Team extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="team">
          <Header title="Team" />

          <p className="text">
            Meet the awesome team who make this all possible.
          </p>

          <div className="team_array">

            <div>
                <img src = {Gungan} alt = "Gungan" />

                <span>
                    <p> Gunjan Surana</p>
                    <p>Convenor</p>

                    <p className = "links"> 

                       <i className="fab fa-facebook-square"></i>
                            <i className="fab fa-linkedin"></i>
                            <i className="fas fa-envelope"></i><br/>

                    </p>

                            <p className="mobile">+91 8888 888 888</p>
                </span>
            </div>

          </div>

        </div>
      </div>
    );
  }
}
