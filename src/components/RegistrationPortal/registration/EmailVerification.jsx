import React, { Component } from 'react';
import axios from "axios"
import correct from "./svg/correct.svg"
import wrong from "./svg/wrong.svg"
import { BASE_URL } from '../../../utils/urls';

let time_out;
export default class EmailVerification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            confirm_otp: "",
            email: "",
            otp: "",
            otp_error: "",
            otp_error_bool: "",
            email_verified: false,
            resend_email: "",
            resend_otp: false,
            email_error: "",
            email_error_bool: "",
            confirmation_otp_message: "",
            time: 120,
            otp_expired: false
        }
    }
    onChange = (e) => {
        const name = e.target.name;
        let value = e.target.value;
        this.setState({ [name]: value });
    }
    handleResendOTP = () => {
        let data = {
            email: this.state.resend_email,
        }
        document
            .getElementById("loader")
            .style
            .display = "grid";
        axios({
            method: "post",
            url: BASE_URL + "/v1/api/user/check-email/",
            data: data
        }).then((r) => {
            document
                .getElementById("loader")
                .style
                .display = "none";
            if (r.status === 200) {
                document
                    .getElementById("loader")
                    .style
                    .display = "grid";
                axios({
                    method: "post",
                    url: BASE_URL + "/v1/api/verification/",
                    data: data
                }).then((r) => {
                    this.setState({
                        otp: r.data.one_time_pass,
                        confirmation_otp_message: "OTP is successfully send.",
                        resend_otp: false,
                        confirm_otp: "",
                        time: 60,
                        otp_expired: false
                    })
                    document
                        .getElementById("loader")
                        .style
                        .display = "none";
                    clearTimeout(time_out)
                    this.another_timer()
                }).catch((response) => {
                    document
                        .getElementById("loader")
                        .style
                        .display = "none";
                });
            }
        }).catch((response) => {
            document
                .getElementById("loader")
                .style
                .display = "none";
            this.setState({
                email_error_bool: "true",
                email_error: "This email is already registered"
            })
        });

    }
    handleVerify = () => {
        if (parseInt(this.state.confirm_otp) === this.state.otp) {
        // if(true){
            this.setState({
                email_verified: true
            })
            let { otp, confirm_otp, email_verified, resend_email } = this.state
            let data = {
                otp: otp,
                confirm_otp: confirm_otp,
                email_verified: email_verified,
                resend_email: resend_email
            }
            this.props.handleSubmit(data)
        }
        else {
            this.setState({
                otp_error_bool: "true",
                otp_error: "Wrong OTP"
            })
        }
    }
    emailvalidate = () => {
        setTimeout(function () {
            var re = /\S+@\S+\.\S+/
            if (!this.state.resend_email.match(re)) {
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
    handleResend = () => {
        this.setState({
            resend_otp: true,
            otp_expired: true
        })
    }

    another_timer = () => {
        if (this.state.time > 0) {
            this.setState({
                time: this.state.time - 1
            })
            time_out = setTimeout(this.another_timer, 1000)
            return time_out
        }
        else {
            clearTimeout(time_out)
            return this.setState({
                otp_expired: true,
                otp: ""
            })
        }

    }

    componentDidMount() {
        const height = window.innerHeight
        let push = 0 * height
        window.scroll({ top: push, behavior: "auto" });
        this.setState({
            email: this.props.email,
            otp: this.props.handleOTP
        })
        const timer = () => {
            if (this.state.time > 0) {
                this.setState({
                    time: this.state.time - 1
                })
            }
            else {
                clearTimeout(time_out)
                this.setState({
                    otp_expired: true,
                    otp: ""
                })
            }
            time_out = setTimeout(timer, 1000)
            return time_out
        }
        timer()

    }
    render() {
        const { otp_expired, confirm_otp, otp_error, otp_error_bool, resend_otp, resend_email, email_error, email_error_bool } = this.state
        return (
            <div className="esummit-register-form-body-parent">
                {resend_otp ? null :
                    <div>
                        {!otp_expired ? <div className="esummit-register-form-message-verification">OTP has been successfully sent to your email.</div> : <div className="esummit-register-form-message-verification"><span style={{ color: "red", fontSize: "13px" }}>OTP is expired.</span> Click on resend otp to resend the one time password</div>}
                    </div>
                }
                {resend_otp && otp_expired ? null :
                    <div>
                        <div className="esummit-register-form-input-specific">
                            <label htmlFor="inputOTP">Enter OTP</label>
                            <div className="esummit-register-form-input-specific-inner">
                                <input
                                    id="inputOTP"
                                    type="number"
                                    className={otp_error === "" ? null : "esummit-register-form-field-error-text"}
                                    name="confirm_otp"
                                    autoCorrect="off"
                                    autoComplete="off"
                                    autoCapitalize="off"
                                    value={confirm_otp}
                                    maxLength={4}
                                    minLength={4}
                                    onChange={event => {
                                        this.onChange(event)
                                    }}
                                    spellCheck="false"
                                    required
                                />
                                <span className="esummit-register-form-field-error-svg">
                                    {otp_error_bool === "" ? null :
                                        <img src={otp_error_bool === "true" ? wrong : otp_error_bool === "false" ? correct : null} alt="correc/wrong" />
                                    }
                                </span>
                            </div>
                            <div className="esummit-register-form-field-error">{otp_error}</div>
                            {!otp_expired ?
                                <div className="esummit-register-form-timer">
                                    0{parseInt(this.state.time/60)}:{this.state.time%60 < 10 ? "0" : null}{this.state.time%60}
                                </div> : null}
                        </div>
                        <div className="esummit-register-form-resend-otp-field" onClick={this.handleResend}>Resend OTP</div>
                    </div>
                }
                {resend_otp && otp_expired ?
                    <div className="esummit-register-form-input-specific">
                        <label htmlFor="inputEmail">CONFIRMATION E-MAIL ID</label>
                        <div className="esummit-register-form-input-specific-inner">
                            <input
                                id="inputResendEmail"
                                type="email"
                                className={email_error === "" ? null : "esummit-register-form-field-error-text"}
                                placeholder="Re-enter your mail ID for confirmation email"
                                name="resend_email"
                                autoCorrect="off"
                                autoComplete="off"
                                autoCapitalize="off"
                                value={resend_email}
                                onChange={event => {
                                    this.onChange(event)
                                    this.emailvalidate()
                                }}
                                spellCheck="false"
                                required
                            />
                            <span className="esummit-register-form-field-error-svg">
                                {email_error_bool === "" ? null :
                                    <img src={email_error_bool === "true" ? wrong : email_error_bool === "false" ? correct : null} alt="correc/wrong" />
                                }
                            </span>
                        </div>
                        <div className="esummit-register-form-field-error">{email_error}</div>
                    </div>
                    : null}
                <div className="esummit-register-form-button">
                    {resend_otp ?
                        <div className="esummit-register-form-button-back" onClick={this.handleResendOTP}>
                            RESEND
                        </div>
                        :
                        <div className="esummit-register-form-button-back" onClick={this.handleVerify}>
                            VERIFY
                        </div>
                    }
                </div>
            </div>
        );
    }
}
