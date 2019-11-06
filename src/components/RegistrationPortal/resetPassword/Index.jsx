import React, { Component } from 'react';
import Loader from "../../../screens/loader/loader"
import { Link } from "react-router-dom"
import correct from "../registration/svg/correct.svg"
import wrong from "../registration/svg/wrong.svg"
import "../registration/css/stepform.css"
import color_eye from "../registration/svg/color-eye.svg"
import eye from "../registration/svg/eye.svg"
import "../registration/css/stepform.css"
import axios from "axios"
import { BASE_URL } from "../../../utils/urls"
import CommonIndex from "../login/common/Index"
import "../FindAccount/style.css"
export default class ResetpasswordIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pass_error: "",
            pass_error_bool: "",
            password: "",
            toggleEye: false,
            password: "",
            confirm_password: "",
            confirm_bool: false,
            confirmpass_error: "",
            confirmpass_error_bool: "",
            url: window.location.pathname.substring(15)
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.password !== "") {
            if (this.state.confirm_password !== "") {
                if (this.state.confirm_password === this.state.password) {
                    let { password, url } = this.state
                    if (password) password = password.trim()
                    let info = {
                        password: password
                    }
                    document
                        .getElementById("loader")
                        .style
                        .display = "grid";
                    axios({
                        method: "post",
                        url: BASE_URL + `/v1/api/user/reset-password${url}`,
                        data: info,
                    }).then(r => {
                        document
                            .getElementById("loader")
                            .style
                            .display = "none";
                        this.setState({
                            confirm_bool: true,
                            confirmation_message: "Password has being succesfully changed please go back to login page and login."
                        })
                    }).catch(response => {
                        document
                            .getElementById("loader")
                            .style
                            .display = "none";
                        this.setState({
                            error_message: "Something went wrong!"
                        })
                        window.location.href = "/login"
                    });
                }
                else {
                    this.confirmpassvalidate()
                }
            }
            else {
                this.setState({
                    confirmpass_error: "true",
                    confirmpass_error_bool: "Confirm password field cannot be empty",
                })
            }
        }
        else {
            this.setState({
                pass_error: "true",
                pass_error_bool: "Password field cannot be empty",
            })
        }

    }
    confirmpassvalidate = () => {
        let { password, confirm_password } = this.state
        if (password !== confirm_password && confirm_password !== "") {
            this.setState({
                confirmpass_error_bool: "true",
                confirmpass_error: "Both passwords do not match"
            })
        }
        else {
            this.setState({
                confirmpass_error_bool: "false",
                confirmpass_error: ""
            })
        }
    }
    passvalidate = () => {
        let { password } = this.state
        setTimeout(function () {
            if (password.length < 7) {
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
    handleToggle = () => {
        this.setState({
            toggleEye: !this.state.toggleEye
        })
        if (document.getElementById("inputPassword").type === "password") { document.getElementById("inputPassword").type = "text" }
        else {
            document.getElementById("inputPassword").type = "password"
        }
    }
    onChange = (e) => {
        const name = e.target.name;
        let value = e.target.value;
        this.setState({ [name]: value });
        setTimeout(() => this.confirmpassvalidate(), 1000)
    }
    componentDidMount() {
        let uuid = window.location.pathname.substring(15)
        document
            .getElementById("loader")
            .style
            .display = "grid";
        axios({
            method: "post",
            url: BASE_URL + "/v1/api/user/verify-code" + uuid,
        }).then(r => {
            document
                .getElementById("loader")
                .style
                .display = "none";
            this.setState({
                url: window.location.pathname.substring(15)
            })
        }).catch(response => {
            document
                .getElementById("loader")
                .style
                .display = "none";
            // window.location.href = "/register"
        });

    }
    render() {
        const { confirm_bool, password, confirm_password, toggleEye, pass_error, pass_error_bool, confirmpass_error, confirmpass_error_bool, } = this.state
        return (
            <div className="esummit-common-parent" >

                <CommonIndex />
                <div className="esummit-register-parent-login">
                    <div className="esummit-register-form-parent">
                        <div className="esummit-register-form-heading">
                            <div className="esummit-regsiter-form-heading-child">
                                RESET PASSWORD
                            </div>
                            <div className="esummit-regsiter-form-heading-child-second">
                                Choose a new password
                            </div>
                        </div>
                        <div>
                            <form onSubmit={this.handleSubmit} noValidate>
                                <Loader />
                                <div style={{ marginTop: "6%" }} className="esummit-register-form-body-parent">
                                    <div className="esummit-register-form-error-message-handle">
                                        {this.state.error_message}
                                    </div>
                                    <div className="esummit-register-form-confirm-message-handle">
                                        {this.state.confirmation_message}
                                    </div>
                                    {!confirm_bool ?
                                        <div>
                                            <div className="esummit-register-form-input-specific">
                                                <label htmlFor="inputPassword">NEW PASSWORD</label>
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
                                                    <span onClick={this.handleToggle}><img alt="images" className="esummit-register-form-input-specific-eye-svg" src={!toggleEye ? eye : color_eye} /></span>
                                                    <span className="esummit-register-form-field-error-svg">
                                                        {pass_error_bool === "" ? null :
                                                            <img alt="correc/wrong" src={pass_error_bool === "true" ? wrong : pass_error_bool === "false" ? correct : null} />
                                                        }
                                                    </span>
                                                </div>
                                                <div className="esummit-register-form-field-error">{pass_error}</div>
                                            </div>
                                            {pass_error_bool === "false" ?
                                                <div className="esummit-register-form-input-specific">
                                                    <label htmlFor="inputConfirmPassword">CONFIRM NEW PASSWORD</label>
                                                    <div className="esummit-register-form-input-specific-eye">
                                                        <input
                                                            id="inputConfirmPassword"
                                                            type="password"
                                                            className={confirmpass_error === "" ? null : "esummit-register-form-field-error-text"}
                                                            placeholder="Enter your password again"
                                                            name="confirm_password"
                                                            autoCorrect="off"
                                                            autoComplete="off"
                                                            autoCapitalize="off"
                                                            value={confirm_password}
                                                            onChange={event => {
                                                                // this.confirmpassvalidate()
                                                                this.onChange(event)
                                                            }}
                                                            spellCheck="false"
                                                            required
                                                        />
                                                        <span className="esummit-register-form-field-error-svg">
                                                            {confirmpass_error_bool === "" ? null :
                                                                <img alt="correc/wrong" src={confirmpass_error_bool === "true" ? wrong : confirmpass_error_bool === "false" ? correct : null} />
                                                            }
                                                        </span>
                                                    </div>
                                                    <div className="esummit-register-form-field-error">{confirmpass_error}</div>
                                                </div>
                                                : null}
                                        </div>
                                        : null}
                                    {!confirm_bool ?
                                        <div className="esummit-register-form-button">
                                            <button type="submit">SUBMIT</button>
                                        </div>
                                        :
                                        <div className="esummit-register-form-button">
                                            <Link style={{ textDecoration: "none" }} to="/login">
                                                <div className="esummit-register-form-reset-button-try-different-other">
                                                    BACK
                                                </div>
                                            </Link>
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
