import React, { Component } from 'react';
// import { Helmet } from "react-helmet";
import "./css/reset.css"
import "./css/style.css"
import timelinejs from "./main"

export default class Timeline extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        timelinejs()
    }
    render() {
        return (
            <div className="cd-horizontal-timeline-parent">
                <section className="cd-horizontal-timeline">
                    <div className="timeline">
                        <div className="events-wrapper">
                            <div className="events">
                                <ol>
                                    <li><a href="#0" data-date="16/01/2014" className="selected" >Round 1</a></li>
                                    <li><a href="#0" data-date="20/04/2014" >Round 2</a></li>
                                    <li><a href="#0" data-date="09/07/2014">Round 3</a></li>
                                    <li><a href="#0" data-date="15/09/2014">Round 4</a></li>
                                </ol>

                                <span className="filling-line" aria-hidden="true"></span>
                            </div>
                        </div>

                        <ul className="cd-timeline-navigation">
                            <li><a href="#0" className="prev inactive">Prev</a></li>
                            <li><a href="#0" className="next">Next</a></li>
                        </ul>
                    </div>

                    <div className="events-content">
                        <ol>
                            <li className="selected" data-date="16/01/2014">
                                <h2>Horizontal Timeline</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
				                </p>
                            </li>

                            <li data-date="20/04/2014">
                                <h2>Event title here</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
				                </p>
                            </li>

                            <li data-date="09/07/2014">
                                <h2>Event title here</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
				                </p>
                            </li>

                            <li data-date="15/09/2014">
                                <h2>Event title here</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
				                </p>
                            </li>
                        </ol>
                    </div>
                </section>

            </div>
        );
    }
}

