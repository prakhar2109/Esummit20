import React, { Component } from 'react'
import speakersHeadingBackground from '../../assets/speakers-heading-background.svg'
import karthik from '../../assets/speakers/karthik-reddy.jpg'
import coming from '../../assets/speakers/download.jpeg'
import abhishek from '../../assets/speakers/abhishek-prabhuda.jpeg'
import './speakers.css'

class Speakers extends Component {
	componentDidMount(){
		window.scrollTo(0, 0);
	}
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
		              	src={karthik}
		              	alt=""
		              	className="speakers-page-section-card-image"
	            	/>
		            <div className="speakers-page-section-card-content">
		              	<div className="speakers-page-section-card-heading">Karthik Reddy</div>
			              	<div className="speakers-page-section-card-subheading">
			               		Blume Ventures
			              	</div>
		         	</div>
		         </div>
		         <div className="speakers-page-section-card">
	       			<img
		              	src={abhishek}
		              	alt=""
		              	className="speakers-page-section-card-image"
	            	/>
		            <div className="speakers-page-section-card-content">
		              	<div className="speakers-page-section-card-heading">Abhishek Prabhuda</div>
			              	<div className="speakers-page-section-card-subheading">
			               		Co-Head at Delhivery
			              	</div>
		         	</div>
		         </div>
		         <div className="speakers-page-section-card">
	       			<img
		              	src={coming}
		              	alt=""
		              	className="speakers-page-section-card-image"
	            	/>
		            <div className="speakers-page-section-card-content">
		              	<div className="speakers-page-section-card-heading">Coming Soon</div>
			              	<div className="speakers-page-section-card-subheading">
			               		
			              	</div>
		         	</div>
		         </div>
		         
	        </div>
        </div>
    )
  }
}

export default Speakers