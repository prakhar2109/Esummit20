import React, { Component } from 'react';
import Loadable from "react-loadable";
import Loader from "../../../screens/loader/loader";
import { Route } from "react-router-dom";

const FindAccount = Loadable({
    loader: () => import("../FindAccount/Index"),
    loading: () => <Loader />,
});
const ResetPasswordField = Loadable({
    loader: () => import("../resetPassword/Index"),
    loading: () => <Loader />,
});


export default class ResetIndex extends Component {
    render() {
        return (
            <React.Fragment>
                <Route exact path="/reset-password" component={FindAccount} />
                <Route exact path="/reset-password/:para" component={ResetPasswordField} />
            </React.Fragment>
        );
    }
}
