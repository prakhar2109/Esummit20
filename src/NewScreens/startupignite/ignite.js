import React, { Component } from 'react';
import Nav from "../nav/nav.jsx";
import Vector from './img/headVector.png';
import Eventfooter from "../IdeaStorm/footer/eventfooter.jsx";
import './ignite.css';
import FAQBoard from '../landing/faqs';
import MobileNav from "../mobile_nav/header";
import "../../screens/ignite/css/ignite.scss";
import "./scrollanimation.css";
import jump from "jump.js";

export default class IgniteIndex extends Component {
	state = {
		activeState: "NEWDELHI",
		faq: [
			{
				id: 2,
				question: "I am from a different college from the college where startup ignite is happening. Can I still participate?",
				answer:

					"Yes, anyone who is interested to be a part of the Startup Ignite is invited.",
			},
			{
				id: 3,
				question: "Can we pay on-the-spot for the event?",
				answer:
					"Yes, you can make payments both as cash/credit.",
			},

			{
				id: 4,
				question: "Is there any registration fee for the startup ignite?",
				answer:
					" No, it is free of cost.",
			},

			{
				id: 5,
				question: "Will I be given waivers for participating in E-Summit?",
				answer: [
					"There are different types of waivers that we offer. Please contact our team to know the category of discount you fall in.",
				],
			},
		],


	}

	jum = () => {
		jump('#ignite');
	}

	setActive(state) {
		this.setState({
			activeState: state,
		});
	}

	render() {
		return (

			<div>
				<Nav />
				<MobileNav />
				<div className="suignite-parent">
					<div className="suignite-parent-img"></div>
					<p>STARTUP IGNITE</p>
					<p>Prelude to symphony</p>
					<p>
						Startup Ignite is the drive to spread awareness about Entrepreneurship and
						Startups in various cities of North India. The zonal event of E-Summit brings
						the chance to get a taste of entrepreneurship to your cities in collaboration
						with your regional Entrepreneurship development organisations. It would be
						the right stage for you to widen your scope of entrepreneurial knowledge, meet
						the best in business today and network with them.
					</p>
					<div className="ignite-first-page-scroll">
						<div onClick={this.jum} className='icon-scroll'></div> <br />
						<div id="ignite-first-page-scroll-child"><p> SCROLL DOWN</p></div>
					</div>
				</div>

				<div id="ignite" className="suignite-parent-childparent">
					<div className="suignite-parent-child1">
						{/* <div className={this.state.activeState === "NOIDA" ? "suignite-parent-child1-active" : "suignite-parent-child1-inactive"} onClick={() => { this.setActive("NOIDA"); }}>NOIDA</div> */}
						{/* <div className={this.state.activeState === "CHANDIGARH" ? "suignite-parent-child1-active" : "suignite-parent-child1-inactive"} onClick={() => { this.setActive("CHANDIGARH"); }}>CHANDIGARH</div> */}
						<div className={this.state.activeState === "NEWDELHI" ? "suignite-parent-child1-active" : "suignite-parent-child1-inactive"} onClick={() => { this.setActive("NEWDELHI"); }}>NEWDELHI</div>
						<div className={this.state.activeState === "DEHRADUN" ? "suignite-parent-child1-active" : "suignite-parent-child1-inactive"} onClick={() => { this.setActive("DEHRADUN"); }}>DEHRADUN</div>
						<div className={this.state.activeState === "JAIPUR" ? "suignite-parent-child1-active" : "suignite-parent-child1-inactive"} onClick={() => { this.setActive("JAIPUR"); }}>JAIPUR</div>
					</div>
					<div className="suignite-parent-child2">
						{this.state.activeState === "NOIDA" ?
							<div className="suignite-parent-child2-img background-noida">
							</div>
							: this.state.activeState === "CHANDIGARH" ?
								<div className="suignite-parent-child2-img background-chandigarh">
								</div>
								: this.state.activeState === "NEWDELHI" ?
									<div className="suignite-parent-child2-img background-newdelhi">
									</div>
									: this.state.activeState === "DEHRADUN" ?
										<div className="suignite-parent-child2-img background-dehradun">
										</div>
										:
										this.state.activeState === "JAIPUR" ?
											<div className="suignite-parent-child2-img background-jaipur">
											</div>
											: null
						}
						{this.state.activeState === "NOIDA"
							? (
								<div className="suignite-parent-child2-applyparent">
									<div className="suignite-parent-child2-applyparent-heading">Apply for startup ignite in Noida</div>
									<a style={{ cursor: "pointer" }} href="http://bit.ly/sinoida">
										<button id="suignite-parent-child2-applyparent-button"> APPLY</button>
									</a>
								</div>
							)
							: this.state.activeState === "CHANDIGARH"
								? (
									<div className="suignite-parent-child2-applyparent">
										<div className="suignite-parent-child2-applyparent-heading">Apply for startup ignite in Chandigarh</div>
										<a style={{ cursor: "pointer" }} href="http://bit.ly/sichandigarh">
											<button id="suignite-parent-child2-applyparent-button"> APPLY</button>
										</a>
									</div>
								)
								: this.state.activeState === "NEWDELHI"
									? (
										<div className="suignite-parent-child2-applyparent">
											<div className="suignite-parent-child2-applyparent-heading">Apply for startup ignite in New Delhi</div>
											<a style={{ cursor: "pointer" }} href="http://bit.ly/sinewdelhi">
												<button id="suignite-parent-child2-applyparent-button"> APPLY</button>
											</a>
										</div>
									)
									: this.state.activeState === "DEHRADUN"
										? (
											<div className="suignite-parent-child2-applyparent">
												<div className="suignite-parent-child2-applyparent-heading">Apply for startup ignite in Dehradun</div>
												<a style={{ cursor: "pointer" }} href="http://bit.ly/sidehradun">
													<button id="suignite-parent-child2-applyparent-button"> APPLY</button>
												</a>
											</div>
										)
										: this.state.activeState === "JAIPUR"
											? (
												<div className="suignite-parent-child2-applyparent">
													<div className="suignite-parent-child2-applyparent-heading">Apply for startup ignite in Jaipur</div>
													<a style={{ cursor: "pointer" }} href="http://bit.ly/sijaipur">
														<button id="suignite-parent-child2-applyparent-button"> APPLY</button>
													</a>
												</div>
											)
											: null


						}
						{/* <div className="suignite-parent-child2-panel">
							<div>
								<img className="suignite-vector" src={Vector} alt="" />
								<div className="suignite-head1">PANEL DISCUSSION</div>
							</div>

							<p className="suignite-topic-heading">TOPIC : GROWTH RATE IN INDIA</p>
							<p className="suignite-topic-para">A brisk description about what does the topic consist of and its
						benefits to our country</p>
							<p className="suignite-topic-heading">PANELISTS</p>
							<p className="suignite-topic-para">The panelists for this discussion</p>

							<div className="suignite-panelists-img-parent">
								<div className="suignite-panelists-img-child">
									<div className="suignite-panelists-img1"></div>
									<div className="panelists-name">Prakhar agarwal</div>
									<div className="panelists-company">CEO, Company</div>
								</div>
								<div className="suignite-panelists-img-child">
									<div className="suignite-panelists-img1"></div>
									<div className="panelists-name">Prakhar agarwal</div>
									<div className="panelists-company">CEO, Company</div>
								</div>
								<div className="suignite-panelists-img-child">
									<div className="suignite-panelists-img1"></div>
									<div className="panelists-name">Prakhar agarwal</div>
									<div className="panelists-company">CEO, Company</div>
								</div>
								<div className="suignite-panelists-img-child">
									<div className="suignite-panelists-img1"></div>
									<div className="panelists-name">Prakhar agarwal</div>
									<div className="panelists-company">CEO, Company</div>
								</div>
							</div>
						</div> */}
						{this.state.activeState === "NEWDELHI" ?
							<div className="suignite-guestlecture-parent">
								<div>
									<img className="suignite-vector" src={Vector} alt="" />
									<div className="suignite-head1">GUEST LECTURE</div>
								</div>
								<div className="suignite-guestlecture-child-parent">
									<div className="suignite-guestlecture-child1 back-delhi-one"></div>
									<div className="suignite-guestlecture-child2">
										<p>AVELO ROY</p>
										<p>MD,  Kolkata Ventures</p>
										<p>Topic : Aspiring Young Achievers.</p>
										<p>Achievers don't have any age,they have the will to do things.
											Aspiration is required to direct their sheer talent and hardwork.</p>
									</div>
								</div>
								{/* <div className="suignite-guestlecture-child-parent">
									<div className="suignite-guestlecture-child1"></div>
									<div className="suignite-guestlecture-child2">
										<p>SAURABH KOCHHAR</p>
										<p>CEO, Company Name</p>
										<p>Topic : Make in India</p>
										<p>A brisk description about what does the topic consist of and its benefits to our country and what will saurabh kochhar do to make India great. </p>
									</div>
								</div> */}

							</div>
							:
							this.state.activeState === "DEHRADUN" ?
								<div className="suignite-guestlecture-parent">
									<div>
										<img className="suignite-vector" src={Vector} alt="" />
										<div className="suignite-head1">GUEST LECTURE</div>
									</div>
									<div className="suignite-guestlecture-child-parent">
										<div className="suignite-guestlecture-child1 back-dehradun-first"></div>
										<div className="suignite-guestlecture-child2">
											<p>SUSHIL RAMOLA</p>
											<p>Chairman, B-ABLE</p>
											<p>Topic : Realising Success</p>
											<p>Success is the gradual realization of a worthy goal and the key to success is realising that our big goals aren't going to happen overnight.</p>
										</div>
									</div>
									<div className="suignite-guestlecture-child-parent">
										<div className="suignite-guestlecture-child1 back-dehradun-second"></div>
										<div className="suignite-guestlecture-child2">
											<p>PANKAJ GUPTA</p>
											<p>President, Industries Association of Uttarakhand</p>
											<p>Topic : Building for India</p>
											<p>India as a country has a billion problems and we as citizens need to provide a billion solutions.</p>
										</div>
									</div>
									<div className="suignite-guestlecture-child-parent">
										<div className="suignite-guestlecture-child1 back-dehradun-three"></div>
										<div className="suignite-guestlecture-child2">
											<p>SANDEEP SINGH SANDHAR</p>
											<p>Advisor, Centre for Mindfulness, Wellness</p>
											<p>Topic : Entrepreneurial Well Being</p>
											<p>Entrepreneurship is a unique and challenging human endeavour.So here we are to ensure well being of all you entrepreneurs.</p>
										</div>
									</div>
									{/* <div className="suignite-guestlecture-child-parent">
										<div className="suignite-guestlecture-child1 back-dehradun-four"></div>
										<div className="suignite-guestlecture-child2">
											<p>SAURABH KOCHHAR</p>
											<p>CEO, Company Name</p>
											<p>Topic : Make in India</p>
											<p>A brisk description about what does the topic consist of and its benefits to our country and what will saurabh kochhar do to make India great. </p>
										</div>
									</div>
									<div className="suignite-guestlecture-child-parent">
										<div className="suignite-guestlecture-child1 back-dehradun-five"></div>
										<div className="suignite-guestlecture-child2">
											<p>SAURABH KOCHHAR</p>
											<p>CEO, Company Name</p>
											<p>Topic : Make in India</p>
											<p>A brisk description about what does the topic consist of and its benefits to our country and what will saurabh kochhar do to make India great. </p>
										</div>
									</div> */}

								</div> :
								this.state.activeState === "JAIPUR" ?
									<div className="suignite-guestlecture-parent">
										<div>
											<img className="suignite-vector" src={Vector} alt="" />
											<div className="suignite-head1">GUEST LECTURE</div>
										</div>
										{/* <div className="suignite-guestlecture-child-parent">
											<div className="suignite-guestlecture-child1 back-jaipur-one"></div>
											<div className="suignite-guestlecture-child2">
												<p>AKHILESH TRIVEDI</p>
												<p>CEO, Anand Incubation Center</p>
												<p>Topic : Make in India</p>
												<p>A brisk description about what does the topic consist of and its benefits to our country and what will saurabh kochhar do to make India great. </p>
											</div>
										</div> */}
										<div className="suignite-guestlecture-child-parent">
											<div className="suignite-guestlecture-child1 back-jaipur-second"></div>
											<div className="suignite-guestlecture-child2">
												<p>DILNAWAZ KHAN</p>
												<p>Founder, Codesign Labs</p>
												<p>Topic : Aspiring YOUNG Achievers.</p>
												<p>Achievers don't have any age,they have the will to do things.
											Aspiration is required to direct their sheer talent and hardwork.</p>
											</div>
										</div>

									</div> : null

						}
						<div className="suignite-casestudy-parent">
							<div>
								<img className="suignite-vector" src={Vector} alt="" />
								<div className="suignite-head1">INVESTOR’S HAT</div>
							</div>


							<p style={{ marginTop: "6.67vh" }}>
								An investor, as cool as it may sound is always on the knife’s edge;
								 a bad decision and it would rip him off. So let’s get into his shoes and see how tough it may get just to make a choice

          </p>
							<p>RULES & REGULATIONS</p>
							<p>
								1.This is an individual game and open to all.
            <br />
								2.Speaking or murmuring any sort of hint will lead to disqualification of the candidate.
								</p>
							<p>ELIGIBILITY</p>
							<p>Everyone can participate in this .</p>
							<p>PRIZES</p>
							<p>People answering the riddle and guessing the picture will be given goodies.</p>
						</div>
						<div className="suignite-casestudy-parent">
							<div>
								<img className="suignite-vector" src={Vector} alt="" />
								<div className="suignite-head1">GUESS ME?</div>
							</div>


							<p style={{ marginTop: "6.67vh" }}>
								Wouldn’t it be interesting if we play a grown-up version of
								‘pictionary’? Play this game to know cool things about the entrepreneurial world.
								</p>
							<p>RULES & REGULATIONS</p>
							<p>
								1. This is an individual game and open to all.<br />
								2. Speaking or murmuring any sort of hint will lead to disqualification of the candidate.
								</p>
							<p>ELIGIBILITY</p>
							<p>Everyone can participate in this .</p>
							<p>PRIZES</p>
							<p>People answering the riddle and guessing the picture will be given goodies.</p>
						</div>
						{/* <div className="suignite-iplauctionfrenzy-parent">
								<div>
									<img className="suignite-vector" src={Vector} alt="" />
									<div className="suignite-head1">WIT BID : IPL AUCTION FRENZY</div>
								</div>
								<p>This competition needs well planned strategies and high-end intuition. Expect a lots of 							twists and turns throughout your way and each time you think you ace it you will be blasted with shocks. Even if odds are against what you plan, you always have a gut feeling. Trust your intuitions and execute a well planned and effective 							business strategy.
						</p>
								<p>FORMAT</p>
								<p><b>Stage 1: Bidding Round:</b><br />
									The teams will compete in a Live auction of players. Each team will be given a fixed budget 							which will be used for the auction. The aim will be to build a squad that maximizes the total 							ratings of the players of the team in limited budget along with the constraints on total number 						of players
								</p>
								<p>RULES & REGULATIONS</p>
								<p>1. There is no restriction on any individual to participate. Members of all educational and 							professional fraternities are welcome to participate. <br />
									2. Start-ups which have been incorporated more than a year ago (i.e. registered on or before 1 							December, 2017) are not eligible to participate in the Idea Storm. <br />
									3. Ventures that have acquired funding from external investor-networks (angels, VC's, etc) 							cannot participate. We believe in promoting startups that require assistance in the form of 							seed capital, mentoring and various types of consultancies.
						</p>
								<p>ELIGIBILITY</p>
								<p>Everyone can participate in this .</p>
								<p>PRIZES</p>
								<p>1. There is no restriction on any individual to participate. Members of all educational and 							professional fraternities are welcome to participate. <br />
									2. Start-ups which have been incorporated more than a year ago (i.e. registered on or before 1 							December, 2017) are not eligible to participate in the Idea Storm</p>
							</div> */}
						<div className="esummit-ignite-faq">
							<FAQBoard viewall="false" faqList={this.state.faq} />
						</div>
						<div className="suignite-forqueries-parent">
							<div>
								<img className="suignite-vector" src={Vector} alt="" />
								<div className="suignite-head1">FOR QUERIES</div>
							</div>
							<p>Amritha Muthuraman</p>
							<p>am@cy.iitr.ac.in</p>
							<p>+91 9500048067</p>
							<br />
							<p style={{ marginBottom: "0px" }} className="suignite-topic-heading">Keshvam Verma</p>
							<p style={{ marginBottom: "0px", color: "#4F4F4F", fontFamily: "Proxima-nova-regular", fontSize: "19.88px" }}>keshvam@me.iitr.ac.in</p>
							<p style={{ marginBottom: "0px", color: "#4F4F4F", fontFamily: "Proxima-nova-regular", fontSize: "19.88px" }}>+91 8901120295</p>
						</div>


					</div>


				</div>
				<Eventfooter />
			</div>
		);
	}
}
