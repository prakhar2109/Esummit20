import React, { Component } from 'react';
import { BASE_URL } from "../../../../utils/urls"
import parse from 'html-react-parser'

export default class SmallEventData extends Component {
    render() {
        return (
            <React.Fragment>
                <p className="suignite-topic-heading">
                    {this.props.data && this.props.data.heading}
                </p>
                {this.props.data.para === "yes" ?
                    <p className="suignite-topic-para">
                        {this.props.data && parse(this.props.data.paragraph)}
                    </p>
                    : null}
                {this.props.data && this.props.data.bullets === "yes" ?
                    <ul>
                        {this.props.data && this.props.data.bullets_data && this.props.data.bullets_data.map((e, index) =>
                            <li key={index}>
                                {e.data}
                            </li>
                        )}
                    </ul>
                    : null
                }
                {this.props.data && this.props.data.array === "yes" ?
                    <div className="suignite-panelists-img-parent">
                        {this.props.data && this.props.data.array_data && this.props.data.array_data.map((e, index) =>
                            <div key={index} className="suignite-panelists-img-child">
                                <div className="suignite-panelists-img1" style={{
                                    backgroundImage: `url(${BASE_URL + e.photo})`
                                }}></div>
                                <div className="panelists-name">{e.name}</div>
                                <div className="panelists-company">{e.designation}, {e.companay_name}</div>
                            </div>
                        )}
                    </div>
                    : null}
                {this.props.data && this.props.data.speaker_2 !== "" ?
                    this.props.data.speaker_2.map((speaker, index) =>
                        <div key={index} className="suignite-guestlecture-child-parent" >
                            {console.log(speaker, "speaker")}
                            <div className="suignite-guestlecture-child1 back-jaipur-second" style={{
                                backgroundImage: `url(${BASE_URL + speaker.photo})`
                            }}></div>
                            <div className="suignite-guestlecture-child2">
                                <p>{speaker.name}</p>
                                <p>{speaker.designation}, {speaker.companay_name}</p>
                                <p>Topic : {speaker.topic}</p>
                                <p>{speaker.description}</p>
                            </div>
                        </div>
                    )
                    : null}
            </React.Fragment >
        );
    }
}

