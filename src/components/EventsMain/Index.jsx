import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Loadable from "react-loadable";
import Loader from "../../screens/loader/loader";
import axios from "axios"
import { BASE_URL } from "../../utils/urls"

const Events = Loadable({
    loader: () => import("./Events/EventComponent/Index"),
    loading: () => <Loader />,
});

const Events2 = Loadable({
    loader: () => import("./Events2/EventComponent/Index"),
    loading: () => <Loader />,
});

export default class EventsMainIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: "",
            faq: ''
        }
    } 
    componentDidMount() {
        // document 
        //     .getElementById("loader")
        //     .style
        //     .display = "grid";
        let event_name = this.props.match.params.id.charAt(0).toUpperCase() + this.props.match.params.id.slice(1)
        let data = {
            event_name: event_name
        }
        axios({
            method: "post",
            url: BASE_URL + "/v1/api/eventdetail/",
            data: data
        }).then((r) => {
            this.setState({
                data: r.data.event_data[0],
                faq: r.data
            })
            // document
            //     .getElementById("loader")
            //     .style
            //     .display = "none";
        }).catch((response) => {
            // document
            //     .getElementById("loader")
            //     .style
            //     .display = "none";
            // window.location.href = "/"
        });
    }
    render() {
        return (
            <React.Fragment>
                {this.state.data.event_type2 === "TYPE1" ?
                    <Route exact path="/events/:id" render={props => (<Events {...props} data={this.state.data} />)} /> :
                    this.state.data.event_type2 === "TYPE2" ?
                        <Route exact path="/events/:id" render={props => (<Events2 {...props} faq={this.state.faq} data={this.state.data} />)} />
                        : null
                }
            </React.Fragment>
        );
    }
}

