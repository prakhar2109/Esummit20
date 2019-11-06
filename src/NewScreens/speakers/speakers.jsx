import React, { Component } from "react";
import "./speakers.scss";
import Header from "../../components/header";
import Nav from "../nav/nav";
import Footer from "../IdeaStorm/footer/eventfooter";
import Testimonial from "../landing/testimonials";
import MobileNav from "../mobile_nav/header";
import axios from "axios";
import { BASE_URL } from "../../utils/urls"

export default class speakers extends Component {
  componentDidMount() {
    axios
      .get(BASE_URL + "/v1/api/speakers/")
      .then(res => {
        this.setState({
          speakers: res.data,
        });
      })
  }
  state = {
    speakers: [

    ],
  };
  render() {
    return (
      <>
        <Nav />
        <MobileNav />

        <div className="speakers">
          <Header title="SPEAKERS" />
 

          <div className="speakers_array">
            {this.state.speakers.map(update => {
              return (
                <div key={update.id}>
                  <div className="img_holder">
                    <img alt="profile" src={BASE_URL + update.profile_image} />
                  </div>

                  <p className="name">{update.name}</p>
                  <p className="designation">{update.designation}</p>
                </div>
              );
            })}
          </div>
        </div>

        <Testimonial />
        <Footer />
      </>
    );
  }
}
