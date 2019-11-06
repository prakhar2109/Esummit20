import React, { Component } from "react";
import Google from "../static/google.png";
import Facebook from "../static/facebook.png";
import Cross from "../static/cross.png"

import "./login.scss";


export default class LoginComponent extends Component {

  hide = () => {
    document.getElementById("log").style.display = "none";
  }
  render() {
    return (
      <div id="log">

        <div className="andhera" onClick={this.hide} />
        <div className="login_outer">

          <img alt="" onClick={this.hide} className="cross" src={Cross} />

          <div className="login_inner">
            <div className="top">
              <p>LOG IN</p>
              <p>Let’s begin with setting up your accounts</p>
            </div>

            <div className="login_bottom">
              <center>
                <span className="google">
                  <span>
                    <img src={Google} alt="Google icom" />
                  </span>
                  <span>Google</span>
                </span>

                <span className="facebook">
                  <span>
                    <img src={Facebook} alt="Facebook icom" />
                  </span>
                  <span>Facebook</span>
                </span>
              </center>

              <hr class="hr-text" data-content="OR" />

              <form>
                <label>E-MAIL ID</label>

                <input
                  className="input"
                  type="email"
                  placeholder="Enter your mail"
                  required
                />

                <label>Password</label>

                <input
                  className="input"
                  type="password"
                  placeholder="Enter your password"
                  required
                />

                <input className="submit" value="Login" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </ div>
    );
  }
}
