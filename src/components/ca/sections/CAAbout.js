import React, { Component } from 'react'
import roleHeading from '../../../assets/role.svg'
import perksHeading from '../../../assets/perks.svg'
class CAAbout extends Component {
  render() {
    return (
      <div className="ca-section-about-container">
        <div className="ca-section-content-container">
          <img src={roleHeading} className="section-image-heading" alt="" />
          <div className="ca-section-paragraph">
            Being a Campus Ambassador, you have to help the organizing team of
            E-Summit 2019 to reach out to the students and organizations
            associated with your college. You are supposed to promote our events
            through online and offline means. For more details regarding the
            tasks and awards, register as a CA and get access to the illustrious
            rulebook that we have drafted specially for you.
          </div>
        </div>
        <div className="ca-section-content-container">
          <img src={perksHeading} className="section-image-heading" alt="" />
          <div className="ca-section-paragraph">
            1. For every successful payment from the participants who have
            registered from the referral link, the CA would be awarded Rs.150
            off on the registration plus accommodation fees for E - Summit 2019.
          </div>
          <div className="ca-section-paragraph">
            2. An official certificate from E - Summit IIT Roorkee will be
            provided as an acknowledgment of your work as a CA for the same.
          </div>
          <div className="ca-section-paragraph">
            3. Endorsement of your LinkedIn profile by E - Summit IIT Roorkee.
          </div>
          <div className="ca-section-paragraph">
            4. Other additional goodies and benefits will be awarded to the top
            performing CAs.
          </div>
        </div>
      </div>
    )
  }
}

export default CAAbout
