import React, { Component } from 'react';
import "./style.css"
import Header from "../Common/header"
import { BASE_URL } from '../../../../utils/urls';

export default class PerksSection extends Component {
    render() {
        return (
            <div className="erks">
                <Header title="PERKS" />
                <center>
                    <div className="perks_unit">
                        <div className="perks_array">
                            {this.props.data.map((perks, index) =>
                                <div key={index} className="perks_unit">
                                    <img src={BASE_URL + perks.image} alt="Cash Rewards" />
                                    <span className="esummit-perks-heading">{perks.heading}:</span>
                                    {perks.description}
                                </div>
                            )}
                        </div>
                    </div>
                </center>
            </div>
        );
    }
}

