import React, { Component } from 'react';
import "./style.css"
import jump from "jump.js";
import { BASE_URL } from "../../../../utils/urls"

import "../Common/scrollanimation.css"
/* eslint-disable react/prop-types */

export default class HeaderSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: "",
            desktop: true
        }
    }
    timeline = () => {
        jump(".Rules", { offset: -130 });
    };
    componentDidMount() {
        this.setState({
            data: this.props.data[0]
        })
        if (window.innerWidth <= 768) {
            this.setState({ desktop: false });
        }

    }
    render() {
        return (
            // <div className="esummit-idea" style={{
            //     backgroundImage: `url(${this.state.desktop ? BASE_URL + this.state.data.background_image_pc : BASE_URL + this.state.data.background_image_mobile})`
            // }}>
            //     <p className="esummit-header_idea">
            //         {this.state.data.heading}
            //     </p>
            //     <p>{this.state.data.subheading}</p>
            //     {this.state.data.prizes === "100" ? <p></p> :
            //         <p className="esummit-cash-prize">{this.state.data.prizes}</p>}
            //     <p>
            //         {this.state.data.description}
            //     </p>
            //     <div className="ignite-first-page-scroll">
            //         <div onClick={this.timeline} className='icon-scroll'></div> <br />

            //         <div id="ignite-first-page-scroll-child"> <p> SCROLL DOWN</p></div>
            //     </div>
            //     <center>

            //     </center>

            // </div>


            <div className="ideastormHeaderSection">
            <p> {this.state.data.heading}</p>
    
            <p>{this.state.data.subheading}</p>
    
            <br />
            <br />
            <br />
            <p>{this.state.data.prizes}</p>
    
            <p>
            {this.state.data.description}
            </p>
            <div className="register">
              <a
                without
                rel="noopener noreferrer"
                href={this.props.applydata[0].registration_url}
                target="_blank"
              >
               <span style={{ textTransform: "uppercase" }}>
                APPLY FOR {this.props.name}
              </span>
              </a>
            </div>
          </div>
        );
    }
}
/* eslint-disable react/prop-types */

