import React, { Component } from 'react';
import "./style.css"
import Header from "../Common/header"

export default class RulesSection extends Component {
    render() {
        return (
            <div className="Rules">
                <Header title="RULES & REGULATIONS" />
                <ol>
                    {this.props.data.map((rules, index) =>
                        <li key={index}>{rules.rules}</li>
                    )}
                </ol>
            </div>
        );
    }
}

