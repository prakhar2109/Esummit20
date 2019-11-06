import React, { Component } from 'react';
import GoogleLogin from "react-google-login"
import FacebookLogin from "react-facebook-login"
import color_eye from "./svg/color-eye.svg"
import eye from "./svg/eye.svg"
import correct from "./svg/correct.svg"
import wrong from "./svg/wrong.svg"
import "./css/stepform.css"
import axios from "axios"
import { BASE_URL } from '../../../utils/urls';
// import axios from "axios"

export default class AccountSetup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            confirm_password: "",
            social_signup: false,
            toggleEye: "",
            toggleConfirmEye: "",
            image_url: "",
            name_error: "",
            name_error_bool: "",
            email_error: "",
            email_error_bool: "",
            pass_error: "",
            pass_error_bool: "",
            confirmpass_error: "",
            confirmpass_error_bool: ""
        }
    }

    onChange = (e) => {
        const name = e.target.name;
        let value = e.target.value;
        this.setState({ [name]: value });
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
    handleConfirmToggle = () => {
        this.setState({
            toggleConfirmEye: !this.state.toggleConfirmEye
        })
        if (document.getElementById("inputConfirmPassword").type === "password") { document.getElementById("inputPassword").type = "text" }
        else {
            document.getElementById("inputConfirmPassword").type = "password"
        }
    }
    handleSubmit = () => {
        if (this.state.name !== "") {

            if (this.state.email !== "") {
                let data_email = {
                    email: this.state.email
                }
                document
                    .getElementById("loader")
                    .style
                    .display = "grid";
                axios({
                    method: "post",
                    url: BASE_URL + "/v1/api/user/check-email/",
                    data: data_email
                }).then((r) => {
                    document
                        .getElementById("loader")
                        .style
                        .display = "none";
                    if (r.status === 200) {
                        if (this.state.pass !== "") {
                            if (this.state.password === this.state.confirm_password) {
                                let { name, email, password, confirm_password, social_signup } = this.state
                                if (name) name = name.trim()
                                if (email) email = email.trim()
                                if (password) password = password.trim()
                                if (confirm_password) confirm_password = confirm_password.trim()

                                let data = {
                                    name: name,
                                    email: email,
                                    password: password,
                                    confirm_password: confirm_password,
                                    social_signup: social_signup
                                }
                                this.props.handleSubmit(data)
                            }
                            else {
                                this.setState({
                                    confirmpass_error_bool: "true",
                                    confirmpass_error: "Password cannot be empty"
                                })
                            }
                        }
                        else {
                            this.setState({
                                pass_error_bool: "true",
                                pass_error: "Password cannot be empty"
                            })
                        }
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
            else {
                this.setState({
                    email_error_bool: "true",
                    email_error: "Email cannot be empty"
                })
            }
        }
        else {
            this.setState({
                name_error_bool: "true",
                name_error: "Name cannot be empty"
            })
        }

    }
    namevalidate = () => {

        setTimeout(function () {
            if (this.state.name.length < 3) {
                this.setState({
                    name_error_bool: "true",
                    name_error: "Name should be more than 3 letters"
                })
            } else {
                this.setState({
                    name_error_bool: "false",
                    name_error: ""
                })
            }
        }.bind(this), 1000)
    }
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

    confirmpassvalidate = () => {
        setTimeout(function () {
            if (this.state.password !== this.state.confirm_password) {
                this.setState({
                    confirmpass_error_bool: "true",
                    confirmpass_error: "Both passwords do not match"
                })
            } else {
                this.setState({
                    confirmpass_error_bool: "false",
                    confirmpass_error: ""
                })
            }
        }.bind(this), 1000)
    }

    responseFacebook = (response) => {
        this.setState({
            name: response.name,
            email: response.email,
            image_url: response.picture.data.url,
            social_signup: true
        })
        let { name, email, image_url, social_signup } = this.state
        let data = {
            name: name,
            email: email,
            image_url: image_url,
            social_signup: social_signup
        }
        this.props.handleFacebook(data)
        this.namevalidate()
        this.emailvalidate()
    }


    responseGoogle = (response) => {
        this.setState({
            name: response.profileObj.name,
            email: response.profileObj.email,
            image_url: response.profileObj.imageUrl,
            social_signup: true
        })
        let { name, email, image_url, social_signup } = this.state
        let data = {
            name: name,
            email: email,
            image_url: image_url,
            social_signup: social_signup
        }
        this.props.handleGoogle(data)
        this.namevalidate()
        this.emailvalidate()
    }

    componentDidMount() {
        const height = window.innerHeight

        let push = 0 * height
        window.scroll({ top: push, behavior: "auto" });
        this.setState({
            name: this.props.data.name,
            email: this.props.data.email,
            password: this.props.data.password,
            confirm_password: this.props.data.confirm_password
        })
        if (this.props.data.name !== "") {
            this.namevalidate()
        }
        if (this.props.data.email !== "") {
            this.emailvalidate()
        }
        if (this.props.data.password !== "") {
            this.passvalidate()
        }
        if (this.props.data.confirm_password !== "") {
            this.confirmpassvalidate()
        }
    }
    render() {

        const { email, name, password, confirm_password, toggleConfirmEye, toggleEye, name_error, name_error_bool, email_error, email_error_bool, pass_error, pass_error_bool, confirmpass_error, confirmpass_error_bool, } = this.state
        return (
            <div>
                <div className="esummit-register-form-body-parent">
                    <div className="esummit-register-form-body-social">
                        <GoogleLogin
                            clientId="828155572030-fugqa14to0jm8mkl2969lsc7ej49slhj.apps.googleusercontent.com"
                            buttonText="Google"
                            onSuccess={this.responseGoogle}
                            onFailure={this.responseGoogle}
                            className="tushar"
                            theme="dark"
                        />
                        <FacebookLogin
                            appId="1971509613151179"
                            size="medium"
                            autoLoad={true}
                            textButton="Facebook"
                            fields="name,email,picture"
                            cssClass="kep-login-facebook"
                            icon="fa-facebook"
                            callback={this.responseFacebook}
                        />
                    </div>
                    <div className="esummit-register-form-orsection">
                        <div className="esummit-register-form-orsection-hr"><hr /></div>
                        <span>OR</span>
                        <div className="esummit-register-form-orsection-hr-s"><hr /></div>
                    </div>
                    <div className="esummit-register-form-input-section">
                        <div className="esummit-register-form-input-specific">
                            <label htmlFor="inputname">FULL NAME</label>
                            <div className="esummit-register-form-input-specific-inner">
                                <input
                                    id="inputname"
                                    className={name_error === "" ? null : "esummit-register-form-field-error-text"}
                                    type="text"
                                    placeholder="Enter your full name"
                                    name="name"
                                    autoCorrect="off"
                                    autoComplete="off"
                                    autoCapitalize="off"
                                    value={name}
                                    onChange={event => {

                                        this.onChange(event)
                                        this.namevalidate()
                                    }}
                                    spellCheck="false"
                                    required
                                />
                                <span className="esummit-register-form-field-error-svg">
                                    {name_error_bool === "" ? null :
                                        <img alt="correc/wrong" src={name_error_bool === "true" ? wrong : name_error_bool === "false" ? correct : null} />
                                    }
                                </span>
                            </div>
                            <div className="esummit-register-form-field-error">{name_error}</div>
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
                                        if (this.state.social_signup) {

                                            return this.emailvalidate()
                                        }
                                        else {
                                            this.onChange(event)
                                            this.emailvalidate()
                                        }
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
                                <label htmlFor="inputConfirmPassword">CONFIRM PASSWORD</label>
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
                                            this.onChange(event)
                                            this.confirmpassvalidate()
                                        }}
                                        spellCheck="false"
                                        required
                                    />
                                    <span onClick={this.handleConfirmToggle}><img alt="images" className="esummit-register-form-input-specific-eye-svg" src={!toggleConfirmEye ? eye : color_eye} /></span>
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
                    <div className="esummit-register-form-button">
                        <div className="esummit-register-form-button-back" onClick={this.handleSubmit}>NEXT</div>
                    </div>
                </div>
            </div>
        );
    }
}
