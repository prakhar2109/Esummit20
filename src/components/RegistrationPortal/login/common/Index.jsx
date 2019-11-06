import React, { Component } from 'react';
import "./css/common.css"
import esummit_logo from "./svg/esummit_logo.svg"
export default class CommonIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="esummit-login-common-parent-common">
                <div className="esummit-login-common-first-child">
                    <div className="esummit-login-common-grand-child-first">
                        <a href="/">
                        <img src={esummit_logo} alt="esummit_logo" />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
