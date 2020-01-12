import React, { Component } from 'react'
import faqHeadingBackground from '../../assets/faq-heading-background.svg'
import { Tabs } from 'antd'
const { TabPane } = Tabs

class FAQs extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className="faq-container">
        <div className="section-image-heading-container">
          <div className="section-image-heading">faqs</div>
          <img
            src={faqHeadingBackground}
            className="section-image-heading-background"
            id="section-image-heading-background-faq"
            alt=""
          />
        </div>
        <div className="faq-content-container">
          <div className="faq-paragraph">
            Stuck somewhere? We’re here to help you!
          </div>
          <Tabs defaultActiveKey="1">
            <TabPane tab="General" key="1">
              <div className="tab-question-container">
                <div className="question-container">
                  <input
                    type="checkbox"
                    name="question-item"
                    className="question-items-checkbox"
                  />
                  <div className="question-items-container ">
                    <div className="question-items-container-question">
                      What is Esummit?
                      <div className="plus-container">
                        <hr className="dash" />
                        <hr className="dash" />
                      </div>
                    </div>

                    <div className="question-items-answer">
                      ESummit being the flagship event of ECell, is held
                      annually brings together the academic community, venture
                      capitalists, new age entrepreneurs and all those
                      passionate about entrepreneurship to common grounds.
                    </div>
                  </div>
                </div>
                <div className="question-container">
                  <input
                    type="checkbox"
                    name="question-item"
                    className="question-items-checkbox"
                  />
                  <div className="question-items-container ">
                    <div className="question-items-container-question">
                      How to Reach Roorkee ?
                      <div className="plus-container">
                        <hr className="dash" />
                        <hr className="dash" />
                      </div>
                    </div>

                    <div className="question-items-answer">
                      Roorkee is well connected to Delhi by rail and road. It is
                      situated on National Highways 58 and 73 and is on
                      Amritsar-Howrah main rail route. {<br />}
                      {<br />}Easiest way to get to Roorkee is by train. There
                      are several trains serving Roorkee daily from various
                      cities around. The high speed trains Shatabdi and Jan
                      Shatabti also stop at Roorkee on their route Delhi -
                      Dehradun. By train, it takes less than 3 hours and 30
                      minutes to reach Roorkee from Delhi, so it is the fastest
                      and most economical way of travel.
                    </div>
                  </div>
                </div>
                <div className="question-container">
                  <input
                    type="checkbox"
                    name="question-item"
                    className="question-items-checkbox"
                  />
                  <div className="question-items-container ">
                    <div className="question-items-container-question">
                      What is a Contingent and contingent model?
                      <div className="plus-container">
                        <hr className="dash" />
                        <hr className="dash" />
                      </div>
                    </div>

                    <div className="question-items-answer">
                      Certain number of students registering together for
                      E-Summit from the same college would be a contingent. More
                      than one contingent can register from a college.{<br />}
                      {<br />}
                      Contingent model is the description of how the fees of the
                      contingent members would be waived.
                    </div>
                  </div>
                </div>
                <div className="question-container">
                  <input
                    type="checkbox"
                    name="question-item"
                    className="question-items-checkbox"
                  />
                  <div className="question-items-container ">
                    <div className="question-items-container-question">
                      Can contigent participate in more than one event ?
                      <div className="plus-container">
                        <hr className="dash" />
                        <hr className="dash" />
                      </div>
                    </div>

                    <div className="question-items-answer">Yes</div>
                  </div>
                </div>
                <div className="question-container">
                  <input
                    type="checkbox"
                    name="question-item"
                    className="question-items-checkbox"
                  />
                  <div className="question-items-container ">
                    <div className="question-items-container-question">
                      Is it necessary to participate in an event in order to
                      participate in E-Summit ?
                      <div className="plus-container">
                        <hr className="dash" />
                        <hr className="dash" />
                      </div>
                    </div>

                    <div className="question-items-answer">
                      No{<br />}
                      {<br />}
                      We have a set of events - 4 center stage events {<br />}
                      Ideastorm Productathon , Investorsvista and Conclave .
                      {<br />}Besides that we also have our leadership series
                      and certain offline competitions as well. Thus the
                      participation is not only limited to event.
                    </div>
                  </div>
                </div>
              </div>
            </TabPane>
            <TabPane tab="Ideastorm" key="2">
              <div className="tab-question-container">
                <div className="question-container">
                  <input
                    type="checkbox"
                    name="question-item"
                    className="question-items-checkbox"
                  />
                  <div className="question-items-container ">
                    <div className="question-items-container-question">
                      Are there any participating certificates for Ideastorm ?
                      <div className="plus-container">
                        <hr className="dash" />
                        <hr className="dash" />
                      </div>
                    </div>

                    <div className="question-items-answer">Yes</div>
                  </div>
                </div>
                <div className="question-container">
                  <input
                    type="checkbox"
                    name="question-item"
                    className="question-items-checkbox"
                  />
                  <div className="question-items-container ">
                    <div className="question-items-container-question">
                      Chances of getting funded by investors ?
                      <div className="plus-container">
                        <hr className="dash" />
                        <hr className="dash" />
                      </div>
                    </div>

                    <div className="question-items-answer">
                      ESummit being the flagship event of ECell, is held
                      annually brings together the academic community, venture
                      capitalists, new age entrepreneurs and all those
                      passionate about entrepreneurship to common grounds.
                    </div>
                  </div>
                </div>
                <div className="question-container">
                  <input
                    type="checkbox"
                    name="question-item"
                    className="question-items-checkbox"
                  />
                  <div className="question-items-container ">
                    <div className="question-items-container-question">
                      What is B-plan ?
                      <div className="plus-container">
                        <hr className="dash" />
                        <hr className="dash" />
                      </div>
                    </div>

                    <div className="question-items-answer">
                      A business plan is also a road map that provides
                      directions so a business can plan its future and helps it
                      avoid bumps in the road. The time you spend making your
                      business plan thorough and accurate, and keeping it
                      up-to-date, is an investment that pays big dividends in
                      the long term.
                    </div>
                  </div>
                </div>
                <div className="question-container">
                  <input
                    type="checkbox"
                    name="question-item"
                    className="question-items-checkbox"
                  />
                  <div className="question-items-container ">
                    <div className="question-items-container-question">
                      Whats the prize money ?
                      <div className="plus-container">
                        <hr className="dash" />
                        <hr className="dash" />
                      </div>
                    </div>

                    <div className="question-items-answer">
                      Total Cash Prize INR 2,50,000
                    </div>
                  </div>
                </div>
              </div>
            </TabPane>
            <TabPane tab="Hardware Productathon" key="3">
              <div className="tab-question-container">
                <div className="question-container">
                  <input
                    type="checkbox"
                    name="question-item"
                    className="question-items-checkbox"
                  />
                  <div className="question-items-container ">
                    <div className="question-items-container-question">
                      Is there any prelimenary round for producathon?
                      <div className="plus-container">
                        <hr className="dash" />
                        <hr className="dash" />
                      </div>
                    </div>

                    <div className="question-items-answer">
                      No the only round is on campus . Register now limited
                      seats avialable.
                    </div>
                  </div>
                </div>
                <div className="question-container">
                  <input
                    type="checkbox"
                    name="question-item"
                    className="question-items-checkbox"
                  />
                  <div className="question-items-container ">
                    <div className="question-items-container-question">
                      What is the time duraton of Productathon?
                      <div className="plus-container">
                        <hr className="dash" />
                        <hr className="dash" />
                      </div>
                    </div>

                    <div className="question-items-answer">
                      The Producathon will be of 36 hours.
                    </div>
                  </div>
                </div>
                <div className="question-container">
                  <input
                    type="checkbox"
                    name="question-item"
                    className="question-items-checkbox"
                  />
                  <div className="question-items-container ">
                    <div className="question-items-container-question">
                      What is problem statement /theme for producathon?
                      <div className="plus-container">
                        <hr className="dash" />
                        <hr className="dash" />
                      </div>
                    </div>

                    <div className="question-items-answer">
                      The theme for hackathon is smart mobility . Participants
                      would have to devlop products keeping the theme in mind.
                    </div>
                  </div>
                </div>
                <div className="question-container">
                  <input
                    type="checkbox"
                    name="question-item"
                    className="question-items-checkbox"
                  />
                  <div className="question-items-container ">
                    <div className="question-items-container-question">
                      Would equipment will be provided for hackathon by the
                      organisers ?
                      <div className="plus-container">
                        <hr className="dash" />
                        <hr className="dash" />
                      </div>
                    </div>

                    <div className="question-items-answer">
                      Teams are requested to carry their own equipment for
                      hackathon.
                    </div>
                  </div>
                </div>
              </div>
            </TabPane>
            <TabPane tab="Software Productathon" key="5">
              <div className="tab-question-container">
                <div className="question-container">
                  <input
                    type="checkbox"
                    name="question-item"
                    className="question-items-checkbox"
                  />
                  <div className="question-items-container ">
                    <div className="question-items-container-question">
                      What is the theme of Software Producathon ?
                      <div className="plus-container">
                        <hr className="dash" />
                        <hr className="dash" />
                      </div>
                    </div>

                    <div className="question-items-answer">
                      The theme will be released on the day of producathon .
                    </div>
                  </div>
                </div>
              </div>
            </TabPane>
            <TabPane tab="Startup Expo" key="6">
              <div className="tab-question-container">
                <div className="question-container">
                  <input
                    type="checkbox"
                    name="question-item"
                    className="question-items-checkbox"
                  />
                  <div className="question-items-container ">
                    <div className="question-items-container-question">
                      What is the last date of form submission and payment?
                      <div className="plus-container">
                        <hr className="dash" />
                        <hr className="dash" />
                      </div>
                    </div>

                    <div className="question-items-answer">
                      7th of January is the last date of form submission and
                      payment should be done on or before 20th of January.
                    </div>
                  </div>
                </div>
                <div className="question-container">
                  <input
                    type="checkbox"
                    name="question-item"
                    className="question-items-checkbox"
                  />
                  <div className="question-items-container ">
                    <div className="question-items-container-question">
                      How much is the participation fee for Startup Expo?
                      <div className="plus-container">
                        <hr className="dash" />
                        <hr className="dash" />
                      </div>
                    </div>

                    <div className="question-items-answer">
                      The participation fee for participation for Startup Expo
                      is 2500 Rupees.
                    </div>
                  </div>
                </div>
                <div className="question-container">
                  <input
                    type="checkbox"
                    name="question-item"
                    className="question-items-checkbox"
                  />
                  <div className="question-items-container ">
                    <div className="question-items-container-question">
                      Can a person register for two startups?
                      <div className="plus-container">
                        <hr className="dash" />
                        <hr className="dash" />
                      </div>
                    </div>

                    <div className="question-items-answer">
                      Yes, but finally only one startup will be selected by us
                      and will be showcased on the final day.
                    </div>
                  </div>
                </div>
                <div className="question-container">
                  <input
                    type="checkbox"
                    name="question-item"
                    className="question-items-checkbox"
                  />
                  <div className="question-items-container ">
                    <div className="question-items-container-question">
                      How will our ideas be judged?
                      <div className="plus-container">
                        <hr className="dash" />
                        <hr className="dash" />
                      </div>
                    </div>

                    <div className="question-items-answer">
                      Your ideas will be judged on the basis of
                      <ul>
                        <li>innovation in your idea </li>
                        <li>real-world problem it mitigates </li>
                        <li>the market opportunity for the idea</li>
                        <li>the competitive advantage that it possesses</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="question-container">
                  <input
                    type="checkbox"
                    name="question-item"
                    className="question-items-checkbox"
                  />
                  <div className="question-items-container ">
                    <div className="question-items-container-question">
                      How many people from a single startup can be there on the
                      day of Startup Expo?
                      <div className="plus-container">
                        <hr className="dash" />
                        <hr className="dash" />
                      </div>
                    </div>

                    <div className="question-items-answer">
                      You can have a maximum of two members present there with
                      each startup on the day of Startup Expo. If they want,
                      other members of the team can also join us for E-summit
                      with their individual registration on our website
                    </div>
                  </div>
                </div>
                <div className="question-container">
                  <input
                    type="checkbox"
                    name="question-item"
                    className="question-items-checkbox"
                  />
                  <div className="question-items-container ">
                    <div className="question-items-container-question">
                      Does my startup has to be technology related?
                      <div className="plus-container">
                        <hr className="dash" />
                        <hr className="dash" />
                      </div>
                    </div>

                    <div className="question-items-answer">
                      No, we encourage all entries from all sectors that can get
                      funding and be developed into a business venture.
                    </div>
                  </div>
                </div>
                <div className="question-container">
                  <input
                    type="checkbox"
                    name="question-item"
                    className="question-items-checkbox"
                  />
                  <div className="question-items-container ">
                    <div className="question-items-container-question">
                      What are the accommodation facilities that a team is going
                      to get?
                      <div className="plus-container">
                        <hr className="dash" />
                        <hr className="dash" />
                      </div>
                    </div>

                    <div className="question-items-answer">
                      Accomodation is optional. Extra nominal fee is charged if
                      you opt for accomodation otherwise you can also get
                      accomodation on your own somewhere outside the campus if
                      you are willing to.
                    </div>
                  </div>
                </div>
              </div>
            </TabPane>

            <TabPane tab="Investors Vista" key="7">
              <div className="tab-question-container">
                <div className="question-container">
                  <input
                    type="checkbox"
                    name="question-item"
                    className="question-items-checkbox"
                  />
                  <div className="question-items-container ">
                    <div className="question-items-container-question">
                      What is Investors Vista and who can participate?
                      <div className="plus-container">
                        <hr className="dash" />
                        {<br />}
                        <hr className="dash" />
                      </div>
                    </div>

                    <div className="question-items-answer">
                      Investors Vista is an pitch deck competition wherein teams
                      are required to make a presentation on the given startup
                      as per the given format.
                      {<br />}
                      {<br />}All college students irrespective of year of
                      study.
                    </div>
                  </div>
                </div>
                <div className="question-container">
                  <input
                    type="checkbox"
                    name="question-item"
                    className="question-items-checkbox"
                  />
                  <div className="question-items-container ">
                    <div className="question-items-container-question">
                      How to submit presentation for first round?
                      <div className="plus-container">
                        <hr className="dash" />
                        <hr className="dash" />
                      </div>
                    </div>

                    <div className="question-items-answer">
                      ALl presentations are to be submitted on
                      esummit@iitr.ac.in
                    </div>
                  </div>
                </div>
                <div className="question-container">
                  <input
                    type="checkbox"
                    name="question-item"
                    className="question-items-checkbox"
                  />
                  <div className="question-items-container ">
                    <div className="question-items-container-question">
                      Where can we find the deck of four startups provided?
                      <div className="plus-container">
                        <hr className="dash" />
                        <hr className="dash" />
                      </div>
                    </div>

                    <div className="question-items-answer">
                      There is a drive link attached in the google form itself
                      where you can find the deck of four startups attached .
                    </div>
                  </div>
                </div>
              </div>
            </TabPane>
            <TabPane tab="Case Study" key="8">
              <div className="tab-question-container">
                <div className="question-container">
                  <input
                    type="checkbox"
                    name="question-item"
                    className="question-items-checkbox"
                  />
                  <div className="question-items-container ">
                    <div className="question-items-container-question">
                      Deadline for submitting initial draft ?
                      <div className="plus-container">
                        <hr className="dash" />
                        <hr className="dash" />
                      </div>
                    </div>

                    <div className="question-items-answer">
                      20th January 2020.
                    </div>
                  </div>
                </div>
              </div>
            </TabPane>
          </Tabs>
        </div>
      </div>
    )
  }
}

export default FAQs
