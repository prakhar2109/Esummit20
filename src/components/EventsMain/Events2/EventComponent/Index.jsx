import React, { Component } from 'react';
import Header from "../Header/Index"
// import axios from "axios"
import { BASE_URL } from "../../../../utils/urls"
// import Eventfooter from "../Common/footer/eventfooter"
// import { NavLink } from "react-router-dom";
// import esummit from "../Common/es.png";
// import EventHeader from "../../Events/Common/Navbar/header"
import MobileNav from "../../../../NewScreens/mobile_nav/header"
import Eventfooter from "../Common/footer/eventfooter"
// import Nav from "../Common/nav/nav"
import "../../Events/Common/ideastorm.scss"
import Body from "../Body/Index"
import { NavLink } from "react-router-dom";
import jump from "jump.js"
import Faq from "../FAQ/Index"

class EventComponentIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: "",
            faq: ''
        }
    }
    componentDidMount() {
        this.setState({
            data: this.props.data,
            faq: this.props.faq
        })
    }

    events = () => {
        this.setState({
            displaynavbar: !this.state.displaynavbar
        })
        jump("#events");
    };
    coordinator = () => {
        this.setState({
            displaynavbar: !this.state.displaynavbar
        })
        jump("#coordinators");
    };

    faq_idea = () => {
        this.setState({
            displaynavbar: !this.state.displaynavbar
        })
        jump("#faq_idea", { offset: -70 });
    };
    render() {

        let token = localStorage.getItem("user_token");
        let tabs;



        if (token !== undefined && token !== null && token !== "") {
            tabs = (

                <span>
                    <NavLink to="/dashboard/invite">
                        <span style={{ marginLeft: "3vw" }} className="login">Dashboard</span>
                    </NavLink>

                </span>

            )
        }

        else {
            tabs = (
                <span>
                    <NavLink to="/login">
                        <span className="login" style={{ marginLeft: "0" }}>Log in</span>
                    </NavLink>
                    <NavLink to="/register">
                        <span className="register" style={{ padding: "10px 20px" }}>Register</span>
                    </NavLink>
                </span>
            )
        }
        return (
            <React.Fragment>
                <div className="ideastorm">
                    <div id="nav" className="header">
                        <span>
                            {this.state.data ?
                                <img alt="IdeaStorm" src={BASE_URL + this.state.data.logo} />
                                : null}
                        </span>
                        <span className="head_array">
                            {/* <span onClick={this.timeline}>Timeline</span> */}
                            <span onClick={this.events}>Events</span>
                            {/* <span onClick={this.eligiblity}>Eligiblity</span> */}
                            {/* <span onClick={this.erks}>Perks</span> */}
                            {/* <span onClick={this.register}>Apply</span> */}
                            <span onClick={this.faq_idea}>FAQs</span>
                            <span onClick={this.coordinator}>Contact Us</span>
                            <React.Fragment>
                                {tabs}
                            </React.Fragment>
                        </span>
                        <span />
                    </div>
                </div>
                <MobileNav logo={this.state.data.logo} />
                {this.state.data ?
                    <Header data={this.state.data} />
                    : null}
                {this.state.data ?
                    <Body data={this.state.data} />
                    : null}
                {this.state.faq ?
                    <Faq data={this.state.faq} />
                    : null}
                {/* <div className="es">
                    <center>
                        <NavLink to="/">
                            <img alt="Esummit Logo" src={esummit} />
                        </NavLink>
                    </center>

                    <p>
                        Go to &nbsp;
            <NavLink to="/">esummit.in</NavLink>
                    </p>
                </div> */}
                <Eventfooter />
            </React.Fragment>
        );
    }
}

export default EventComponentIndex;