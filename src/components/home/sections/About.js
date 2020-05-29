import React, { Component } from 'react'
import aboutHeading from '../../../assets/about.svg'
import aboutHeadingBackground from '../../../assets/about-heading-background.svg'
import themeHeading from '../../../assets/theme.svg'
import themeHeadingBackground from '../../../assets/theme-heading-background.svg'
class About extends Component {
  render() {
    return (
      <div className="home-section-about-container">
        <div className="home-section-content-container">
          <div className="section-image-heading-container">
            <div className="section-image-heading">ABOUT E - SUMMIT</div>
            <img
              src={aboutHeadingBackground}
              className="section-image-heading-background"
              alt="" id="about-esummit"
            />
          </div>
          <div className="section-paragraph">
            E-Summit being the flagship event of ECell, is held annually brings
            together the academic community, venture capitalists, new age
            entrepreneurs and all those passionate about entrepreneurship to
            common grounds. It provides an avenue to exhibit the entrepreneurial
            talent and creativity through many events like business ventures,
            product design competition, and social entrepreneurial idea
            competition.
          </div>
        </div>
        <div className="home-section-content-container">
          <div className="section-image-heading-container">
            <div className="section-image-heading">THEME</div>
            <img
              src={themeHeadingBackground}
              className="section-image-heading-background"
              alt=""
            />
          </div>
          <div className="section-paragraph">
            Create impact and keep on innovating. In a startup journey there are
            three major stages: 0, 1 and n. At 0, you are just beginning and
            your idea is all you have. At 1, you have your startup established.
            At n, your startup is expanding and scaling-up. In the journey from
            0 to 1, we hope to create something that would impact the society in
            a huge way. We want to disrupt the usual flow of the way things
            work. In the journey from 1 to n, every startup while scaling-up
            faces a lots of disruptions. With these constant disruptions it
            becomes difficult to keep on innovating. This year, we explore the
            ways to deal with these Dilemmas of Disruption. Join us as we try to
            inspire and to prepare the next wave of Indian Entrepreneurs who
            know how to create impact and keep on innovating!
          </div>
        </div>
      </div>
    )
  }
}

export default About
