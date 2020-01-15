import React, { Component } from 'react'
import sponsorsHeadingBackground from '../../../assets/sponsors-heading-background.svg'
import { Link } from 'react-router-dom'
import linkedinlocal from '../../../assets/sponsors/linkedinlocal.jpg'
import Dribbble from '../../../assets/sponsors/dribble.svg'
import thecollegefever from '../../../assets/sponsors/Thecollegefever.png'
import tides from '../../../assets/sponsors/tides.png'
import hackerearth from '../../../assets/sponsors/hackerearth.png'
import Devfolio from '../../../assets/sponsors/devfolio.png'
import CBlock from '../../../assets/sponsors/CBlock.png'
import AmarUjala from '../../../assets/sponsors/amarujala.webp'
import arrow from '../../../assets/arrow.svg'

class Sponsors extends Component {
  render() {
    return (
      <div className="sponsors-section-container">
        <div className="section-image-heading-container">
          <div className="section-image-heading">SPONSORS</div>
          <img
            src={sponsorsHeadingBackground}
            className="section-image-heading-background"
            id="section-image-heading-background-sponsor"
            alt=""
          />
          <div className="section-horizontal-navigate-container">
            <img
              src={arrow}
              alt=""
              className="section-horizontal-navigate-arrow arrow-left"
            />
            <img
              src={arrow}
              alt=""
              className="section-horizontal-navigate-arrow arrow-right"
            />
          </div>
        </div>
        <div className="sponsors-section-card-scroll-container">
          <div
            className="sponsors-section-card-container"
            data-scroll="horizontal"
          >
            <div className="sponsors-section-card">
              <img
                src={linkedinlocal}
                alt=""
                className="sponsors-section-card-image"
              />
              <div className="sponsors-section-card-content">
                <div className="sponsors-section-card-heading">
                  LinkedIn Local
                </div>
              </div>
            </div>
            <div className="sponsors-section-card">
              <img
                src={Dribbble}
                alt=""
                className="sponsors-section-card-image"
              />
              <div className="sponsors-section-card-content">
                <div className="sponsors-section-card-heading">Dribbble</div>
              </div>
            </div>
            <div className="sponsors-section-card">
              <img
                src={Devfolio}
                alt=""
                className="sponsors-section-card-image"
              />
              <div className="sponsors-section-card-content">
                <div className="sponsors-section-card-heading">Devfolio</div>
              </div>
            </div>
            <div className="sponsors-section-card">
              <img
                src={AmarUjala}
                alt=""
                className="sponsors-section-card-image"
              />
              <div className="sponsors-section-card-content">
                <div className="sponsors-section-card-heading">Amar Ujala</div>
              </div>
            </div>
            <div className="sponsors-section-card">
              <img src={tides} alt="" className="sponsors-section-card-image" />
              <div className="sponsors-section-card-content">
                <div className="sponsors-section-card-heading">Tides</div>
              </div>
            </div>
            <div className="sponsors-section-card">
              <img
                src={CBlock}
                alt=""
                className="sponsors-section-card-image"
              />
              <div className="sponsors-section-card-content">
                <div className="sponsors-section-card-heading">
                  Coding Blocks
                </div>
              </div>
            </div>
            <div className="sponsors-section-card">
              <img
                src={thecollegefever}
                alt=""
                className="sponsors-section-card-image"
              />
              <div className="sponsors-section-card-content">
                <div className="sponsors-section-card-heading">
                  The College Fever
                </div>
              </div>
            </div>
            <div className="sponsors-section-card">
              <img
                src={hackerearth}
                alt=""
                className="sponsors-section-card-image"
              />
              <div className="sponsors-section-card-content">
                <div className="sponsors-section-card-heading">HackerEarth</div>
              </div>
            </div>
          </div>
        </div>
        <Link to="/sponsors" className="section-button">
          <button>view all sponsors</button>
        </Link>
      </div>
    )
  }
}

export default Sponsors
