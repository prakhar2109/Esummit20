import React, { Component } from 'react'
import { Element } from 'react-scroll'
import { NavLink } from 'react-router-dom'
import SingleFAQ from './singleFaq'
import './faqboard.css'
/* eslint-disable react/prop-types */

class FAQBoard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: 1
    }
  }

  render() {
    let { faqList } = this.props
    // if (isHomePage) {
    //   faqList = faqList.filter(
    //     update => update.faq_type.type_name === 'Homepage'
    //   )
    // }
    return (
      <Element id="faq" name="faq">
        <section id="faq">
          <div className="land_faq">
            <p className="faq-title">FAQ</p>
            <p className="faq-land-para">
              Stuck somewhere ? We’ re here to help you!{' '}
            </p>

            {faqList.map(update => (
              <SingleFAQ key={update.id} update={update} />
            ))}
            {/* {this.props.viewall === 'false' ? null : (
              // <center>
              //   <NavLink to="/faq">
              //     {' '}
              //     <button className="view_all"> VIEW ALL </button>
              //   </NavLink>
              // </center>
            )} */}
          </div>
        </section>
      </Element>
    )
  }
}

export default FAQBoard
/* eslint-disable react/prop-types */
