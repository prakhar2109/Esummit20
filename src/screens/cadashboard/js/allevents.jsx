import React, { Component } from 'react'
import "../css/events.css";
import { BASE_URL } from "../../../utils/urls"
import Loader from '../..//loader/loader'
import axios from "axios";
export default class Allevents extends Component {
    state = {
        events: []

    };


    componentDidMount() {
        document
        .getElementById("loader")
        .style
        .display = "grid";
        axios
            .get(BASE_URL + "/v1/api/events/")
            .then(res => {
                this.setState({
                    events: res.data,

                });
                document
                .getElementById("loader")
                .style
                .display = "none";
            })
    }
    applyEvent=(id)=>{
        console.log("hello") 

        let token = localStorage.getItem("user_token");
		axios
			.get(BASE_URL +  `/v1/api/event/${id}/apply`, {
				headers: {
					Authorization: `Token ${token}`,
				},
			})
			.then(res => {
                if(res.status===200)
                window.location.href='/dashboard/Events'
                console.log(res)
			})
			.catch(response => {

            });
         }
    infoMenushow=(index)=> {
        document.getElementById("caevents-earnedcoupons-child-parent1"+index).style.display = "none";
        document.getElementById("caevents-earnedcoupons-child-parent2"+index).style.display = "block";
    }
    infoMenuhide=(index)=> {
        document.getElementById("caevents-earnedcoupons-child-parent1"+index).style.display = "block";
        document.getElementById("caevents-earnedcoupons-child-parent2"+index).style.display = "none";
    }
    render() {
        return (
            <div className="caevents-earnedcoupons-rowparent1">
                <Loader />
                {this.state.events.map((event, index) => 
                        
                        <>
                        {event.sub_events.length==0?
                        <div key={index} className="caevents-earnedcoupons-child" style={{ backgroundImage: `url(${event.dashboard_image})`, }} >
                            {event.status === "Dead" &&
                                        <div className="caevents-earnedcoupons-child-reddotpic">
                                        </div>
                                    }
                                    {event.status === "Live" &&
                                        <div className="caevents-earnedcoupons-child-greendotpic">
                                        </div>
                                    }
                            <div id={"caevents-earnedcoupons-child-parent1" + index}>
                                <div className="caevents-earnedcoupons-child-heading">
                              
                                    {event.title}
                                    
                                </div>
                                <div className="caevents-registration-status">
                                    {event.status === "Live" ? "Registration open" : null}
                                    {event.status === "Dead" ? "Registration closed" : null}

                                </div>
                                <div className="caevents-earnedcoupons-child-description">
                                    {event.short_description}
                                </div>
                                {event.status === "Upcomming" ? <div className="caevents-coming-soon">COMING SOON</div> :
                                    <div>
                                        {/* <div className="caevents-earnedcoupons-deadline">
                                            Deadline: {event.deadline}
                                        </div> */}

                                        <div className="caevents-earnedcoupons-child-button">
                                            <button id={"dashboard-events-apply"+index} onClick={()=>this.applyEvent(event.id)}>APPLY</button>
                                            <button className="caofferb01" onClick={() => this.infoMenushow(index)}>INFO</button>
                                        </div>
                                    </div>}
                            </div>
                            <div className="caevents-earnedcoupons-child-parent-parent"  id={"caevents-earnedcoupons-child-parent2" + index}>
                                <div className="caevents-earnedcoupons-child-info">
                                    {event.long_description}
                                </div>

                                <div className="caevents-earnedcoupons-child-button">
                                    <button onClick={() => this.infoMenuhide(index)}>BACK</button>
                                </div>
                            </div>
                        </div>
                
                :null}
                </>
                )}
            </div>
        )
    }

}