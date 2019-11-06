import React, { Component } from 'react';
import "./css/common.css"
import esummit_logo from "./svg/esummit_logo.svg"
export default class CommonIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dot_display: false
        }
    }
    componentDidMount() {
        if (window.innerWidth >= 768) {
            this.setState(
                {
                    dot_display: true
                }
            )
        }
    }
    render() {
        return (
            <div className="esummit-common-parent-common">
                <div className="esummit-common-first-child">
                    <div className="esummit-common-grand-child-first">
                    <a href="/">
                    <img src={esummit_logo} alt="esummit-logo" />
                    </a>
                    </div>
                    {/* <div className="esummit-common-grand-child-second">
                        <img src={ecell_logo} />
                    </div> */}
                    <div className="esummit-common-second-child">
                        {this.state.dot_display ?
                            <hr className="esummit-common-dotted-line" />
                            : null}
                        <span>E-SUMMIT’19 REGISTRATION PORTAL</span>
                        {this.state.dot_display ?
                            <hr className="esummit-common-dotted-line" />
                            : null}
                    </div>
                </div>
            </div>
        );
    }
}
