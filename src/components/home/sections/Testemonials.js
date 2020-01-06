import React, { Component } from 'react'
import { Carousel } from 'antd'
import varun from '../../../assets/varun.jpeg'
import dharam from '../../../assets/dharam.jpeg'
import renu from '../../../assets/renu.jpeg'
import pratik from '../../../assets/pratik.jpeg'
class Testemonials extends Component {
  render() {
    return (
      <div className="testemonial-section-container">
        <Carousel autoplay>
          <div className="testemonial-card-container">
            <div className="testemonial-card">
              <img src={renu} className="testemonial-card-image" alt="" />

              <div className="testemonial-card-heading">Dr. RENU RAJANI</div>
              {/* <div className="testemonial-card-subheading">
                Founder, Virgin group
              </div> */}
              <hr className="testemonial-card-horizontal-line" />
              <div className="testemonial-card-content">
                “This invite to the E-Summit, IIT Roorkee was a matter of great
                pride - as a growing youth in 1980s, I aspired to study at
                Roorkee, a mecca of education. Aspired to visit the alma mater
                for my spouse. Wanted to visit the scenic beauty of Uttarakhand.
                Finally, the life can come full circle with this visit. The
                E-Summit was well organized and showcased plenty of startup
                ideas, as well as demonstrated some of the key ideas taken to
                fruition by the E-Cell.”
              </div>
            </div>
          </div>
          <div className="testemonial-card-container">
            <div className="testemonial-card">
              <img src={varun} className="testemonial-card-image" alt="" />

              <div className="testemonial-card-heading">Varun Sheth</div>
              {/* <div className="testemonial-card-subheading">
                Founder, Virgin group
              </div> */}
              <hr className="testemonial-card-horizontal-line" />
              <div className="testemonial-card-content">
                “For me the E-Summit’18 was a great success. It was my honour to
                be invited and to be a part of the event which promotes the
                spirit of entrepreneurship. The young enthusiastic and highly
                energetic team did a spectacular job. Absolutely delighted to be
                a speaker at this inspiring event and I wish all the very best
                to all the IIT Roorkee team members for the upcoming events and
                conferences.”
              </div>
            </div>
          </div>
          <div className="testemonial-card-container">
            <div className="testemonial-card">
              {/* <img src={richard} className="testemonial-card-image" alt="" /> */}

              <img src={pratik} className="testemonial-card-image" alt="" />
              <div className="testemonial-card-heading">Pratik Dholakiya</div>
              {/* <div className="testemonial-card-subheading">
                Founder, Virgin group
              </div> */}
              <hr className="testemonial-card-horizontal-line" />
              <div className="testemonial-card-content">
                “It was my absolute honor and pleasure being a part of
                Entrepreneurship Cell IIT Roorkee event earlier this year. The
                young and enthusiastic team had taken care of each small thing
                during the event and the attendees during the summit were very
                energetic and cooperative. I couldn’t have asked for more being
                a speaker and observer. I wish the team at IIT Roorkee all the
                best for upcoming events and do continue to host amazing
                speakers and attendees.”
              </div>
            </div>
          </div>
          <div className="testemonial-card-container">
            <div className="testemonial-card">
              <img src={dharam} className="testemonial-card-image" alt="" />

              <div className="testemonial-card-heading">
                Dharamveer Singh Chouhan
              </div>
              {/* <div className="testemonial-card-subheading">
                Founder, Virgin group
              </div> */}
              <hr className="testemonial-card-horizontal-line" />
              <div className="testemonial-card-content">
                “Event was well organized, general enthusiasm in
                entrepreneurship is on the rise in colleges. Much needed
                exposure for college students, best of luck for future.”
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    )
  }
}

export default Testemonials
