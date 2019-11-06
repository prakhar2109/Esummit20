import React from 'react';
import CommonIndex from "../login/common/Index"
import Loader from "../../../screens/loader/loader"
import { Link } from "react-router-dom"
import correct from "../registration/svg/correct.svg"
import wrong from "../registration/svg/wrong.svg"
import "../registration/css/stepform.css"
import { BASE_URL } from "../../../utils/urls";
import axios from "axios"
import "./style.css"

export default class RegisterIndex extends React.Component {
    constructor() {
        super()
        this.state = {
            email: "",
            email_error: "",
            email_error_bool: "",
            error_message: '',
            confirmation_message: "",
            confirm_bool: false
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let { email } = this.state
        if (email !== "") {
            let data_email = {
                email: email
            }
            document
                .getElementById("loader")
                .style
                .display = "none";
            document
                .getElementById("loader")
                .style
                .display = "grid";
            axios({
                method: "post",
                url: BASE_URL + "/v1/api/user/forgot-password/",
                data: data_email
            }).then((r) => {
                document
                    .getElementById("loader")
                    .style
                    .display = "none";
                this.setState({
                    confirmation_message: "A link has been successfully sent to your email.",
                    confirm_bool: true
                })
            }).catch((response) => {
                if (response.response.status === 404) {
                    document
                        .getElementById("loader")
                        .style
                        .display = "none";
                    this.setState({
                        email_error_bool: "true",
                        email_error: "This email is not registered. Please register with this email!"
                    })
                }
                else {
                    document
                        .getElementById("loader")
                        .style
                        .display = "none";
                    this.setState({
                        error_message: "Something went wrong!"
                    })
                }
            });

        }
    }
    handleResend = () => {
        let { email } = this.state
        if (email !== "") {
            let data_email = {
                email: email
            }
            document
                .getElementById("loader")
                .style
                .display = "none";
            document
                .getElementById("loader")
                .style
                .display = "grid";
            axios({
                method: "post",
                url: BASE_URL + "/v1/api/user/forgot-password/",
                data: data_email
            }).then((r) => {
                document
                    .getElementById("loader")
                    .style
                    .display = "none";
                this.setState({
                    confirmation_message: "A link has been successfully sent to your email.",
                    confirm_bool: true
                })
            }).catch((response) => {
                if (response.response.status === 404) {
                    document
                        .getElementById("loader")
                        .style
                        .display = "none";
                }
                else {
                    document
                        .getElementById("loader")
                        .style
                        .display = "none";
                    this.setState({
                        error_message: "Something went wrong!"
                    })
                }
            });

        }
    }
    emailvalidate = () => {
        let { email } = this.state
        setTimeout(function () {
            var re = /\S+@\S+\.\S+/
            if (email.match(re)) {
                this.setState({
                    email_error_bool: "true",
                    email_error: "Email is not valid"
                })

            } else {
                this.setState({
                    email_error_bool: "false",
                    email_error: ""
                })
            }
        }.bind(this), 1000)
    }
    onChange = (e) => {
        const name = e.target.name;
        let value = e.target.value;
        this.setState({ [name]: value });
    }

    handleTryDifferent = () => {
        this.setState({
            confirm_bool: false
        })
    }

    componentDidMount() {
        const height = window.innerHeight
        let push = 0 * height
        window.scroll({ top: push, behavior: "auto" });
        document
            .getElementById("loader")
            .style
            .display = "none";
    }

    render() {

        const { email, email_error, email_error_bool, confirm_bool } = this.state
        return (
            <div className="esummit-common-parent" >
                <CommonIndex />
                <div className="esummit-register-parent-login">
                    <div className="esummit-register-form-parent">
                        <div className="esummit-register-form-heading">
                            <div className="esummit-regsiter-form-heading-child">
                                FIND YOUR ACCOUNT
                            </div>
                            <div className="esummit-regsiter-form-heading-child-second">
                                First let's find your account
                            </div>
                        </div>
                        <div>
                            <form onSubmit={this.handleSubmit} noValidate>
                                <Loader />
                                <div className="esummit-register-form-body-parent">
                                    <div className="esummit-resent-password-second-heading">
                                        Please enter your email address to search for your account
                                            </div>
                                    <div className="esummit-register-form-error-message-handle">
                                        {this.state.error_message}
                                    </div>
                                    <div className="esummit-register-form-confirm-message-handle">
                                        {this.state.confirmation_message}
                                    </div>
                                    {!confirm_bool ?
                                        <div>
                                            <div className="esummit-register-form-input-specific">
                                                <label htmlFor="inputEmail">E-MAIL ID</label>
                                                <div className="esummit-register-form-input-specific-inner">
                                                    <input
                                                        id="inputEmail"
                                                        type="email"
                                                        className={email_error === "" ? null : "esummit-register-form-field-error-text"}
                                                        placeholder="Enter your mail ID"
                                                        name="email"
                                                        autoCorrect="off"
                                                        autoComplete="off"
                                                        autoCapitalize="off"
                                                        value={email}
                                                        onChange={event => {
                                                            this.onChange(event)
                                                            this.emailvalidate()
                                                        }}
                                                        spellCheck="false"
                                                        required
                                                    />
                                                    <span className="esummit-register-form-field-error-svg">
                                                        {email_error_bool === "" ? null :
                                                            <img alt="correc/wrong" src={email_error_bool === "true" ? wrong : email_error_bool === "false" ? correct : null} />
                                                        }
                                                    </span>
                                                </div>
                                                <div className="esummit-register-form-field-error">{email_error}</div>
                                            </div>
                                        </div>
                                        : null}
                                    {!confirm_bool ?
                                        <div className="esummit-register-form-button">
                                            <Link style={{ textDecoration: "none" }} to="/login">
                                                <div className="esummit-register-form-reset-button-cancel">
                                                    CANCEL
                                                </div>
                                            </Link>
                                            <button type="submit">FIND YOUR ACCOUNT</button>
                                        </div>
                                        :
                                        <div className="esummit-register-form-button">
                                            <div className="esummit-register-form-reset-button-try-different-other" onClick={this.handleTryDifferent}>
                                                TRY DIFFERENT E-MAIL
                                            </div>
                                            <div className="esummit-register-form-reset-button-cancel" onClick={this.handleResend}>
                                                RESEND EMAIL
                                            </div>
                                        </div>
                                    }
                                </div>
                            </form>
                        </div>
                    </div>
                </div >
                <div className="esummit-register-form-footer">
                    <span>Don't have an account?</span>
                    <span><Link to="/register">Register</Link></span>
                </div>
            </div >
        );
    }
}


