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
          question: 'What is the last date of form submission and payment?',
          answer:
            '7th of January is the last date of form submission and payment should be done on or before 20th of January.'
        },
        {
          id: 2,
          question: ' How much is the participation fee for Startup Expo?',
          answer:
            'The participation fee for participation for Startup Expo is 3000 Rupees.'
        },

        {
          id: 3,
          question: ' Can a person register for two startups?',
          answer:
            'Yes, but finally only one startup will be selected by us and will be showcased on the final day.'
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
          question:
            ' How many people from a single startup can be there on the day of Startup Expo? ',
          answer:
            'You can have a maximum of two members present there with each startup on the day of Startup Expo. If they want, other members of the team can also join us for E-summit with their individual registration on our website.'
        },

        {
          id: 6,
          question: ' Does my startup has to be technology related? ',
          answer:
            'No, we encourage all entries from all sectors that can get funding and be developed into a business venture.'
        },

        {
          id: 7,
          question:
            'What are the accommodation facilities that a team is going to get? ',
          answer:
            'Accomodation is optional. Extra nominal fee is charged if you opt for accomodation otherwise you can also get accomodation on your own somewhere outside the campus if you are willing to. '
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
