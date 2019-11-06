import React, { Component } from 'react';
import FAQBoard from "./faqs"

export default class FAQSection extends Component {
    render() {
        return (
            <FAQBoard faqList={this.props.data} />
        );
    }
}

