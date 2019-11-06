import React, { Component } from 'react'
import "../css/events.css";
import { BASE_URL } from "../../../utils/urls"
import axios from "axios";
import Allevents from './allevents'


export default class Viewprofile extends Component {
    state = {
        appliedevents: [],
        status: []
    };

    componentDidMount() {

        let appliedevents = [];
        let status = []

        let token = localStorage.getItem("user_token");
        axios
            .get(BASE_URL + "/v1/api/user/events", {
                headers: {
                    Authorization: `Token ${token}`,
                },
            })
            .then(res => {

                appliedevents = res.data.map(eventlist => {
                    return eventlist.event
                })
                status = res.data.map(eventlist => {
                    return eventlist.status
                })
                this.setState({
                    appliedevents: appliedevents,
                    status: status

                });
                console.log(this.state.appliedevents, "dnfnnjndnnjnj")
            })
            .catch(response => {

            });
    }
    discardEvent = (id) => {
        // console.log("hello")
        let token = localStorage.getItem("user_token");
        axios
            .get(BASE_URL + `/v1/api/event/${id}/unregister`
                , {
                    headers: {
                        Authorization: `Token ${token}`,
                    },
                })
            .then(res => {
                if (res.status === 200)
                    window.location.href = '/dashboard/Events'
                // console.log(res)
            })
            .catch(response => {

            });
    }
    infoMenushow = (index) => {
        document.getElementById("caevents-earnedcoupons-child-parent1" + index).style.display = "none";
        document.getElementById("caevents-earnedcoupons-child-parent2" + index).style.display = "block";
    }
    infoMenuhide = (index) => {
        document.getElementById("caevents-earnedcoupons-child-parent1" + index).style.display = "block";
        document.getElementById("caevents-earnedcoupons-child-parent2" + index).style.display = "none";
    }

    render() {
        return (
            <div className="caevents-parent">
                {this.state.appliedevents && this.state.appliedevents.length > 0 ?
                    <>
                        <div className="ca-events-parent-heading1 caeventsparent-font">
                            Applied Events
                </div>
                        <div className="caevents-line1"></div>
                    </>
                    : null}
                <div className="caevents-earnedcoupons-rowparent1">



                    {this.state.appliedevents.map((event, index) =>


                        <div key={index} className="caevents-earnedcoupons-child" style={{ backgroundImage: `url(${event.dashboard_image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                         }} >
                            {console.log(this.state.appliedevents, "helloboys")}
                            <div id={"caevents-earnedcoupons-child-parent1" + index}>
                                <div className="caevents-earnedcoupons-child-heading">
                                    {event.title}

                                </div>
                                {console.log(this.state.status[index],
                                    "asnkasjfjs")}
                                <div className="caevents-registration-status">
                                    {this.state.status[index] === "APP" ? <div>   <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 2C8.3 2 2 8.3 2 16C2 23.7 8.3 30 16 30C23.7 30 30 23.7 30 16C30 8.3 23.7 2 16 2Z" stroke="#E2574C" stroke-width="3" stroke-miterlimit="10" />
                                        <path d="M17.3996 7.4248H14.5996V8.9998H17.3996V7.4248Z" fill="#E2574C" />
                                        <path d="M17.3996 20.2002H14.5996V23.0002H17.3996V20.2002Z" fill="#E2574C" />
                                        <path d="M17.3996 9H14.5996V17.4H17.3996V9Z" fill="#E2574C" />
                                    </svg>Payment Pending</div> : null}
                                    {this.state.status[index] === "REG" ? <div> <svg width="20" height="20" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.2484 8.8584L12.474 15.7559L9.00471 12.2702L7.13477 14.1402L12.6052 19.6024L21.3972 11.0728L19.2484 8.8584Z" fill="#70BF48" />
                                        <path d="M14 0C6.26596 0 0 6.26596 0 14C0 21.734 6.26596 28 14 28C21.734 28 28 21.734 28 14C27.9918 6.26596 21.7258 0 14 0ZM14 25.4575C7.66842 25.4575 2.53427 20.3234 2.53427 13.9918C2.53427 7.66022 7.66842 2.52607 14 2.52607C20.3316 2.53427 25.4575 7.66022 25.4657 13.9918C25.4575 20.3316 20.3316 25.4575 14 25.4575Z" fill="#70BF48" />
                                    </svg>Registered Successfully</div> : null}



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
                                            {/* {console.log(event.id,"event_id")} */}
                                            <button id={"dashboard-events-applyevents" + index} onClick={() => { this.discardEvent(event.id) }}>DISCARD</button>
                                            <button className="caofferb01" onClick={() => this.infoMenushow(index)}>INFO</button>
                                        </div>
                                    </div>}
                            </div>
                            <div className="caevents-earnedcoupons-child-parent-parent" id={"caevents-earnedcoupons-child-parent2" + index}>
                                <div className="caevents-earnedcoupons-child-info">
                                    {event.long_description}
                                </div>

                                <div className="caevents-earnedcoupons-child-button">
                                    <button onClick={() => this.infoMenuhide(index)}>BACK</button>
                                </div>
                            </div>
                        </div>

                    )}

                </div>

                <div className="ca-events-parent-heading2 caeventsparent-font">
                    All Events
                </div>
                <div className="caevents-line1"></div>
                <Allevents />
            </div>
        )
    }
}
