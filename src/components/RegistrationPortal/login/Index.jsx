import React from 'react';
import CommonIndex from "./common/Index"
import Loader from "../../../screens/loader/loader"
import { Link } from "react-router-dom"
import color_eye from "../registration/svg/color-eye.svg"
import eye from "../registration/svg/eye.svg"
import correct from "../registration/svg/correct.svg"
import wrong from "../registration/svg/wrong.svg"
import "../registration/css/stepform.css"
import { BASE_URL } from "../../../utils/urls";
import axios from "axios"

export default class RegisterIndex extends React.Component {
    constructor() {
        super()
        this.state = {
            toggleEye: false,
            toggleConfirmEye: false,
            email: "",
            password: "",
            email_error: "",
            email_error_bool: "",
            pass_error: "",
            pass_error_bool: "",
            error_message: ''
        }
    }
    handleToggle = () => {
        this.setState({
            toggleEye: !this.state.toggleEye
        })
        if (document.getElementById("inputPassword").type === "password") { document.getElementById("inputPassword").type = "text" }
        else {
            document.getElementById("inputPassword").type = "password"
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()


        let data = {
            email: this.state.email,
            password: this.state.password
        }


        document
            .getElementById("loader")
            .style
            .display = "grid";
        axios({
            method: "post",
            url: BASE_URL + "/v1/api/user/login",
            data: data,
            config: {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }
        }).then(function (res) {


            if (res !== undefined && res.data !== undefined) {
                if (res.data) {

                    if (res.data.token) {
                        localStorage.setItem("user_token", res.data.token);
                    }
                    window.location.href = "/dashboard/invite";
                    document
                        .getElementById("loader")
                        .style
                        .display = "none";
                    data = "";
                }
            }
        })

            .catch(response => {

                document
                    .getElementById("loader")
                    .style
                    .display = "none";
                this.setState({
                    error_message: "Email/Password is invalid",
                    email: "",
                    password: "",
                    email_error_bool: "",
                    pass_error_bool: ""
                })

            });

    }



    // responseFacebook = (response) => {
    //     this.setState({
    //         name: response.name,
    //         email: response.email,
    //         image_url: response.image_url,
    //         social_signup: response.social_signup
    //     })
    // }


    // responseGoogle = (response) => {
    //     this.setState({
    //         name: response.name,
    //         email: response.email,
    //         image_url: response.image_url,
    //         social_signup: response.social_signup
    //     })
    // }

    emailvalidate = () => {

        setTimeout(function () {
            var re = /\S+@\S+\.\S+/
            if (!this.state.email.match(re)) {
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
    passvalidate = () => {
        setTimeout(function () {
            if (this.state.password.length < 7) {
                this.setState({
                    pass_error_bool: "true",
                    pass_error: "Password should be more than 8 letters"
                })

            } else {
                this.setState({
                    pass_error_bool: "false",
                    pass_error: ""
                })
            }
        }.bind(this), 1000)
    }
    onChange = (e) => {
        const name = e.target.name;
        let value = e.target.value;
        this.setState({ [name]: value });
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

        const { email, password, toggleEye, email_error, email_error_bool, pass_error, pass_error_bool } = this.state
        return (
            <div className="esummit-common-parent" >
                <CommonIndex />
                <div className="esummit-register-parent-login">
                    <div className="esummit-register-form-parent">
                        <div className="esummit-register-form-heading">
                            <div className="esummit-regsiter-form-heading-child">
                                LOG IN
                            </div>
                        </div>
                        <div>
                            <form onSubmit={this.handleSubmit}>
                                <Loader />
                                <div className="esummit-register-form-body-parent">
                                    <div className="esummit-register-form-error-message-handle">
                                        {this.state.error_message}
                                    </div>
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
                                    <div className="esummit-register-form-input-specific">
                                        <label htmlFor="inputPassword">PASSWORD</label>
                                        <div className="esummit-register-form-input-specific-eye">
                                            <input
                                                id="inputPassword"
                                                type="password"
                                                className={pass_error === "" ? null : "esummit-register-form-field-error-text"}
                                                placeholder="Enter password"
                                                name="password"
                                                autoCorrect="off"
                                                autoComplete="off"
                                                autoCapitalize="off"
                                                value={password}
                                                onChange={event => {
                                                    this.onChange(event)
                                                    this.passvalidate()
                                                }}
                                                spellCheck="false"
                                                required
                                            />
                                            <span onClick={this.handleToggle}><img alt="" className="esummit-register-form-input-specific-eye-svg" src={!toggleEye ? eye : color_eye} /></span>
                                            <span className="esummit-register-form-field-error-svg">
                                                {pass_error_bool === "" ? null :
                                                    <img alt="correc/wrong" src={pass_error_bool === "true" ? wrong : pass_error_bool === "false" ? correct : null} />
                                                }
                                            </span>
                                        </div>
                                        <div className="esummit-register-form-field-error">{pass_error}</div>
                                    </div>
                                    <div className="esummit-register-form-forgot-password-text">
                                        <Link style={{ textDecoration: "none", cursor: "pointer" }} to="/reset-password">Forgot your password?</Link>
                                    </div>
                                    <div className="esummit-register-form-button">
                                        <button type="submit">LOGIN</button>
                                    </div>
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


