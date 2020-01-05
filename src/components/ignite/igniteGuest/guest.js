import React, { Component } from 'react'
import cardImage from '../../../assets/kamal.png'
import './guest.css'

class Guest extends Component {
	render() {
		return (
			<div className="guest-container">
				<p className="guest-lecture-heading">GUEST LECTURE</p>
				<div className="guest-format">
					<div className="guest-list-card">
			            <img
			              	src={cardImage}
			             	alt=""
			              	className="guest-list-card-image"
			            />
			            <div className="guest-list-card-content">
			              	<div className="guest-list-card-heading">SAURABH KOCHHAR</div>
			              	<div className="guest-list-card-subheading">CEO, Company Name</div>
			              	<div className="guest-list-card-heading">Topic: Make in India</div>
			              	<div className="guest-list-card-subheading">A brisk description about what does the topic consist of and its benefits to our country andwhat will sourabh kochar do to  make India great.</div>
			            </div>
			        </div>
					<div className="guest-list-card">
			            <img
			              	src={cardImage}
			             	alt=""
			              	className="guest-list-card-image"
			            />
			            <div className="guest-list-card-content">
			              	<div className="guest-list-card-heading">SAURABH KOCHHAR</div>
			              	<div className="guest-list-card-subheading">CEO, Company Name</div>
			               	<div className="guest-list-card-heading">Topic: Make in India</div>
			              	<div className="guest-list-card-subheading">A brisk description about what does the topic consist of and its benefits to our country andwhat will sourabh kochar do to  make India great.</div>
			            </div>
			        </div>
			    </div>
		    </div>
		)
	}
}

export default Guest