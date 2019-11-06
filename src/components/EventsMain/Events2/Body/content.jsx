import React, { Component } from 'react';
import SmallEvent from "./smallevent"

export default class ContentIndex extends Component {
    render() {
        console.log(this.props.data, "again")
        return (
            <React.Fragment>
                {console.log(this.props.data, "tushar")}
                {this.props.data && this.props.data.map((body, index) => {

                    return (
                        body.sub_event_name === this.props.active ?
                            <div key={index}>
                                {body.apply_now_description !== "100" ?
                                    <div className="suignite-parent-child2-applyparent">
                                        <div className="suignite-parent-child2-applyparent-heading">
                                            {body.apply_now_description}
                                        </div>
                                        <a href={body.sub_event_reg_url} target="_blank">
                                            <button id="suignite-parent-child2-applyparent-button">
                                                APPLY
                                        </button>
                                        </a>
                                    </div>
                                    : null}

                                {this.props.data && this.props.data.map((e, index) =>
                                    e.sub_event_name === this.props.active && <SmallEvent key={index} data={e.detail} />
                                )}
                            </div>
                            : null
                    )
                })}
            </React.Fragment>
        );
    }
}

