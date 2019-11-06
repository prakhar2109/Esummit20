import React, { Component } from 'react';
import SmallEventData from "./smalleventdata"
import Vector from '../Common/img/headVector.png';

export default class SmallEventIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        let { data } = this.props;
        return (
            data.map(datum => <React.Fragment>
                {datum ?
                    <div id={datum.heading === "Event Coordinators" ? "coordinators" : null} className="suignite-parent-child2-panel">
                        {datum && datum.heading ?
                            <div>
                                <img className="suignite-vector" src={Vector} alt="vector" />
                                <div className="suignite-head1">{datum.heading}</div>
                            </div>
                            : null}

                        {datum && datum.data && datum.data.map((e, index) =>
                            <SmallEventData key={index} data={e} />
                        )}
                    </div>
                    : null}
            </React.Fragment>)
        );
    }
}

