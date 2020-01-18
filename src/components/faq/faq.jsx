import React, { Component } from 'react'
import faqHeadingBackground from '../../assets/faq-heading-background.svg'
import { Tabs } from 'antd'
import axios from 'axios'
import { BASE_URL } from '../../utils/urls'
const { TabPane } = Tabs

class FAQs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      faqs: []
    }
  }

  componentDidMount() {
    axios.get(BASE_URL + '/v1/api/faqs/').then(res => {
      console.log(res.data, 'faqs')
      this.setState({
        faqs: res.data
      })
    })
  }

  render() {
    const { faqs } = this.state
    const faqDict = {}
    for (var i = 0; i < faqs.length; i++) {
      if (faqs[i].faq_type.type_name in faqDict) {
        faqDict[faqs[i].faq_type.type_name].push({
          question: faqs[i].question,
          answer: faqs[i].answer
        })
      } else {
        faqDict[faqs[i].faq_type.type_name] = []
        faqDict[faqs[i].faq_type.type_name].push({
          question: faqs[i].question,
          answer: faqs[i].answer
        })
      }
    }
    const keys = Object.keys(faqDict)
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
            {faqs
              ? keys.map((key, index) => {
                  return (
                    <TabPane tab={key} key={index}>
                      <div key={index} className="tab-question-container">
                        {faqDict[key]
                          ? faqDict[key].map((data, id) => {
                              console.log(data['question'])
                              return (
                                <div key={id} className="question-container">
                                  <input
                                    type="checkbox"
                                    name="question-item"
                                    className="question-items-checkbox"
                                  />
                                  <div className="question-items-container ">
                                    <div className="question-items-container-question">
                                      {data['question']}
                                      <div className="plus-container">
                                        <hr className="dash" />
                                        <hr className="dash" />
                                      </div>
                                    </div>

                                    <div className="question-items-answer">
                                      {data['answer']}
                                    </div>
                                  </div>
                                </div>
                              )
                            })
                          : null}
                      </div>
                    </TabPane>
                  )
                })
              : null}
          </Tabs>
        </div>
      </div>
    )
  }
}

export default FAQs
