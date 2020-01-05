import React, { Component } from 'react'
import { Carousel } from 'antd'
import richard from '../../../assets/richard.png'
class Testemonials extends Component {
  render() {
    return (
      <div className="testemonial-section-container">
        <Carousel autoplay>
          <div className="testemonial-card-container">
            <div className="testemonial-card">
              <img src={richard} className="testemonial-card-image" alt="" />

              <div className="testemonial-card-heading">RICHARD BRANSON</div>
              <div className="testemonial-card-subheading">
                Founder, Virgin group
              </div>
              <hr className="testemonial-card-horizontal-line" />
              <div className="testemonial-card-content">
                For me the E-Summit’18 was a great success. It was my honour to
                be invited and to be a part of the event which promotes the
                spirit of entrepreneurship. The young enthusiastic and highly
                energetic team did a spectacular job.
              </div>
            </div>
          </div>
          <div className="testemonial-card-container">
            <div className="testemonial-card">
              <img src={richard} className="testemonial-card-image" alt="" />

              <div className="testemonial-card-heading">RICHARD BRANSON</div>
              <div className="testemonial-card-subheading">
                Founder, Virgin group
              </div>
              <hr className="testemonial-card-horizontal-line" />
              <div className="testemonial-card-content">
                For me the E-Summit’18 was a great success. It was my honour to
                be invited and to be a part of the event which promotes the
                spirit of entrepreneurship. The young enthusiastic and highly
                energetic team did a spectacular job.
              </div>
            </div>
          </div>
          <div className="testemonial-card-container">
            <div className="testemonial-card">
              <img src={richard} className="testemonial-card-image" alt="" />

              <img src={richard} className="testemonial-card-image" alt="" />
              <div className="testemonial-card-heading">RICHARD BRANSON</div>
              <div className="testemonial-card-subheading">
                Founder, Virgin group
              </div>
              <hr className="testemonial-card-horizontal-line" />
              <div className="testemonial-card-content">
                For me the E-Summit’18 was a great success. It was my honour to
                be invited and to be a part of the event which promotes the
                spirit of entrepreneurship. The young enthusiastic and highly
                energetic team did a spectacular job.
              </div>
            </div>
          </div>
          <div className="testemonial-card-container">
            <div className="testemonial-card">
              <img src={richard} className="testemonial-card-image" alt="" />

              <div className="testemonial-card-heading">RICHARD BRANSON</div>
              <div className="testemonial-card-subheading">
                Founder, Virgin group
              </div>
              <hr className="testemonial-card-horizontal-line" />
              <div className="testemonial-card-content">
                For me the E-Summit’18 was a great success. It was my honour to
                be invited and to be a part of the event which promotes the
                spirit of entrepreneurship. The young enthusiastic and highly
                energetic team did a spectacular job.
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    )
  }
}

export default Testemonials
