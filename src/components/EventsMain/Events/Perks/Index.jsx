import React, { Component } from 'react';
import "./style.css"
import { BASE_URL } from '../../../../utils/urls';
/* eslint-disable react/prop-types */
export function SinglePerk(props) {
    return (
        <div className="single-perk">
            <img src={props.src} style={props.style} alt="Perk Photo" />
            <p className="perk-title">{props.perkTitle}</p>
            <p className="perk-about">{props.perkAbout}</p>
        </div>
    )
}

export default class PerksSection extends Component {
    render() {
        return (
            <div className="perk-parent">
                <div className="perk-head">PERKS</div>

                <div className="perk-board">
                    {this.props.data.map((perks, index) =>
                        <SinglePerk
                            key={index}
                            src={BASE_URL + perks.image}
                            style={{ width: '200px' }}
                            perkTitle={perks.heading}
                            perkAbout={perks.description}
                        />
                    )}
                </div>
            </div>
        );
    }
}
/* eslint-disable react/prop-types */

