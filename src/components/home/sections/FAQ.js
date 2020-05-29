import React, { Component } from 'react'
import faqHeadingBackground from '../../../assets/faq-heading-background.svg'
import { Link } from 'react-router-dom'
class FAQ extends Component {
  render() {
    return (
      <div className="faq-section-container">
        <div className="section-image-heading-container">
          <div className="section-image-heading">faqs</div>
          <img
            src={faqHeadingBackground}
            className="section-image-heading-background"
            id="section-image-heading-background-faq"
            alt=""
          />
        </div>
        <div className="faq-section-content-container">
          <div className="section-paragraph">
            Stuck somewhere? We’re here to help you!
          </div>
          <div>
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
                  ESummit being the flagship event of ECell, is held annually
                  brings together the academic community, venture capitalists,
                  new age entrepreneurs and all those passionate about
                  entrepreneurship to common grounds.
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
                  {<br />}Easiest way to get to Roorkee is by train. There are
                  several trains serving Roorkee daily from various cities
                  around. The high speed trains Shatabdi and Jan Shatabti also
                  stop at Roorkee on their route Delhi - Dehradun. By train, it
                  takes less than 3 hours and 30 minutes to reach Roorkee from
                  Delhi, so it is the fastest and most economical way of travel.
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
                  Certain number of students registering together for E-Summit
                  from the same college would be a contingent. More than one
                  contingent can register from a college.{<br />}
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
                  Ideastorm Productathon , Investorsvista and Conclave .{<br />}
                  Besides that we also have our leadership series and certain
                  offline competitions as well. Thus the participation is not
                  only limited to event.
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link to="/faqs" className="section-button">
          <button>view all</button>
        </Link>
      </div>
    )
  }
}

export default FAQ
