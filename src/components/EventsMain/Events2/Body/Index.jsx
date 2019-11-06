import React, { Component } from 'react';
import '../Common/ignite.css';
// import { BASE_URL } from "../../../../utils/urls"
import Content from "./content"

export default class BodyIndex extends Component {
    constructor() {
        super()
        this.state = {
            activeState: ""
        }
    }
    setActive = (state) => {
        this.setState({
            activeState: state
        });


    }
    componentDidMount() {
        this.setState({
            activeState: this.props.data.sub_events[0].sub_event_name
        });
    }
    render() {
        return (
            <div className="suignite-parent-childparent">
                <div id="events" className="suignite-parent-child1">
                    {this.props.data.sub_events.map((name, index) =>
                        <div key={index} className={this.state.activeState === name.sub_event_name ?
                            "suignite-parent-child1-active" :
                            "suignite-parent-child1-inactive"}
                            onClick={() => { this.setActive(name.sub_event_name); }}>
                            <p>{name.sub_event_name}</p>
                        </div>
                    )}

                </div>
                <div className="suignite-parent-child2">
                            {console.log(this.props.data,"tushar")}
                    {this.props.data.sub_events ?
                        <Content event_name={this.props.data.title} active={this.state.activeState} data={this.props.data.sub_events} />
                        : null}
                </div>
            </div>
        );
    }
}

