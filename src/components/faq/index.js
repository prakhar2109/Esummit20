import React, { Component } from 'react'
import faqHeadingBackground from '../../assets/faq-heading-background.svg'
import { Tabs } from 'antd'
const { TabPane } = Tabs

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
              </div>
            </TabPane>
            <TabPane tab="General" key="2">
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
              </div>
            </TabPane>
            <TabPane tab="General" key="3">
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
              </div>
            </TabPane>
            <TabPane tab="General" key="4">
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
              </div>
            </TabPane>
            <TabPane tab="General" key="5">
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
              </div>
            </TabPane>
          </Tabs>
        </div>
      </div>
    )
  }
}

export default FAQs
