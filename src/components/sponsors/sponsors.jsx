import React, { Component } from 'react'
import Sponsor1 from '../../assets/ideastorm.png'
import './sponsors.css'
class Sponsors extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="sponsorsLanding">
        <div className="sponsorTitle">SPONSORS</div>
        <br />
        <div className="titleSponsor">
          <img src={Sponsor1} alt="sorry" />
          <p>TITLE SPONSOR</p>
        </div>
        <div className="normalSponsors">
          <div className="sponsorimage">
            <img src={Sponsor1} alt="sorry" />
            <p>MERCHANDISE</p>
          </div>
          <div className="sponsorimage">
            <img src={Sponsor1} alt="sorry" />
            <p>MERCHANDISE</p>
          </div>
          <div className="sponsorimage">
            <img src={Sponsor1} alt="sorry" />
            <p>MERCHANDISE</p>
          </div>
          <div className="sponsorimage">
            <img src={Sponsor1} alt="sorry" />
            <p>MERCHANDISE</p>
          </div>
          <div className="sponsorimage">
            <img src={Sponsor1} alt="sorry" />
            <p>MERCHANDISE</p>
          </div>
          <div className="sponsorimage">
            <img src={Sponsor1} alt="sorry" />
            <p>MERCHANDISE</p>
          </div>
          <div className="sponsorimage">
            <img src={Sponsor1} alt="sorry" />
            <p>MERCHANDISE</p>
          </div>
          <div className="sponsorimage">
            <img src={Sponsor1} alt="sorry" />
            <p>MERCHANDISE</p>
          </div>
          <div className="sponsorimage">
            <img src={Sponsor1} alt="sorry" />
            <p>MERCHANDISE</p>
          </div>
          <div className="sponsorimage">
            <img src={Sponsor1} alt="sorry" />
            <p>MERCHANDISE</p>
          </div>
          <div className="sponsorimage">
            <img src={Sponsor1} alt="sorry" />
            <p>MERCHANDISE</p>
          </div>
          <div className="sponsorimage">
            <img src={Sponsor1} alt="sorry" />
            <p>MERCHANDISE</p>
          </div>
          <div className="sponsorimage">
            <img src={Sponsor1} alt="sorry" />
            <p>MERCHANDISE</p>
          </div>
          <div className="sponsorimage">
            <img src={Sponsor1} alt="sorry" />
            <p>MERCHANDISE</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Sponsors
