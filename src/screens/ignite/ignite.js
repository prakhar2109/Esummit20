import React, { Component } from 'react';
import jump from 'jump.js';
import './css/ignite.scss';
import Header from "../../NewScreens/nav/nav";
import MobileNav from "../../NewScreens/mobile_nav/header";
import "./css/scrollanimation.css";
import Footer from '../../NewScreens/IdeaStorm/footer/eventfooter';

import jaipur from '../../images/jaipur.jpg';
import deh from '../../images/dehradun.jpg';
import chandi from '../../images/chandigarh.jpg';

import guru from '../../images/gurugram.jpg';

// import case1 from '../../images/case1.png'
// import case2 from '../../images/Workshops.jpg'

// import comp from '../../images/competetions.jpg'

// import lec from '../../images/guestlecture.png'

// import panal from '../../images/paneldiscussions.jpeg'

import nodia from '../../images/noida.jpg';

export default class ComingSoon extends Component {
  jum = () => {
    jump('.ignite');
  }

  render() {
    return (
      <div>
        <Header />
        <MobileNav />
        <div className="startup-ignite-parent">
          <div className="ignite_main">
            <div className="ignite_text">
              <div className="ignite-text-heading">
                STARTUP IGNITE
              </div>
              <div>
                Startup Ignite aims to spread awareness about entrepreneurship and startups in various cities PAN-India.
                Startup Ignite presents students across multiple cities the chance to widen their scope of knowledge in
                entrepreneurship and meet some of the best people in the field today. E-Cell IITR organises various events
                in collaboration with local entrepreneurship development organisations.
              </div>
              <div className="ignite-first-page-scroll">
                <div onClick={this.jum} className="icon-scroll" />
                {' '}
                <br />
                <div id="ignite-first-page-scroll-child"><p> SCROLL DOWN</p></div>
              </div>
            </div>


          </div>

          <div className="ignite">
            <div className="ignite_head">VENUES</div>
            <div className="ignite_venus">

              <center>
                <div className="ignite_venu_unit">

                  <div>
                    <img alt="jaipur" src={jaipur} />
                  </div>

                  <span>
                    <p>Jaipur </p>
                    {/* <p>College: TBD</p>
                  <p>Date: TBD</p> */}
                  </span>

                </div>

                <div className="ignite_venu_unit">

                  <div>
                    <img alt="Chandigarh" src={chandi} />
                  </div>

                  <span>
                    <p>Chandigarh </p>
                    {/* <p>College: TBD</p>
                  <p>Date: TBD</p> */}
                  </span>

                </div>

                <div className="ignite_venu_unit">

                  <div>
                    <img alt="Dehradun" src={deh} />

                  </div>

                  <span>
                    <p>Dehradun </p>
                    {/* <p>College: TBD</p>
                  <p>Date: TBD</p> */}
                  </span>

                </div>

                <div className="ignite_venu_unit">

                  <div>
                    <img alt="Gurugran " src={guru} />

                  </div>

                  <span>
                    <p>Gurugram </p>
                    {/* <p>College: TBD</p>
                  <p>Date: TBD</p> */}
                  </span>

                </div>

                <div className="ignite_venu_unit">

                  <div>
                    <img alt="Noida " src={nodia} />

                  </div>

                  <span>
                    <p>Noida </p>
                    {/* <p>College: TBD</p>
                  <p>Date: TBD</p> */}
                  </span>

                </div>
              </center>

            </div>
          </div>

          <Footer />
        </div>
      </div>
    );
  }
}
