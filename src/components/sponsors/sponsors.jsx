import React, { Component } from 'react'
import Ah from '../../assets/sponsors/ah.png'
import Aha from '../../assets/sponsors/aha.png'
import Blogadda from '../../assets/sponsors/blogadda.png'
import AmarUjala from '../../assets/sponsors/amarujala.webp'
import Boudhik from '../../assets/sponsors/Boudhik.png'
import CBlock from '../../assets/sponsors/CBlock.png'
import Circle from '../../assets/sponsors/circle.png'
import Ctim from '../../assets/sponsors/Ctim.png'
import Dare2compete from '../../assets/sponsors/dare2compete.png'
import Devfolio from '../../assets/sponsors/devfolio.png'
import Amazworkplace from '../../assets/sponsors/download.png'
import Dribble from '../../assets/sponsors/dribble.svg'
import DuAssassins from '../../assets/sponsors/du-assassins.png'
import duExpress from '../../assets/sponsors/du-express.png'
import entrepreneurindia from '../../assets/sponsors/entrepreneurindia.jpg'
import edtimes from '../../assets/sponsors/edtimes.jpg'
import FDC from '../../assets/sponsors/FDC.png'
import GDG from '../../assets/sponsors/GDG.png'
import geekforgeeks from '../../assets/sponsors/geekforgeeks.png'
import grabon from '../../assets/sponsors/grabon.png'
import hackerearth from '../../assets/sponsors/hackerearth.png'
import IITRAM from '../../assets/sponsors/IITRAM.png'
import inc42 from '../../assets/sponsors/inc42.png'
import Indigram from '../../assets/sponsors/Indigram.png'
import innovians from '../../assets/sponsors/innovians.png'
import JetBrains from '../../assets/sponsors/JetBrains.png'
import kaggle from '../../assets/sponsors/kaggle.png'
import Kolkata from '../../assets/sponsors/Kolkata.png'
import kuku from '../../assets/sponsors/kuku.png'
import KYT from '../../assets/sponsors/KYT.png'
import linkedinlocal from '../../assets/sponsors/linkedinlocal.jpg'
import marwari from '../../assets/sponsors/marwari.png'
import msgi from '../../assets/sponsors/msgi.png'
import Napino from '../../assets/sponsors/Napino.png'
import Nexus from '../../assets/sponsors/Nexus.png'
import oyo from '../../assets/sponsors/oyo.png'
import Revvx from '../../assets/sponsors/Revvx.png'
import Rosenfeld from '../../assets/sponsors/Rosenfeld.png'
import Savage from '../../assets/sponsors/Savage.png'
import Siemens from '../../assets/sponsors/Siemens.png'
import skillenza from '../../assets/sponsors/skillenza.png'
import Slider from '../../assets/sponsors/Slider.jpg'
import speciale from '../../assets/sponsors/speciale.png'
import startupBbuddy from '../../assets/sponsors/startup-buddy.png'
import startuptaly from '../../assets/sponsors/startuptaly.png'
import thecollegefever from '../../assets/sponsors/Thecollegefever.png'
import tides from '../../assets/sponsors/tides.png'
import varta from '../../assets/sponsors/varta.png'
import yourstory from '../../assets/sponsors/yourstory.png'
import youth from '../../assets/sponsors/youth.png'
import zomato from '../../assets/sponsors/zomato.png'
import iitr from '../../assets/sponsors/iitr.png'
import './sponsors.css'
class Sponsors extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount(){
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="sponsorsLanding">
        <div className="sponsorTitle">SPONSORS</div>
        <br />
        <div className="titleSponsor">
          <img src={iitr} alt="sorry" />
          <p>TITLE SPONSOR</p>
        </div>
        <div className="normalSponsors">
          <div className="sponsorimage">
            <img src={iitr} alt="sorry" />
            <p>IIT ROORKEE</p>
          </div>
          <div className="sponsorimage">
            <img src={Ah} alt="sorry" />
            <p>AH! VENTURES</p>
          </div>
          <div className="sponsorimage">
            <img src={Aha} alt="sorry" />
            <p>AHA TAXIS</p>
          </div>
          <div className="sponsorimage">
            <img src={Blogadda} alt="sorry" />
            <p>BLOAGADDA</p>
          </div>
          <div className="sponsorimage">
            <img src={AmarUjala} alt="sorry" />
            <p>AMAR UJALA</p>
          </div>
          <div className="sponsorimage">
            <img src={Boudhik} alt="sorry" />
            <p>BOUDHIK VENTURES</p>
          </div>
          <div className="sponsorimage">
            <img src={CBlock} alt="sorry" />
            <p>CODING BLOCKS</p>
          </div>
          <div className="sponsorimage">
            <img src={Circle} alt="sorry" />
            <p>THE CIRCLE.WORK</p>
          </div>
          <div className="sponsorimage">
            <img src={Ctim} alt="sorry" />
            <p>CREATIVE TIM</p>
          </div>
          <div className="sponsorimage">
            <img src={Dare2compete} alt="sorry" />
            <p>DARE2OMPETE</p>
          </div>
          <div className="sponsorimage">
            <img src={Devfolio} alt="sorry" />
            <p>DEVFOLIO</p>
          </div>
          <div className="sponsorimage">
            <img src={Amazworkplace} alt="sorry" />
            <p>AMAZING WORKPLACES</p>
          </div>
          <div className="sponsorimage">
            <img src={Dribble} alt="sorry" />
            <p>DRIBBLE</p>
          </div>
          <div className="sponsorimage">
            <img src={DuAssassins} alt="sorry" />
            <p>DU ASSASSINS</p>
          </div>
          <div className="sponsorimage">
            <img src={duExpress} alt="sorry" />
            <p>DU EXPRESS</p>
          </div>
          <div className="sponsorimage">
            <img src={entrepreneurindia} alt="sorry" />
            <p>ENTREPRENEUR INDIA</p>
          </div>
          <div className="sponsorimage">
            <img src={edtimes} alt="sorry" />
            <p>ED TIMES</p>
          </div>
          <div className="sponsorimage">
            <img src={FDC} alt="sorry" />
            <p>FACEBOOK<br />DEVELOPMENT CIRCLES</p>
          </div>
          <div className="sponsorimage">
            <img src={GDG} alt="sorry" />
            <p>GOOGLE<br />DEVELOPER GROUPS</p>
          </div>
          <div className="sponsorimage">
            <img src={geekforgeeks} alt="sorry" />
            <p>GEEKSFORGEEKS</p>
          </div>
          <div className="sponsorimage">
            <img src={grabon} alt="sorry" />
            <p>GRABON</p>
          </div>
          <div className="sponsorimage">
            <img src={hackerearth} alt="sorry" />
            <p>HACKEREARTH</p>
          </div>
          <div className="sponsorimage">
            <img src={IITRAM} alt="sorry" />
            <p>IITRAM</p>
          </div>
          <div className="sponsorimage">
            <img src={inc42} alt="sorry" />
            <p>INC42</p>
          </div>
          <div className="sponsorimage">
            <img src={Indigram} alt="sorry" />
            <p>INDIGRAM</p>
          </div>
          <div className="sponsorimage">
            <img src={innovians} alt="sorry" />
            <p>INNOVIANS</p>
          </div>
          <div className="sponsorimage">
            <img src={JetBrains} alt="sorry" />
            <p>JET BRAINS</p>
          </div>
          <div className="sponsorimage">
            <img src={kaggle} alt="sorry" />
            <p>KAGGLE</p>
          </div>
          <div className="sponsorimage">
            <img src={Kolkata} alt="sorry" />
            <p>KOLKATA VENTURES</p>
          </div>
          <div className="sponsorimage">
            <img src={kuku} alt="sorry" />
            <p>KUKU FM</p>
          </div>
          <div className="sponsorimage">
            <img src={KYT} alt="sorry" />
            <p>KYT VENTURES</p>
          </div>
          <div className="sponsorimage">
            <img src={linkedinlocal} alt="sorry" />
            <p>LINKEDIN LOCAL</p>
          </div>
          <div className="sponsorimage">
            <img src={marwari} alt="sorry" />
            <p>MARWARI CATALYSTS</p>
          </div>
          <div className="sponsorimage">
            <img src={msgi} alt="sorry" />
            <p>MSGI</p>
          </div>
          <div className="sponsorimage">
            <img src={Napino} alt="sorry" />
            <p>NAPINO</p>
          </div>
          <div className="sponsorimage">
            <img src={Nexus} alt="sorry" />
            <p>NEXUS VENTURES</p>
          </div>
          <div className="sponsorimage">
            <img src={oyo} alt="sorry" />
            <p>OYO WORKPLACES</p>
          </div>
          <div className="sponsorimage">
            <img src={Revvx} alt="sorry" />
            <p>REVVX</p>
          </div>
          <div className="sponsorimage">
            <img src={Rosenfeld} alt="sorry" />
            <p>ROSENFELD</p>
          </div>
          <div className="sponsorimage">
            <img src={Savage} alt="sorry" />
            <p>SAVAGE HUMANS</p>
          </div>
          <div className="sponsorimage">
            <img src={Siemens} alt="sorry" />
            <p>SIEMENS</p>
          </div>
          <div className="sponsorimage">
            <img src={skillenza} alt="sorry" />
            <p>SKILLENZA</p>
          </div>
          <div className="sponsorimage">
            <img src={Slider} alt="sorry" />
            <p>SLIDER</p>
          </div>
          <div className="sponsorimage">
            <img src={speciale} alt="sorry" />
            <p>SPECIALE INVEST</p>
          </div>
          <div className="sponsorimage">
            <img src={startupBbuddy} alt="sorry" />
            <p>STARTUP BUDDY</p>
          </div>
          <div className="sponsorimage">
            <img src={startuptaly} alt="sorry" />
            <p>STARTUP TALKY</p>
          </div>
          <div className="sponsorimage">
            <img src={thecollegefever} alt="sorry" />
            <p>THE COLLEGE FEVER</p>
          </div>
          <div className="sponsorimage">
            <img src={tides} alt="sorry" />
            <p>TIDES</p>
          </div>
          <div className="sponsorimage">
            <img src={varta} alt="sorry" />
            <p>CAMPUS VARTA</p>
          </div>
          <div className="sponsorimage">
            <img src={yourstory} alt="sorry" />
            <p>YOURSTORY</p>
          </div>
          <div className="sponsorimage">
            <img src={youth} alt="sorry" />
            <p>YOUTH</p>
          </div>
          <div className="sponsorimage">
            <img src={zomato} alt="sorry" />
            <p>ZOMATO<br />FEEDING INDIA</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Sponsors
