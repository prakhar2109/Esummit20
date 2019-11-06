import React, { Component } from 'react';
export default class ProfileType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile_type: "",
            profile_error: ""
        }
    }
    onProfileChange = (e) => {
        this.setState({
            profile_type: e.target.value
        })
    }
    handleNext = () => {
        if (this.state.profile_type !== "" && this.state.profile_type !== "contingent") {
            let { profile_type } = this.state
            let data = {
                profile_type: profile_type
            }
            this.props.handleProfile(data)
        }
        else {
            this.setState({
                profile_error: "You have to select one of the above."
            })
        }
    }
    componentDidMount() {
        const height = window.innerHeight
        let push = 0 * height
        window.scroll({ top: push, behavior: "auto" });
        this.setState({
            profile_type: this.props.profile_type
        })
    }
    render() {
        return (
            <div>
                <div className="esummit-resgiter-form-profile-type-parent">
                    <div className="esummit-resgiter-form-profile-type-heading">
                        You need to select one of these
                    </div>
                    <div className="esummit-resgiter-form-profile-type-body">
                        <label className="esummit-profile-type-container">
                            <input type="radio" name="profile_type" value="iitr_student" checked={this.state.profile_type === "iitr_student" ? true : false} onChange={this.onProfileChange} />
                            <span className="esummit-profile-type-checkmark"></span>
                            <span className="esummit-profile-type-input-text">IITR STUDENT</span>
                        </label>
                        <label className="esummit-profile-type-container">
                            <input type="radio" name="profile_type" value="non_iitr_student" checked={this.state.profile_type === "non_iitr_student" ? true : false} onChange={this.onProfileChange} />
                            <span className="esummit-profile-type-checkmark"></span>
                            <span className="esummit-profile-type-input-text">NON-IITR STUDENT</span>
                        </label>
                        <label className="esummit-profile-type-container">
                            <input type="radio" name="profile_type" value="ca" checked={this.state.profile_type === "ca" ? true : false} onChange={this.onProfileChange} />
                            <span className="esummit-profile-type-checkmark"></span>
                            <span className="esummit-profile-type-input-text">CAMPUS AMBASSADOR</span>
                        </label>
                        <label className="esummit-profile-type-container">
                            <input type="radio" name="profile_type" value="professional" checked={this.state.profile_type === "professional" ? true : false} onChange={this.onProfileChange} />
                            <span className="esummit-profile-type-checkmark"></span>
                            <span className="esummit-profile-type-input-text">PROFESSIONAL</span>
                        </label>
                        <label className="esummit-profile-type-container">
                            <input type="radio" name="profile_type" value="professor" checked={this.state.profile_type === "professor" ? true : false} onChange={this.onProfileChange} />
                            <span className="esummit-profile-type-checkmark"></span>
                            <span className="esummit-profile-type-input-text">PROFESSOR</span>
                        </label>
                        <label className="esummit-profile-type-container">
                            <input type="radio" name="profile_type" value="contingent" checked={this.state.profile_type === "contingent" ? true : false} onChange={this.onProfileChange} />
                            <span className="esummit-profile-type-checkmark"></span>
                            <span className="esummit-profile-type-input-text">CONTINGENT</span>
                        </label>
                    </div>
                </div>
                {this.state.profile_type === "contingent" ?
                    <div className="esummit-register-form-arrow-box">
                        To make a contingent, first each member has to do individual registration.<br />
                        After individual registration, contingent leader creates a contingent from his dashboard submitting details of each member.<br />
                        A unique ID will be generated using which other contingent member can join their respective contingents
                    </div>
                    : null}
                <div></div>
                <div className="esummit-register-form-button">
                    <div className="esummit-register-form-button-back" onClick={this.props.handleBack}>
                        BACK
                    </div>
                    <div className="esummit-register-form-button-back" onClick={this.handleNext}>
                        NEXT
                    </div>
                </div>
            </div>);
    }
}

