import React, { Component } from 'react'
import speakersHeadingBackground from '../../assets/speakers-heading-background.svg'
import samironCard from '../../assets/samiron.png'
import './speakers.css'

class Speakers extends Component {
  render() {
    return (
    	<div className="speaker-page-container">
	      	<div className="speakers-page-page-section-container">
	        	<div className="section-page-image-heading-container">
	          		<div className="section-page-image-heading">SPEAKERS</div>
		          		<img
				            src={speakersHeadingBackground}
				            className="section-image-heading-background"
				            id="section-image-heading-background-speaker"
				            alt=""
		         		/>
	        	</div>
	        </div>
	        <div className="speakers-page-section-card-container">
	          	<div className="speakers-page-section-card">
	       			<img
		              	src={samironCard}
		              	alt=""
		              	className="speakers-page-section-card-image"
	            	/>
		            <div className="speakers-page-section-card-content">
		              	<div className="speakers-page-section-card-heading">Kamal Bali</div>
			              	<div className="speakers-page-section-card-subheading">
			               		CEO & MD, Volvo India
			              	</div>
		         	</div>
		         </div>
		         <div className="speakers-page-section-card">
	       			<img
		              	src={samironCard}
		              	alt=""
		              	className="speakers-page-section-card-image"
	            	/>
		            <div className="speakers-page-section-card-content">
		              	<div className="speakers-page-section-card-heading">Kamal Bali</div>
			              	<div className="speakers-page-section-card-subheading">
			               		CEO & MD, Volvo India
			              	</div>
		         	</div>
		         </div>
		         <div className="speakers-page-section-card">
	       			<img
		              	src={samironCard}
		              	alt=""
		              	className="speakers-page-section-card-image"
	            	/>
		            <div className="speakers-page-section-card-content">
		              	<div className="speakers-page-section-card-heading">Kamal Bali</div>
			              	<div className="speakers-page-section-card-subheading">
			               		CEO & MD, Volvo India
			              	</div>
		         	</div>
		         </div>
		         <div className="speakers-page-section-card">
	       			<img
		              	src={samironCard}
		              	alt=""
		              	className="speakers-page-section-card-image"
	            	/>
		            <div className="speakers-page-section-card-content">
		              	<div className="speakers-page-section-card-heading">Kamal Bali</div>
			              	<div className="speakers-page-section-card-subheading">
			               		CEO & MD, Volvo India
			              	</div>
		         	</div>
		         </div>
		         <div className="speakers-page-section-card">
	       			<img
		              	src={samironCard}
		              	alt=""
		              	className="speakers-page-section-card-image"
	            	/>
		            <div className="speakers-page-section-card-content">
		              	<div className="speakers-page-section-card-heading">Kamal Bali</div>
			              	<div className="speakers-page-section-card-subheading">
			               		CEO & MD, Volvo India
			              	</div>
		         	</div>
		         </div>
		         
	        </div>
        </div>
    )
  }
}

export default Speakers