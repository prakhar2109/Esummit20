import React, { Component } from 'react'
import FAQBoard from './faqs'
/* eslint-disable react/prop-types */

export default class FAQSection extends Component {
  render() {
    return <FAQBoard faqList={this.props.data} />
  }
}

/* eslint-disable react/prop-types */
