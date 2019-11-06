import React, { Component } from 'react';
import jump from 'jump.js';
import ecell from './static/image.svg';

class Footer extends Component {
    jum = () => {
      jump('.land_screen1');
    }

    render() {
      return (
        <section id="foot" name="test1">

          <center>

            <i className="fab fa-facebook-square" />
            <i className="fab fa-instagram" />
            <i className="fab fa-youtube-square" />
            <i className="fab fa-linkedin" />
            <i className="fab fa-twitter-square" />
          </center>

          <br />
          <br />
          <center>
            <i
              style={{
                cursor: "pointer",
              }}
              onClick={this.jum}
              className="fas fa-angle-up"
            />
          </center>
          <p className="back">
            <span
              style={{
                cursor: "pointer",
              }}
              onClick={this.jum}
            >
                            Back to Top
            </span>
          </p>
          <p className="org">
                        Organised By
          </p>

          <center>
            <img alt="Ecell Lgo" src={ecell} />
          </center>
          <p className="inspire">
                        #inspireinnovation
          </p>

        </section>
      );
    }
}

export default Footer;
