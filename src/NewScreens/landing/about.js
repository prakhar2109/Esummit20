import React, { Component } from 'react';
import Header from '../../components/header';

class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="land_screen2">
          <Header title="WHAT IS E-SUMMIT?" />
          <p className="p">
                        Indian Institute of Technology, Roorkee has a history of creating leaders and pioneers of
                        different fields for over 150 years. In the modern day world, entrepreneurs are at the
                        spearhead of solving the world’s problems. To celebrate these facts, E-Summit IIT
                        Roorkee brings a platform to celebrate the history and the spirit of entrepreneurship; and
                        to inspire the leaders and roblem solvers of today and tomorrow.
                        This 2-day extravaganza will see students, corporates, entrepreneurs and budding
                        enthusiasts on a common stage. This event in IIT Roorkee will surely prove to be the
                        home of extensive networking, inspiring stories and a breeding ground for future
                        solutions. We look forward to making you a part of this celebration and hopefully build a
                        thriving long-term partnership.
          </p>
          <Header title="THEME: BUILDING FOR THE BILLION" />
          <p className="p">
                        Several business ventures work out and end up as successes and unfortunately,
                        a lot more of them don’t. But all of them share a common denominator, they
                        started out as an IDEA. It doesn’t matter where you get it, under the shower, on
                        an evening walk or at the coffee table. Some are good, some bad, and some might
                        be brilliant. But they are just that – ideas. It’s crucial to give it a chance.
                        Your mind is for having ideas, not holding on to them. The whole prospect of
                        “realizing an idea” sure might seem daunting. But you can either man up and do
                        your best to turn it into reality or you can chicken out and leave the idea be
                        just that – an idea.
          </p>
        </div>
      </section>
    );
  }
}

export default About;
