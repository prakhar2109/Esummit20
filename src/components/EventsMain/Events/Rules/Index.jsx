import React, { Component } from 'react';
import "./style.css"
import Header from "../Common/header"
/* eslint-disable react/prop-types */

export default class RulesSection extends Component {
    render() {
        return (
            <div className="ideastormRules">
                <p>RULES & REGULATIONS </p>
                <ol>
                    {this.props.data.map((rules, index) =>
                        <li key={index}>{rules.rules}</li>
                    )}
                </ol>
            </div>
        );
    }
}

/* eslint-disable react/prop-types */
