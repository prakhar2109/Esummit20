import React, { Component } from 'react'
import faqHeadingBackground from '../../../assets/faq-heading-background.svg'

class FAQ extends Component {
  render() {
    return (
      <div className="faq-section-container">
        <div className="section-image-heading-container">
          <div className="section-image-heading">faqs</div>
          <img
            src={faqHeadingBackground}
            className="section-image-heading-background"
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
                  How to reach IIT Roorkee ?
                  <div className="plus-container">
                    <hr className="dash" />
                    <hr className="dash" />
                  </div>
                </div>

                <div className="question-items-answer">
                  eSummit being the flagship event of ECell, is held annually
                  brings together the academic community, venture capitalists,
                  new age entrepreneurs and all those passionate about
                  entrepreneurship to common grounds.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FAQ
