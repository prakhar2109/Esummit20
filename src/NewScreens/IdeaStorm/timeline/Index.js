import React, { Component } from 'react';
// import { Helmet } from "react-helmet";
import "./css/reset.css";
import "./css/style.css";
import timelinejs from "./main";

export default class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    timelinejs();
  }

  render() {
    return (
      <div className="cd-horizontal-timeline-parent">
        <section className="cd-horizontal-timeline">
          <div className="timeline">
            <div className="ideastormevents-wrapper">
              <div className="ideastormevents">
                <ol>
                  <li><a href="#0" data-date="16/01/2014" className="selected">Round 1</a></li>
                  <li><a href="#0" data-date="20/03/2014">Round 2</a></li>
                  <li><a href="#0" data-date="09/07/2014">Round 3</a></li>
                  <li><a href="#0" data-date="15/09/2014">Round 4</a></li>
                </ol>

                <span className="filling-line" aria-hidden="true" />
              </div>
            </div>

            <ul className="cd-timeline-navigation">
              <li><a href="#0" className="prev inactive">Prev</a></li>
              <li><a href="#0" className="next">Next</a></li>
            </ul>
          </div>

          <div className="ideastormevents-content">
            <ol>
              <li className="selected" data-date="16/01/2014">

                <p>
                                  In this round all the teams are required to submit an abstract of their idea along with the answers to some basic questions which will be evaluated by Industry Leaders on the basis of :
                  <br />
       &nbsp; &nbsp; &nbsp;&nbsp;1. The innovation in your idea
                  <br />
       &nbsp; &nbsp; &nbsp;&nbsp;2. The real-world problem it mitigates
                  <br />
       &nbsp; &nbsp; &nbsp;&nbsp;3. The market opportunity for the idea
                  <br />
       &nbsp; &nbsp; &nbsp;&nbsp;4. The competitive advantage that it possesses
                  <br />
The teams with the ideas which qualify the minimum eligibility criteria would be allowed to progress to the next round.
                  <br />
                  <span id="ideastormevents-content-span">Registration starts on            :</span>
                  {' '}
12 December, 2018
                  <br />
                  <span id="ideastormevents-content-span">Round 1 submission deadline :</span>
                  {' '}
10 January, 2019
                  <br />
Round 1 results will be announced in 1st week of January


                  {' '}
                </p>
              </li>

              <li data-date="20/03/2014">

                <p>
                                  In round 2 all the shortlisted 40 teams would be given the proper mentorship for 3 weeks starting from 11th of January. Mentors will be allotted to teams on the basis of the problem your idea solves. You will be provided with mentors who are experts from the industry you target
                  <br />
                  <span id="ideastormevents-content-span">Round 2 starts on  :</span>
                  {' '}
11 January, 2019

                  {' '}
                </p>
              </li>

              <li data-date="09/07/2014">

                <p>
                                   The shortlisted 40 teams would be called to E-Summit for the successive rounds.
                  <br />
     Each team will be given a time slot of 2 minutes and they would have to make an elevator pitch in front of a panel consisting of Investors and Industry Leaders. In this round, the criteria for judging would be based on:
                  <br />
       &nbsp; &nbsp; &nbsp;&nbsp;1. The problem chosen by the team to solve
                  <br />
       &nbsp; &nbsp; &nbsp;&nbsp;2. The Market they target
                  <br />
       &nbsp; &nbsp; &nbsp;&nbsp;3. Feasibility of the solution proposed
                  <br />
       &nbsp; &nbsp; &nbsp;&nbsp;4. Value offered
                  <br />
       &nbsp; &nbsp; &nbsp;&nbsp;5. Traction and progress of their idea
                  <br />
                  <span id="ideastormevents-content-span">Round 3 starts on : </span>
2 February, 2019 (Day 1 of E-Summit’19)
                  <br />
                  <span id="ideastormevents-content-span">Round 3 results : </span>
2 February, 2019 (Day 1 of E-Summit’19)
                  <br />


                </p>
              </li>

              <li data-date="15/09/2014">

                <p>
                                  Top 12 teams would be shortlisted on the basis of the elevator pitch.
                  <br />
     On 3rd February 2019, each team would be given the opportunity to pitch their ideas before a panel of venture capitalists and angel investors. Each presentation would be for 6-minutes and may be accompanied by an idea document in the form of a 10-slide PPSX file which illustrates the following:
                  <br />

       &nbsp; &nbsp; &nbsp;&nbsp;1. The innovation/differentiability of your idea
                  <br />
       &nbsp; &nbsp; &nbsp;&nbsp;2. The real-world problem it mitigates
                  <br />
       &nbsp; &nbsp; &nbsp;&nbsp;3. The market opportunity for the idea (We recommend
          PEST analysis)
                  <br />
       &nbsp; &nbsp; &nbsp;&nbsp;4. The business model and approach adopted to solve the
          real-world Problems
                  <br />
       &nbsp; &nbsp; &nbsp;&nbsp;5. Milestones (We recommend SMART goal setting)
                  <br />
                  <span id="ideastormevents-content-span">Round 4 starts on :</span>
                  {' '}
3 February, 2019 (Day 2 of E-Summit’19)
                  <br />
                  <span id="ideastormevents-content-span">Round 4 results    :</span>
                  {' '}
3 February, 2019 (Day 2 of E-Summit’19)
                  <br />

                </p>
              </li>
            </ol>
          </div>
        </section>

      </div>
    );
  }
}
