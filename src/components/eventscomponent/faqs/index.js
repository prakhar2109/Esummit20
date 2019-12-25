import React, { Component } from 'react'
import FAQBoard from './faqs'
import './faq_unit.css'
class Faqlist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      faqlist: [
        {
          id: 1,
          question: 'What is the last date of submission?',
          answer:
            '10th of January is the last date of submission of entries for the first round of the competition.'
        },
        {
          id: 2,
          question: ' Is there a participation fee for Idea Storm?',
          answer:
            'No, there is no participation fee for participation in the first round of Idea Storm.'
        },

        {
          id: 3,
          question: ' How will the mentors be allocated?',
          answer:
            'Your idea will be judged by a panel of experts and then mentors will be allocated to you based on the area of their expertise.'
        },

        {
          id: 4,
          question: ' How will our ideas be judged? ',
          answer: [
            'Your ideas will be judged on the basis of ',
            'innovation in your idea , ' +
              'real-world problem it mitigates, ' +
              'the market opportunity for the idea, ' +
              ' & the competitive advantage that it possesses'
          ]
        },

        {
          id: 5,
          question: ' Is it compulsory to have a team to participate? ',
          answer: 'Yes, you should atleast have a team size of 3 members.'
        },

        {
          id: 6,
          question: ' Does my business model have to be technology related? ',
          answer:
            'No, we encourage all entries that can get mentorship,funding and be developed into a business venture.'
        },

        {
          id: 7,
          question:
            '  Can a team consists of people from different college/companies? ',
          answer:
            'Yes, team size should be in between 3 to 5. Individuals in the team can be from any organization'
        }
      ]
    }
  }
  render() {
    return (
      <div>
        <FAQBoard faqList={this.state.faqlist} />
      </div>
    )
  }
}

export default Faqlist
