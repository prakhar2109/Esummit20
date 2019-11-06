import React, { Component } from 'react';
import "./style.css"
import jump from "jump.js";
import { BASE_URL } from "../../../../utils/urls"
import "../Common/ideastorm.scss"
import "../Common/ignite.scss"
import "../Common/scrollanimation.css"

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
            <div className="esummit-idea" style={{
                backgroundImage: `url(${this.state.desktop ? BASE_URL + this.state.data.background_image_pc : BASE_URL + this.state.data.background_image_mobile})`
            }}>
                <p className="esummit-header_idea">
                    {this.state.data.heading}
                </p>
                <p>{this.state.data.subheading}</p>
                {this.state.data.prizes === "100" ? <p></p> :
                    <p className="esummit-cash-prize">{this.state.data.prizes}</p>}
                <p>
                    {this.state.data.description}
                </p>
                <div className="ignite-first-page-scroll">
                    <div onClick={this.timeline} className='icon-scroll'></div> <br />

                    <div id="ignite-first-page-scroll-child"> <p> SCROLL DOWN</p></div>
                </div>
                <center>

                </center>

            </div>
        );
    }
}

