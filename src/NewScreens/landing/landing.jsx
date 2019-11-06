import React, { Component } from "react";
import "./css/landing.scss";
import jump from "jump.js";
import { Element } from "react-scroll";
import Testimonials from "./testimonials";
import FAQBoard from "./faqs";
import About from "./about";
import Events from "./events";
import Speakers from "./speakers";
import Sponsors from "./sponsors";
import Footer from "../IdeaStorm/footer/eventfooter";
import { NavLink } from "react-router-dom";
import MobileNav from "./mobile_nav/header";
// import VideoMP from "./static/WebsiteVideo.mp4";
// import MobileVid from "./static/WebsiteVideo.webm";
// import VideoOGV from "./static/WebsiteVideo.ogv";
import MobileVid from "./static/Mobile.gif";

import Nav from "./nav/nav.jsx";

export default class LandingPage extends Component {
  jum = () => {
    jump(".land_screen1");
  };

  state = {
    faq: [{
      "id": 31,
      "faq_type": {
          "type_name": "Homepage"
      },
      "question": "How to reach Roorkee?",
      "answer": "Airport: The nearest airport is situated in Dehradun, around 70 km away which is well connected with Roorkee by a bus or taxi.\r\nRailways: Trains are the most convenient way to reach Roorkee. Roorkee has a well-connected railway station.\r\nBus/taxi: Roorkee is well-connected by roads too. One can easily board a bus to Roorkee from Delhi, Jaipur etc. A taxi is also an option but one should be careful that the road isn’t an exact expressway."
  },
  {
      "id": 32,
      "faq_type": {
          "type_name": "Homepage"
      },
      "question": "How to reach IIT Roorkee?",
      "answer": "After reaching to Roorkee, one can easily take an E-rickshaw. The bus station is situated at a distance of 100 metres and the railway station is at a distance of 3 km from the main gate of IIT Roorkee."
  },
  {
      "id": 33,
      "faq_type": {
          "type_name": "Homepage"
      },
      "question": "What’s the weather of Roorkee in February?",
      "answer": "The weather of Roorkee is quite freezy in February. The minimum temperature is around 8 degrees and the maximum is about 21 degrees."
  },
  {
      "id": 34,
      "faq_type": {
          "type_name": "Homepage"
      },
      "question": "Are personal vehicles allowed inside the campus?",
      "answer": "No."
  },
  {
      "id": 35,
      "faq_type": {
          "type_name": "Homepage"
      },
      "question": "From where I can get the updates about E-Summit 2019?",
      "answer": "For all the latest updates, visit our facebook page facebook.com/ecelliitr"
  },
  {
      "id": 36,
      "faq_type": {
          "type_name": "Homepage"
      },
      "question": "What will be covered in the overall fee of INR 1800?",
      "answer": "The Overall Fee will cover the participation fees for all the competitions of E-Summit ‘19. Accomodation and food in the hostel mess will be provided alongwith attendee kits and certificates."
  },
  {
      "id": 37,
      "faq_type": {
          "type_name": "Homepage"
      },
      "question": "Can I register On-Spot?",
      "answer": "Yes, you can register On-Spot on both 2nd and 3rd February 2019 in IIT Roorkee Campus at the Registration Desks. On-Spot Registrations for various events except IdeaStorm, The Case Study Challenge and Productathon of E-Summit will be possible."
  }],
  };

  render() {
    return (
      <div>
        <Nav />
        <MobileNav />
        <section id="screen1">
          <div className="land_screen1">
            <div className="PcVid">
              <img src={MobileVid} />
            </div>

            <div className="MobVid">
              <img src={MobileVid} />
            </div>

            <NavLink to="/register">
              <button>REGISTER NOW</button>
            </NavLink>
          </div>
        </section>
        <About />
        <Events />
        <Speakers />
        <Sponsors />

        <Testimonials />
        <FAQBoard faqList={this.state.faq} isHomePage />

        <Element id="talk" name="contact">
          <Footer />
        </Element>
      </div>
    );
  }
}
