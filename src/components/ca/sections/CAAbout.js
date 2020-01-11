import React, { Component } from 'react'
// import roleHeadingBackground from '../../../assets/ROLE.png'
import './caAbout.css'
// import perksHeadingBackground from '../../../assets/PERKS.png'
class CAAbout extends Component {
  render() {
    return (
      <div className="ca-section-about-container">
        <div className="section-image-heading-container" id="role-container">
          <div className="section-image-heading">ROLES</div>
          <img
            src=""
            className="section-image-heading-background"
            alt=""
            id="role-CA"
          />
        </div>
        <div className="section-paragraph caabout">
          Being a Campus Ambassador, you have to help the organizing team of
          E-Summit 2020 to reach out to the students and organizations
          associated with your college. You are supposed to promote our events
          through online and offline means. For more details regarding the tasks
          and awards, register as a CA and get access to the illustrious
          rulebook that we have drafted specially for you.
        </div>

        <div className="section-image-heading-container" id="perk-container">
          <div className="section-image-heading">THE EXCITING PERKS</div>
          <img
            src=""
            className="section-image-heading-background"
            alt=""
            id="PERKS-CA"
          />
        </div>
        <div className="section-paragraph caabout ">
          <b>1.</b>&nbsp; For every successful payment from the participants who
          have registered from the referral link, the CA would be awarded Rs.150
          off on the registration plus accommodation fees for E - Summit 2020.
        </div>
        <div className="section-paragraph caabout">
          <b>2.</b>&nbsp; An official certificate from E - Summit IIT Roorkee
          will be provided as an acknowledgment of your work as a CA for the
          same.
        </div>
        <div className="section-paragraph caabout">
          <b>3.</b>&nbsp; Endorsement of your LinkedIn profile by E - Summit IIT
          Roorkee.
        </div>
        <div className="section-paragraph caabout">
          <b>4.</b>&nbsp; Other additional goodies and benefits will be awarded
          to the top performing CAs.
        </div>
      </div>
    )
  }
}

export default CAAbout
