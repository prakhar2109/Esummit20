import React, { Component } from "react";
import "./ambasder.scss";
import Login from "../../components/login/login";
import Nav from "../nav/nav";
import Header from "../../components/header";
import Bullets from "../../components/bullets/bullets";
import Coordinator from "../../components/contact/contact";
import Footer from "../IdeaStorm/footer/eventfooter";
import MobileNav from "../mobile_nav/header";
import { NavLink } from "react-router-dom"


export default class CampusAmbasder extends Component {
  show = () => {
    document.getElementById("log").style.display = "block";
  };
  render() {
    let data = [
      {
        value:
          "For every successful payment from the participants who have             registered from the referral link, the CA would be awarded 10%               off on each payment on the registration plus accommodation fees for E - Summit               2019.",
      },

      {
        value:
          "An official certificate from E - Summit IIT Roorkee will be             provided as an acknowledgment of your work as a CA for the same.",
      },
      {
        value:
          " Endorsement of your LinkedIn profile by E - Summit IIT Roorkee.",
      },
      {
        value:
          "Other additional goodies and benefits will be awarded to the top             performing CAs.",
      },
    ];


    let contact = [
      {
        "name": "Aman Kumar",
        "email": "akumar@mt.iitr.ac.in",
        "number": '7302200596'

      }
    ]
    return (
      <>
        <Nav />
        <MobileNav />
        <div className="ambasder">
          <p>CAMPUS AMBASSADOR</p>

          <p>
            The CAP( Campus Ambassador Programme) is a pinion initiative of
            E-Summit IIT Roorkee, 2018 organized by the Entrepreneurship Cell,
            IIT Roorkee and aims to amplify our purview to newer horizons. We
            aspire to increase our outreach to as many students as possible
            throughout the country and spread the spirit of entrepreneurship to
            similar extents. This year E-Summit IIT Roorkee brings with it loads
            and loads of colossal opportunities for the participating students
            and exciting perks for the Campus Ambassadors.
          </p>
          <center>
            <NavLink to="/login">
              <span className="login">

                Login
            </span>
            </NavLink>

            <NavLink to="/register">
              <span className="register">Register</span>
            </NavLink>
          </center>
        </div>

        <div className="about_ambasder">
          <Header title="WHAT YOU HAVE TO DO?" />
          <p>
            Being a Campus Ambassador, you have to help the organizing team of
            E-Summit 2019 to reach out to the students and organizations
            associated with your college. You are supposed to promote our events
            through online and offline means. For more details regarding the
            tasks and awards, register as a CA and get access to the illustrious
            rulebook that we have drafted specially for you.
          </p>
        </div>

        <Bullets data={data} title="THE EXCITING PERKS" />
        <Coordinator data={contact} title="FOR QUERIES" />

        <Login />
        <Footer />
      </>
    );
  }
}
