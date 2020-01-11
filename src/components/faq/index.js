import React, { Component } from 'react'
import faqHeadingBackground from '../../assets/faq-heading-background.svg'

class FAQs extends Component {
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
        </div>
      </div>
    )
  }
}

export default FAQs
