import React, { Component } from "react";
import "./ideastorm.scss";
import Header from "../../components/header";
import FAQ from "../../components/faqs";
import esummit from "./static/es.png";
import Eventfooter from "./footer/eventfooter.jsx";
import Idea from "./static/idea.png";
import jump from "jump.js";
import Eventsheader from "./Navbar/header";
import Vector from "./static/headVector.png";
import Timelineindex from "./timeline/Index.js";
import { NavLink } from "react-router-dom";
import Cash from "./static/1.png";
import Mentorship from "./static/2.png";
import Networking from "./static/3.png";
import Funding from "./static/4.png";
import Media from "./static/5.png";
import "../../screens/ignite/css/scrollanimation.css"
import FAQBoard from './../landing/faqs'
import "../landing/css/landing.scss";
import "../../screens/ignite/css/ignite.scss";
import "../../screens/ignite/css/scrollanimation.css";

export class IdeaStorm extends Component {
  state = {
    faq: [
      {
        id: 2,
        question: "What is the last date of submission?",
        answer:
          "10th of January is the last date of submission of entries for the first round of the competition.",
      },
      {
        id: 3,
        question: " Is there a participation fee for Idea Storm?",
        answer:
          "No, there is no participation fee for participation in the first round of Idea Storm.",
      },

      {
        id: 4,
        question: " How will the mentors be allocated?",
        answer:
          "Your idea will be judged by a panel of experts and then mentors will be allocated to you based on the area of their expertise.",
      },

      {
        id: 5,
        question: " How will our ideas be judged? ",
        answer: [
          "Your ideas will be judged on the basis of ",
          "innovation in your idea , " +
          "real-world problem it mitigates, " +
          "the market opportunity for the idea, " +
          " & the competitive advantage that it possesses",
        ],
      },

      {
        id: 6,
        question: " Is it compulsory to have a team to participate? ",
        answer: "Yes, you should atleast have a team size of 3 members.",
      },

      {
        id: 7,
        question: " Does my business model have to be technology related? ",
        answer:
          "No, we encourage all entries that can get mentorship,funding and be developed into a business venture.",
      },

      {
        id: 8,
        question:
          "  Can a team consists of people from different college/companies? ",
        answer:
          "Yes, team size should be in between 3 to 5. Individuals in the team can be from any organization",
      },
    ],

    current: 2,
  };

  timeline = () => {
    jump(".timeline", { offset: -130 });
  };

  Rules = () => {
    jump(".Rules", { offset: -130 });
  };

  erks = () => {
    jump(".erks", { offset: -130 });
  };

  faq_idea = () => {
    jump("#faq", { offset: -0 });
  };

  coordinator = () => {
    jump(".coordinator", { offset: -130 });
  };

  eligiblity = () => {
    jump(".eligiblity", { offset: -130 });
  };
  register = () => {
    jump(".register", { offset: -130 });
  };
  jum = () => {
    jump('#timeline')
  }

  render() {
    return (
      <div className="ideastorm">
        <Eventsheader />

        <div id="nav" className="header">
          <span>
            <img alt="IdeaStorm" src={Idea} />
          </span>

          <span className="head_array">
            <span onClick={this.timeline}>Timeline</span>

            <span onClick={this.Rules}>Rules</span>

            <span onClick={this.eligiblity}>Eligiblity</span>

            <span onClick={this.erks}>Perks</span>
            <span onClick={this.register}>Apply</span>
            <span onClick={this.faq_idea}>FAQs</span>

            <span onClick={this.coordinator}>Contact Us</span>
          </span>

          <span />
        </div>
        <div className="idea">
          <p className  = "header_idea">IDEA STORM</p>

          <p>You make it happen.</p>

          <br/>
          <br/>
          <br/>
          <p>CASH PRIZE WORTH INR 2,50,000</p>
          <p>
            Idea Storm is the annual business plan competition,conducted as a
            part of Entrepreneurship Summit, the flagship event of
            Entrepreneurship Cell IIT Roorkee. The best Ideas get mentorship
            from experienced entrepreneurs, cash rewards worth 2.5 lakhs and the
            impressive ones even have opportunity to raise funding from the VCs.
            Gear up to compete with the best minds of the country to prove your
            business acumen. This would be a perfect stage for you, If you want
            to turn your ideas into an entrepreneurial ventures
          </p>

          <div className="ignite-first-page-scroll">
                <div onClick={this.timeline} className='icon-scroll'></div> <br />
                
                <div id="ignite-first-page-scroll-child"> <p> SCROLL DOWN</p></div>
              </div>
          <center>

          </center>
           
        </div>

        <div name="timeline" id="timeline" className="timeline">
        {/* <Header title = "TIMELINE"/> */}
          <div>
            <img className="ideastorm-vector" src={Vector} alt="" />
            <p className="ideastorm-head1">TIMELINE</p>
          </div>
          <Timelineindex />
        </div>

        <div className="Rules">
          <Header title="RULES & REGULATIONS" />

          <ol>
            <li>
              Each team may consist of at least three to at most five members,
              who need not belong to the same organization.
            </li>

            <li>
              Multiple teams from the same university / organization are allowed
              to participate in the event.
            </li>

            <li>
              The decision of the judges shall be final and binding, though in
              all the rounds, E-Cell IIT Roorkee retains the right to evaluate
              all ideas and choose the eligibility criteria.
            </li>
          </ol>
        </div>

        <div className="eligiblity">
          <Header title="ELIGIBILITY CRITERIA" />
          <ol>
            <li>
              There is no restriction on any individual to participate. Members
              of all educational and professional fraternities are welcome to
              participate.
            </li>

            <li>
              Start-ups which have been incorporated more than a year ago (i.e.
              registered on or before 1 December, 2017) are not eligible to
              participate in the Idea Storm.
            </li>
            <li>
              Ventures that have acquired funding from external
              investor-networks (angels, VC's, etc) can not participate. We
              believe in promoting startups that require assistance in the form
              of seed capital, mentoring and various types of consultancies.
            </li>
          </ol>
        </div>

        <div className="erks">
          <Header title="PERKS" />
          <center>
            <div className="perks_array">
              <div className="perks_unit">
                <img src={Cash} alt="Cash Rewards" />
                <span>Cash Rewards:</span>
                Cash Prizes of INR 2,50,000.
              </div>

              <div className="perks_unit">
                <img src={Mentorship} alt="Mentorship" />
                <span>Mentorship:</span>
                Mentorship opportunities from Venture Capitalists and Industry
                Leaders.
              </div>

              <div className="perks_unit">
                <img src={Networking} alt="networking" />
                <span>Networking Session</span>
                Networking session with CXOs, Angel Investors, Venture
                Capitalists and Industry Leaders.
              </div>
              <div className="perks_unit">
                <img src={Funding} alt="Funding" />
                <span>Funding Opportunities</span>
                An opportunity to raise real time funds.
              </div>
              <div className="perks_unit">
                <img src={Media} alt="Media Coverage" />
                <span>Media Coverage</span>
                Get featured on many popular media platforms.
              </div>
            </div>
          </center>
        </div>

        <div className="register">
          <p className="register_now">Apply Now</p>

          <center>

            <a
              without rel="noopener noreferrer"
              href="https://docs.google.com/forms/d/e/1FAIpQLSeso_7FRi2A42dVvvbzRro_XA6DoKUILfW1EB0E01RAAtus2g/viewform"
              target="_blank"
            >
              <span>APPLY FOR IDEASTORM</span>
            </a>

          </center>
        </div>

        <div className="register_mobile">
          <p className="register_now">Apply Now</p>
          <p>To participate in Idea-Storm 2019 register here.</p>
          <center>
            <a
              without rel="noopener noreferrer"
              href="https://docs.google.com/forms/d/e/1FAIpQLSeso_7FRi2A42dVvvbzRro_XA6DoKUILfW1EB0E01RAAtus2g/viewform"
              target="_blank"
            >
              {" "}
              <span>APPLY FOR IDEASTORM</span>
            </a>
          </center>

        </div>
        <FAQBoard faqList={this.state.faq} />
        <div className="coordinator">
          <Header title="EVENT CO-ORDINATORS" />

          <div className="coordinator_grid">
            <div className="coordinator_unit">
              <p>Rachit Garg</p>

              <p>+91 9992929203</p>
              <p>rgarg@me.iitr.ac.in</p>
            </div>

            <div className="coordinator_unit">
              <p>Harshit Dubey</p>

              <p>+91 7412883060</p>
              <p>hdubey@ee.iitr.ac.in</p>
            </div>
          </div>
        </div>

        <div className="es">
          <center>
            <NavLink to="/">
              <img alt="Esummit Logo" src={esummit} />
            </NavLink>
          </center>

          <p>
            Go to &nbsp;
            <NavLink to="/">esummit.in</NavLink>
          </p>
        </div>
        <Eventfooter />
      </div>
    );
  }
}

export default IdeaStorm;
