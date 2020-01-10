import React, { Component } from 'react'
import amity from '../../../../assets/amity.svg'
import './content2.css'

class Content extends Component {
  render() {
    return (
      <div className="suexpo-city-events">
        <div className="suexpo-city-image">
          <img src={amity} alt="" />
        </div>
        <div className="suexpo-cityevent-content">
          <div className="content-child1">Amity University</div>
          <div className="content-child2">
            <span>
              Plot No.48 A, Knowledge Park III, Greater Noida, Uttar Pradesh
              201308
            </span>
            <span>19-01-2019 </span>
            <span>10:00 AM - 5:00 PM</span>
          </div>
        </div>
        <div className="register">
          <a
            without
            rel="noopener noreferrer"
            href="https://forms.gle/w8iWovVznoCJZKdq5
              "
            target="_blank"
          >
            <span>APPLY </span>
          </a>
        </div>
      </div>
    )
  }
}

export default Content
