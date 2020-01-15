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
import Amazworkplace from '../../assets/sponsors/download.png'
import Dribble from '../../assets/sponsors/dribble.svg'
import DuAssassins from '../../assets/sponsors/du-assassins.png'
import duExpress from '../../assets/sponsors/du-express.png'
import entrepreneurindia from '../../assets/sponsors/entrepreneurindia.jpg'
import Iitrhf from '../../assets/sponsors/iitrhf.png'
import edtimes from '../../assets/sponsors/edtimes.jpg'
import edufabrica from '../../assets/sponsors/edufabrica.jpg'
import FDC from '../../assets/sponsors/FDC.png'
import iitraa from '../../assets/sponsors/iitraa.gif'
import AmazonLaunchpad from '../../assets/sponsors/amazon-launchpad.png'
import faadventures from '../../assets/sponsors/faadventures.png'
import GDG from '../../assets/sponsors/GDG.png'
import geekforgeeks from '../../assets/sponsors/geekforgeeks.png'
import grabon from '../../assets/sponsors/grabon.png'
import hackerearth from '../../assets/sponsors/hackerearth.png'
import horsestable from '../../assets/sponsors/horses-table.jpg'
import inc42 from '../../assets/sponsors/inc42.png'
import Indigram from '../../assets/sponsors/Indigram.png'
import innovians from '../../assets/sponsors/innovians.png'
import inventus from '../../assets/sponsors/inventus.png'
import kaggle from '../../assets/sponsors/kaggle.png'
import kredx from '../../assets/sponsors/KredX.png'
import Kolkata from '../../assets/sponsors/Kolkata.png'
import kuku from '../../assets/sponsors/kuku.png'
import KYT from '../../assets/sponsors/KYT.png'
import linkedinlocal from '../../assets/sponsors/linkedinlocal.jpg'
import marwari from '../../assets/sponsors/marwari.png'
import msg91 from '../../assets/sponsors/ms91.jpg'
import Napino from '../../assets/sponsors/Napino.png'
import Nexus from '../../assets/sponsors/Nexus.png'
import oyo from '../../assets/sponsors/oyo.png'
import Revvx from '../../assets/sponsors/Revvx.png'
import Rosenfeld from '../../assets/sponsors/Rosenfeld.png'
import Savage from '../../assets/sponsors/Savage.png'

import skillenza from '../../assets/sponsors/skillenza.png'
import Slider from '../../assets/sponsors/Slider.jpg'
import speciale from '../../assets/sponsors/speciale.png'
import startupBbuddy from '../../assets/sponsors/startup-buddy.png'
import startupangel from '../../assets/sponsors/startupangel.jpg'
import startupmonk from '../../assets/sponsors/startupmonk.jpg'
import startupnews from '../../assets/sponsors/startupnews.png'

import startuptaly from '../../assets/sponsors/startuptaly.png'
import tinkeringlabs from '../../assets/sponsors/tinkeringlabs.png'

import thecollegefever from '../../assets/sponsors/Thecollegefever.png'
import tides from '../../assets/sponsors/tides.png'
import unesco from '../../assets/sponsors/unesco.jpeg'

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
  componentDidMount() {
    window.scrollTo(0, 0)
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
            <img src={Iitrhf} alt="sorry" className="sponsorImage-background" />
            <p>IITR Heritage Fund</p>
          </div>
          <div className="sponsorimage">
            <img src={Ah} alt="sorry" className="sponsorImage-background" />
            <p>AH! VENTURES</p>
          </div>
          <div className="sponsorimage">
            <img src={Aha} alt="sorry" className="sponsorImage-background" />
            <p>AHA TAXIS</p>
          </div>
          <div className="sponsorimage">
            <img
              src={Blogadda}
              alt="sorry"
              className="sponsorImage-background"
            />
            <p>BLOAGADDA</p>
          </div>
          <div className="sponsorimage">
            <img
              src={AmarUjala}
              alt="sorry"
              className="sponsorImage-background"
            />
            <p>AMAR UJALA</p>
          </div>
          <div className="sponsorimage">
            <img
              src={Boudhik}
              alt="sorry"
              className="sponsorImage-background"
            />
            <p>BOUDHIK VENTURES</p>
          </div>
          <div className="sponsorimage">
            <img src={CBlock} alt="sorry" className="sponsorImage-background" />
            <p>CODING BLOCKS</p>
          </div>
          <div className="sponsorimage">
            <img src={Circle} alt="sorry" className="sponsorImage-background" />
            <p>THE CIRCLE.WORK</p>
          </div>
          <div className="sponsorimage">
            <img src={Ctim} alt="sorry" className="sponsorImage-background" />
            <p>CREATIVE TIM</p>
          </div>
          <div className="sponsorimage">
            <img
              src={Dare2compete}
              alt="sorry"
              className="sponsorImage-background"
            />
            <p>DARE2OMPETE</p>
          </div>

          <div className="sponsorimage">
            <img
              src={Amazworkplace}
              alt="sorry"
              className="sponsorImage-background"
            />
            <p>AMAZING WORKPLACES</p>
          </div>
          <div className="sponsorimage">
            <img
              src={Dribble}
              alt="sorry"
              className="sponsorImage-background"
            />
            <p>DRIBBLE</p>
          </div>
          <div className="sponsorimage">
            <img
              src={DuAssassins}
              alt="sorry"
              className="sponsorImage-background"
            />
            <p>DU ASSASSINS</p>
          </div>
          <div className="sponsorimage">
            <img
              src={duExpress}
              alt="sorry"
              className="sponsorImage-background"
            />
            <p>DU EXPRESS</p>
          </div>
          <div className="sponsorimage">
            <img
              src={entrepreneurindia}
              alt="sorry"
              className="sponsorImage-background"
            />
            <p>ENTREPRENEUR INDIA</p>
          </div>
          <div className="sponsorimage">
            <img
              src={edtimes}
              alt="sorry"
              className="sponsorImage-background"
            />
            <p>ED TIMES</p>
          </div>
          <div className="sponsorimage">
            <img
              src={edufabrica}
              alt="sorry"
              className="sponsorImage-background"
            />
            <p>EDUFABRICA</p>
          </div>
          <div className="sponsorimage">
            <img
              src={faadventures}
              alt="sorry"
              className="sponsorImage-background"
            />
            <p>FAADVENTURES</p>
          </div>
          <div className="sponsorimage">
            <img src={FDC} alt="sorry" className="sponsorImage-background" />
            <p>
              FACEBOOK
              <br />
              DEVELOPMENT CIRCLES
            </p>
          </div>
          <div className="sponsorimage">
            <img src={GDG} alt="sorry" className="sponsorImage-background" />
            <p>
              GOOGLE
              <br />
              DEVELOPER GROUPS
            </p>
          </div>
          <div className="sponsorimage">
            <img
              src={geekforgeeks}
              alt="sorry"
              className="sponsorImage-background"
            />
            <p>GEEKSFORGEEKS</p>
          </div>
          <div className="sponsorimage">
            <img src={grabon} alt="sorry" className="sponsorImage-background" />
            <p>GRABON</p>
          </div>
          <div className="sponsorimage">
            <img
              src={hackerearth}
              alt="sorry"
              className="sponsorImage-background"
            />
            <p>HACKEREARTH</p>
          </div>
          <div className="sponsorimage">
            <img
              src={horsestable}
              alt="sorry"
              className="sponsorImage-background"
            />
            <p>HORSES TABLE</p>
          </div>
          <div className="sponsorimage">
            <img src={iitraa} alt="sorry" className="sponsorImage-background" />
            <p>IITRAA</p>
          </div>
          <div className="sponsorimage">
            <img src={inc42} alt="sorry" className="sponsorImage-background" />
            <p>INC42</p>
          </div>
          <div className="sponsorimage">
            <img
              src={inventus}
              alt="sorry"
              className="sponsorImage-background"
            />
            <p>INVENTUS INDIA</p>
          </div>
          <div className="sponsorimage">
            <img
              src={Indigram}
              alt="sorry"
              className="sponsorImage-background"
            />
            <p>INDIGRAM</p>
          </div>
          <div className="sponsorimage">
            <img
              src={innovians}
              alt="sorry"
              className="sponsorImage-background"
            />
            <p>INNOVIANS</p>
          </div>
          {/* <div className="sponsorimage">
            <img src={inventus} alt="sorry" className="sponsorImage-background" />
            <p>INVENTUS INDIA</p>
          </div> */}
          <div className="sponsorimage">
            <img src={kaggle} alt="sorry" className="sponsorImage-background" />
            <p>KAGGLE</p>
          </div>
          <div className="sponsorimage">
            <img
              src={Kolkata}
              alt="sorry"
              className="sponsorImage-background"
            />
            <p>KOLKATA VENTURES</p>
          </div>
          <div className="sponsorimage">
            <img src={kredx} alt="sorry" className="sponsorImage-background" />
            <p>KREDx</p>
          </div>
          <div className="sponsorimage">
            <img src={kuku} alt="sorry" className="sponsorImage-background" />
            <p>KUKU FM</p>
          </div>
          <div className="sponsorimage">
            <img src={KYT} alt="sorry" className="sponsorImage-background" />
            <p>KYT VENTURES</p>
          </div>
          <div className="sponsorimage">
            <img
              src={linkedinlocal}
              alt="sorry"
              className="sponsorImage-background"
            />
            <p>LINKEDIN LOCAL</p>
          </div>
          <div className="sponsorimage">
            <img
              src={marwari}
              alt="sorry"
              className="sponsorImage-background"
            />
            <p>MARWARI CATALYSTS</p>
          </div>
          <div className="sponsorimage">
            <img src={msg91} alt="sorry" className="sponsorImage-background" />
            <p>MSG91</p>
          </div>
          <div className="sponsorimage">
            <img src={Napino} alt="sorry" className="sponsorImage-background" />
            <p>NAPINO</p>
          </div>
          <div className="sponsorimage">
            <img src={Nexus} alt="sorry" className="sponsorImage-background" />
            <p>NEXUS VENTURES</p>
          </div>
          <div className="sponsorimage">
            <img src={oyo} alt="sorry" className="sponsorImage-background" />
            <p>OYO WORKPLACES</p>
          </div>
          <div className="sponsorimage">
            <img src={Revvx} alt="sorry" className="sponsorImage-background" />
            <p>REVVX</p>
          </div>
          <div className="sponsorimage">
            <img
              src={Rosenfeld}
              alt="sorry"
              className="sponsorImage-background"
            />
            <p>ROSENFELD</p>
          </div>
          <div className="sponsorimage">
            <img src={Savage} alt="sorry" className="sponsorImage-background" />
            <p>SAVAGE HUMANS</p>
          </div>

          <div className="sponsorimage">
            <img
              src={skillenza}
              alt="sorry"
              className="sponsorImage-background"
            />
            <p>SKILLENZA</p>
          </div>
          <div className="sponsorimage">
            <img src={Slider} alt="sorry" className="sponsorImage-background" />
            <p>SLIDER</p>
          </div>
          <div className="sponsorimage">
            <img
              src={speciale}
              alt="sorry"
              className="sponsorImage-background"
            />
            <p>SPECIALE INVEST</p>
          </div>
          <div className="sponsorimage">
            <img
              src={startupangel}
              alt="sorry"
              className="sponsorImage-background"
            />
            <p>STARTUP ANGEL ASIA</p>
          </div>
          <div className="sponsorimage">
            <img
              src={startupBbuddy}
              alt="sorry"
              className="sponsorImage-background"
            />
            <p>STARTUP BUDDY</p>
          </div>
          <div className="sponsorimage">
            <img
              src={startuptaly}
              alt="sorry"
              className="sponsorImage-background"
            />
            <p>STARTUP TALKY</p>
          </div>
          <div className="sponsorimage">
            <img
              src={startupmonk}
              alt="sorry"
              className="sponsorImage-background"
            />
            <p>STARTUP MONK</p>
          </div>
          <div className="sponsorimage">
            <img
              src={startupnews}
              alt="sorry"
              className="sponsorImage-background"
            />
            <p>STARTUP NEWS</p>
          </div>
          <div className="sponsorimage">
            <img
              src={thecollegefever}
              alt="sorry"
              className="sponsorImage-background"
            />
            <p>THE COLLEGE FEVER</p>
          </div>
          <div className="sponsorimage">
            <img src={tides} alt="sorry" className="sponsorImage-background" />
            <p>TIDES</p>
          </div>
          <div className="sponsorimage">
            <img
              src={tinkeringlabs}
              alt="sorry"
              className="sponsorImage-background"
            />
            <p>TINKERING LABS</p>
          </div>
          <div className="sponsorimage">
            <img src={unesco} alt="sorry" className="sponsorImage-background" />
            <p>UNESCO</p>
          </div>
          <div className="sponsorimage">
            <img src={varta} alt="sorry" className="sponsorImage-background" />
            <p>CAMPUS VARTA</p>
          </div>
          <div className="sponsorimage">
            <img
              src={yourstory}
              alt="sorry"
              className="sponsorImage-background"
            />
            <p>YOURSTORY</p>
          </div>
          <div className="sponsorimage">
            <img src={youth} alt="sorry" className="sponsorImage-background" />
            <p>YOUTH</p>
          </div>
          <div className="sponsorimage">
            <img src={zomato} alt="sorry" className="sponsorImage-background" />
            <p>
              ZOMATO
              <br />
              FEEDING INDIA
            </p>
          </div>
          <div className="sponsorimage">
            <img
              src={AmazonLaunchpad}
              alt="sorry"
              className="sponsorImage-background"
            />
            <p>Amazon Launchpad</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Sponsors
