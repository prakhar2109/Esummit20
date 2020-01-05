import React, { Component } from 'react'
import cardImage from '../../../assets/case-study.png'
import './panel.css'

class Panel extends Component {
  render() {
    return (
    	<div className="panel-container">
	    	<div className="panel-format">
	    		<div className="heading">PANEL DISCUSSION</div>
	    		<p className="content topic">TOPIC: GROWTH RATE IN INDIA</p>
	    		<p className="content">A brisk description about what does the topic consist of and its benefitsto our country</p>
	    	</div>
	    	<div className="panel-list-container">
	    		<p>PANELISTS</p>, 
	        	<div className="panel-list-card-container">
		          	<div className="panel-list-card">
			            <img
			              	src={cardImage}
			             	alt=""
			              	className="panel-list-card-image"
			            />
			            <div className="panel-list-card-content">
			              	<div className="panel-list-card-heading">
			              	  Kamal Bali
			              	</div>
			              	<div className="panel-list-card-subheading">
			               	 CEO & MD, Volvo India
			             	</div>
			            </div>
		          	</div>
		          	<div className="panel-list-card">
			            <img
			              	src={cardImage}
			             	alt=""
			              	className="panel-list-card-image"
			            />
			            <div className="panel-list-card-content">
			              	<div className="panel-list-card-heading">
			              	  Kamal Bali
			              	</div>
			              	<div className="panel-list-card-subheading">
			               	 CEO & MD, Volvo India
			             	</div>
			            </div>
		          	</div>
		          	<div className="panel-list-card">
			            <img
			              	src={cardImage}
			             	alt=""
			              	className="panel-list-card-image"
			            />
			            <div className="panel-list-card-content">
			              	<div className="panel-list-card-heading">
			              	  Kamal Bali
			              	</div>
			              	<div className="panel-list-card-subheading">
			               	 CEO & MD, Volvo India
			             	</div>
			            </div>
		          	</div><div className="panel-list-card">
			            <img
			              	src={cardImage}
			             	alt=""
			              	className="panel-list-card-image"
			            />
			            <div className="panel-list-card-content">
			              	<div className="panel-list-card-heading">
			              	  Kamal Bali
			              	</div>
			              	<div className="panel-list-card-subheading">
			               	 CEO & MD, Volvo India
			             	</div>
			            </div>
		          	</div>
	        	</div>
	    	</div>
    	</div>
    )
  }
}
export default Panel
