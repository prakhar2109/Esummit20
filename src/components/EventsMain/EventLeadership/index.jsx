/* eslint-disable react/prop-types */
import React, { Component } from 'react'
// import '../Common/scrollanimation.css'
import '../Events/Common/scrollanimation.css'
import './style.css'
import karthik from '../../../assets/speakers/karthik-reddy.jpg'
import ramesh from '../../../assets/speakers/ramesh.jpg'
import hansan from '../../../assets/speakers/hansan.jpg'
import rajesh from '../../../assets/speakers/rajesh.jpg'
import harshCard from '../../../assets/speakers/harsh-hande.jpeg'
import abhishek from '../../../assets/speakers/abhishek-prabhuda.jpeg'
import BackgroundImage from '../../../assets/leadershipBack.png'
import speakersHeadingBackground from '../../../assets/speakers-heading-background.svg'
function SpeakerCard(props) {
  return (
    <div className="leadership-speaker">
      <div className="leadership-speaker-image">
        <img
          src={props.SpeakerImage}
          className="leadership-speaker-image-each"
          alt="LeaderShip Speaker Image"
        />
      </div>
      <div className="leadership-speaker-details">
        <div className="leadership-speaker-name">{props.SpeakerName}</div>
        <div className="leadership-speaker-designation">
          {props.speakerDesignation}
        </div>
        <div className="leadership-speaker-date-time">
          <span>{props.date} </span>
          <span className="leadership-speaker-time">{props.time}</span>
        </div>
        <div className="leadership-speaker-topic">{props.topic}</div>
      </div>
    </div>
  )
}

class LeadershipSummit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      leaderspeakers: [
        {
          image: karthik,
          name: 'Karthik Reddy',
          designation: 'Founder And Managing Partner,Blume Ventures',
          date: ' DATE: 1st February 2020',
          time: 'TIME: 11.00 AM',
          topic: ''
        },
        {
          image: abhishek,
          name: 'Abhishek Prabhuda',
          designation: 'Co-head at Delhivery',
          date: ' DATE: 1st February 2020',
          time: 'TIME: 2:00 PM',
          topic: ''
        },
        {
          image: hansan,
          name: 'Hanson Hu',
          designation: 'Investment Associate at Morningside Venture Capitals',
          date: ' DATE: 1st February 2020',
          time: 'TIME: 03:00 PM',
          topic: ''
        },

        {
          image: harshCard,
          name: 'Harish Hande',
          designation: 'CEO and Founder , SELCO-India',
          date: ' DATE: 2nd February 2020',
          time: 'TIME: 11:00 AM',
          topic: ''
        },
        {
          image: rajesh,
          name: 'Rajesh Mane',
          designation: 'Founding member and VP at Venture Catalysts',
          date: ' DATE: 2nd February 2020',
          time: 'TIME: 12:00 PM',
          topic: ''
        },

        {
          image: ramesh,
          name: 'Ramesh Kumar',
          designation: 'Chief Technology Officer at Eduquity',
          date: ' DATE: 2nd February 2020',
          time: 'TIME: 02:00 PM',
          topic: ''
        }
      ]
    }
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div>
        <div className="eventDashboard-background-image">
          <div className="ideastormHeaderSection">
            <p> Leadership Series</p>

            <p>The council of industry leads</p>

            <br />
            <br />
            <br />

            <p>
              The true mark of a leader is the willingness to stick with a bold
              course of action — an unconventional business strategy, a unique
              product-development roadmap, a marketing campaign. The leadership
              series celebrates this ability of leaders. This sterling series is
              our centre stage event that boasts of a council of impeccable
              speakers, each an expert in his field
            </p>
          </div>
        </div>
        <div className="speaker-page-container">
          <div className="section-page-image-heading-container">
            <div className="section-page-image-heading">SPEAKERS</div>
            <img
              src={speakersHeadingBackground}
              className="section-image-heading-background"
              id="section-image-heading-background-speaker"
              alt=""
            />
          </div>
          <div className="leadership-speakers">
            {this.state.leaderspeakers.map(item => (
              <SpeakerCard
                key={item.id}
                SpeakerImage={item.image}
                SpeakerName={item.name}
                speakerDesignation={item.designation}
                date={item.date}
                time={item.time}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default LeadershipSummit
