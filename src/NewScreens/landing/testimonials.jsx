import React, { Component } from 'react';
import Richard from "./static/varun.jpg";
import "./css/landing.scss";

class Testimonials extends Component {
    render() {
        return (
            <section id="testinomial">
            <div className="land_testinomial">
                <div>
                    <img src={Richard} alt="Richard"/>
                    <p className = "testimonial">For me the E-Summit’18 was a great success. It was my honour to be invited and to be a part of the event which promotes the spirit of entrepreneurship. The young enthusiastic and highly energetic team did a spectacular job. Absolutely delighted to be a speaker at this inspiring event and I wish all the very best to all the IIT Roorkee team members for the upcoming events and conferences.”</p>
                    <p className="name">
                    Varun Sheth</p>
                    <p className="designation">CEO and Founder Ketto</p>
                </div>
            </div>
        </section>
        );
    }
}

export default Testimonials;