import React, { Component } from 'react';
import CreatableSelect from 'react-select/lib/Creatable';
import Select from "react-select";
import colleges from '../../../screens/register/colleges.json';
import citys from '../../../screens/register/citys.json';
import countries from '../../../screens/register/countries.json';
import correct from "./svg/correct.svg"
import wrong from "./svg/wrong.svg"
import state_option from "./json/states.json"
import about_option from "./json/about_esummit.json"
import gender_option from "./json/gender.json"
import tshirt_option from "./json/tshirt_option.json"
import programmes from "./json/programmes.json"
import year_option from "./json/year.json"
// import { useState } from "react"

const custom_styles = {
    menuList: (base) => ({
        ...base,
        height: '20vh'
    }),
}
class PersonalDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile_type: "",
            phone_no: "",
            gender: "",
            enrollment_no: "",
            country: "",
            states: "",
            city: "",
            college: "",
            programme: "",
            year: "",
            about_esummit: "",
            tshirt_size: "",
            organisation_name: "",
            industry: "",
            enroll_error_bool: "",
            enroll_error: "",
            phone_error_bool: "",
            phone_error: "",
            gender_error_bool: "",
            gender_error: "",
            about_esummit_error_bool: "",
            about_esummit_error: "",
            tshirt_error_bool: "",
            tshirt_error: "",
            state_error_bool: "",
            state_error: "",
            city_error_bool: "",
            city_error: "",
            country_error_bool: "",
            country_error: "",
            college_error_bool: "",
            college_error: "",
            programme_error_bool: "",
            programme_error: "",
            year_error_bool: "",
            year_error: "",
            organisation_error_bool: "",
            organisation_error: "",
            industry_error_bool: "",
            industry_error: ""
        }
    }
    EmptyValidation = (data) => {
        let variable
        if (data === "phone_no") {
            variable = data.substring(0, 5)
        }
        else {
            variable = data
        }
        let variable_error = variable + "_error"
        let variable_error_bool = variable + "_error_bool"
        let error_value = variable
        let rest_value
        if (data === "phone_no") { rest_value = " number cannot be empty" }
        else if (data === "enroll") {
            rest_value = "ment number cannot be empty"
        }
        else if (data === "about_esummit" || data === "tshirt") {
            rest_value = "This field cannot be empty"
            error_value = ""
            variable = ""
        }
        else {
            rest_value = " cannot be empty!";
        }
        this.setState({
            [variable_error]: error_value.charAt(0).toUpperCase() + variable.slice(1) + rest_value,
            [variable_error_bool]: "true"
        })
        const height = window.innerHeight
        let push
        if (data === "city" || data === "programme" || data === "year" || data === "college" || data === "about_esummit" || data === "tshirt") {
            push = 1.4 * height
        }
        else if (data === "country" && this.state.country !== "India") {
            push = 1.1 * height
        }
        else {
            push = 0.5 * height
        }
        window.scroll({ top: push, behavior: "smooth" });
    }


    handleSubmit = () => {
        if (this.state.phone_no === "") {
            return this.EmptyValidation("phone_no")
        }
        if (this.state.phone_no.length !== 10) {
            return this.phonevalidate()
        }
        if (this.state.gender === "") {
            return this.EmptyValidation("gender")
        }
        if (this.state.enrollment_no === "" && this.state.profile_type === "iitr_student") {
            return this.EmptyValidation("enroll")
        }
        if (this.state.country === "" && (this.state.profile_type === "non_iitr_student" || this.state.profile_type === "ca" || this.state.profile_type === "professor")) {
            return this.EmptyValidation("country")
        }
        if (this.state.states === "" && this.state.country.value === "India" && this.state.profile_type !== "iitr_student") {
            return this.EmptyValidation("state")
        }
        if (this.state.city === "" && this.state.country.value === "India" && this.state.profile_type !== "iitr_student") {
            return this.EmptyValidation("city")
        }
        if (this.state.college === "" && (this.state.profile_type !== "iitr_student" && this.state.profile_type !== "professional")) {
            return this.EmptyValidation("college")
        }
        if (this.state.programme === "" && (this.state.profile_type === "non_iitr_student" || this.state.profile_type === "ca")) {
            return this.EmptyValidation("programme")
        }
        if (this.state.year === "" && (this.state.profile_type === "non_iitr_student" || this.state.profile_type === "ca")) {
            return this.EmptyValidation("year")
        }
        if (this.state.organisation_name === "" && this.state.profile_type === "professional") {
            return this.EmptyValidation("organisation")
        }
        if (this.state.industry === "" && this.state.profile_type === "professional") {
            return this.EmptyValidation("industry")
        }
        if (this.state.about_esummit === "" && this.state.profile_type !== "iitr_student") {
            return this.EmptyValidation("about_esummit")
        }
        if (this.state.tshirt_size === "" && this.state.profile_type !== "iitr_student") {
            return this.EmptyValidation("tshirt")
        }
        const {
            phone_no,
            gender,
            enrollment_no,
            country,
            states,
            city,
            college,
            programme,
            year,
            about_esummit,
            tshirt_size,
            organisation_name,
            industry } = this.state

        let data = {
            phone_no: phone_no,
            gender: gender,
            enrollment_no: enrollment_no,
            country: country.value,
            states: states.value,
            city: city.value,
            college: college,
            programme: programme,
            year: year.value,
            about_esummit: about_esummit.value,
            tshirt_size: tshirt_size.value,
            organisation_name: organisation_name,
            industry: industry,
        }
        this.props.handleDetails(data)
    }
    getStates = () => {
        return state_option.map(state => ({ value: state.name, label: state.name }))
    }
    getProgrammes = () => {
        return programmes.map(programme => ({ value: programme.name, label: programme.name }))
    }
    getTshirt = () => {
        return tshirt_option.map(tshirt => ({ value: tshirt.name, label: tshirt.name }))
    }
    getGender = () => {
        return gender_option.map(gender => ({ value: gender.name, label: gender.name }))
    }
    getAbout = () => {
        return about_option.map(about => ({ value: about.name, label: about.name }))
    }
    getYear = () => {
        return year_option.map(year => ({ value: year.name, label: year.name }))
    }
    handleBack = () => {
        const {
            phone_no,
            gender,
            enrollment_no,
            country,
            states,
            city,
            college,
            programme,
            year,
            about_esummit,
            tshirt_size,
            organisation_name,
            industry } = this.state
        let data = {
            phone_no: phone_no,
            gender: gender,
            enrollment_no: enrollment_no,
            country: country,
            states: states,
            city: city,
            college: college,
            programme: programme,
            year: year,
            about_esummit: about_esummit,
            tshirt_size: tshirt_size,
            organisation_name: organisation_name,
            industry: industry,
        }
        this.props.handleBack(data)
    }
    componentDidMount() {
        this.setState({
            profile_type: this.props.profile_type,
            phone_no: this.props.handleState.phone_no,
            gender: this.props.handleState.gender,
            enrollment_no: this.props.handleState.enrollment_no,
            country: this.props.handleState.country,
            states: this.props.handleState.states,
            city: this.props.handleState.city,
            college: this.props.handleState.college,
            programme: this.props.handleState.programme,
            year: this.props.handleState.year,
            about_esummit: this.props.handleState.about_esummit,
            tshirt_size: this.props.handleState.tshirt_size,
            organisation_name: this.props.handleState.organisation_name,
            industry: this.props.handleState.industry,
        })
        const height = window.innerHeight
        let push = 0 * height
        window.scroll({ top: push, behavior: "auto" });
        if (this.props.handleState.phone_no !== "") {
            this.phonevalidate()
        }
        if (this.props.handleState.gender !== "") {
            this.gender_validate()
        }
        if (this.props.handleState.enrollment_no !== "") {
            this.enrollvalidate()
        }
        if (this.props.handleState.country !== "") {
            this.country_validate()
        }
        if (this.props.handleState.states !== "") {
            this.state_validate()
        }
        if (this.props.handleState.city !== "") {
            this.city_validate()
        }
        if (this.props.handleState.college !== "") {
            this.college_validate()
        }
        if (this.props.handleState.programme !== "") {
            this.programme_validate()
        }
        if (this.props.handleState.year !== "") {
            this.year_validate()
        }
        if (this.props.handleState.about_esummit !== "") {
            this.about_esummit_validate()
        }
        if (this.props.handleState.tshirt_size !== "") {
            this.tshirt_validate()
        }
        if (this.props.handleState.organisation_name !== "") {
            this.organisation_validate()
        }
        if (this.state.industry !== "") {
            this.industry_validate()
        }
    }
    phonevalidate = () => {
        setTimeout(function () {
            if (this.state.phone_no.length < 10 || this.state.phone_no.length > 10) {
                this.setState({
                    phone_error_bool: "true",
                    phone_error: "Phone number must contain 10 numbers"
                })
            } else {
                this.setState({
                    phone_error_bool: "false",
                    phone_error: ""
                })
            }
        }.bind(this), 1000)

    }
    enrollvalidate = () => {
        setTimeout(function () {
            if (this.state.enrollment_no.length < 8 || this.state.enrollment_no.length > 8) {
                this.setState({
                    enroll_error_bool: "true",
                    enroll_error: "Enrollment number must contain 8 numbers"
                })
            } else {
                this.setState({
                    enroll_error_bool: "false",
                    enroll_error: ""
                })
            }
        }.bind(this), 1000)

    }
    onChange = (e) => {
        const name = e.target.name;
        let value = e.target.value;
        this.setState({ [name]: value });
    }
    getCities = (state) => {
        let cities = citys[state];
        cities = cities.map(city => ({ value: city, label: city }))
        return cities;
    }
    handleGenderChange = (selectedOption) => {
        this.setState({ gender: selectedOption });
    };
    handleYearChange = (selectedOption) => {
        this.setState({ year: selectedOption });
    };
    handleCollegeChange = (selectedOption) => {
        this.setState({ college: selectedOption });
    };
    handleStateChange = states => {
        this.setState({ states: states });
    };
    handleCityChange = (selectedOption) => {
        this.setState({ city: selectedOption });
    };
    handleProgrammeChange = (selectedOption) => {
        this.setState({ programme: selectedOption });
    };
    handleAboutEsummitChange = (selectedOption) => {
        this.setState({ about_esummit: selectedOption });
    };
    handleTshirtChange = (selectedOption) => {
        this.setState({ tshirt_size: selectedOption });
    };
    getCountries = () => {
        return countries.map(country => ({ value: country.name, label: country.name }))
    }
    handleCountryChange = (selectedOption) => {
        this.setState({ country: selectedOption });
    };
    handleOrganisationChange = (selectedOption) => {
        this.setState({ organisation_name: selectedOption.target.value });
    };
    handleIndustryChange = (selectedOption) => {
        this.setState({ industry: selectedOption.target.value });
    };
    // custom_validate = (data) => {
    //     const [custom, setData] = useState(data)
    //     setTimeout(function () {
    //         if (custom !== "") {
    //             console.log(custom, "dahjdvhagj")
    //             let variable
    //             if (custom === "phone_no") {
    //                 variable = custom.substring(0, 5)
    //             }
    //             else {
    //                 variable = custom
    //             }
    //             let variable_error = variable + "_error"
    //             let variable_error_bool = variable + "_error_bool"
    //             this.setState({
    //                 [variable_error]: "",
    //                 [variable_error_bool]: "false"
    //             })
    //             this.setState({
    //                 about_esummit_error_bool: "false",
    //                 about_esummit_error: ""
    //             })
    //         }
    //     }.bind(this), 2000)
    // }
    about_esummit_validate = () => {
        setTimeout(function () {
            if (this.state.about_esummit !== "") {

                this.setState({
                    about_esummit_error_bool: "false",
                    about_esummit_error: ""
                })
            }
        }.bind(this), 1000)
    }
    tshirt_validate = () => {
        setTimeout(function () {
            if (this.state.tshirt_size !== "") {

                this.setState({
                    tshirt_error_bool: "false",
                    tshirt_esummit_error: ""
                })
            }
        }.bind(this), 1000)
    }
    country_validate = () => {
        setTimeout(function () {
            if (this.state.country !== "") {

                this.setState({
                    country_error_bool: "false",
                    country_error: ""
                })
            }
        }.bind(this), 1000)
    }
    city_validate = () => {
        setTimeout(function () {
            if (this.state.city !== "") {

                this.setState({
                    city_error_bool: "false",
                    city_error: ""
                })
            }
        }.bind(this), 1000)
    }
    year_validate = () => {
        setTimeout(function () {
            if (this.state.year !== "") {

                this.setState({
                    year_error_bool: "false",
                    year_error: ""
                })
            }
        }.bind(this), 1000)
    }
    college_validate = () => {
        setTimeout(function () {
            if (this.state.college !== "") {

                this.setState({
                    college_error_bool: "false",
                    college_error: ""
                })
            }
        }.bind(this), 1000)
    }
    programme_validate = () => {
        setTimeout(function () {
            if (this.state.programme !== "") {

                this.setState({
                    programme_error_bool: "false",
                    programme_error: ""
                })
            }
        }.bind(this), 1000)
    }
    gender_validate = () => {
        setTimeout(function () {
            if (this.state.gender !== "") {
                this.setState({
                    gender_error_bool: "false",
                    gender_error: ""
                })
            }
        }.bind(this), 1000)
    }
    organisation_validate = () => {
        setTimeout(function () {
            if (this.state.organisation_name !== "") {

                this.setState({
                    organisation_error_bool: "false",
                    organisation_error: ""
                })
            }
        }.bind(this), 1000)
    }
    industry_validate = () => {
        setTimeout(function () {
            if (this.state.industry !== "") {

                this.setState({
                    industry_error_bool: "false",
                    industry_error: ""
                })
            }
        }.bind(this), 1000)
    }
    // enroll_validate = () => {
    //     setTimeout(function () {
    //         if (this.state.enrollment_no !== "") {

    //             this.setState({
    //                 enroll_error_bool: "false",
    //                 enroll_error: ""
    //             })
    //         }
    //     }.bind(this), 1000)
    // }
    state_validate = () => {
        setTimeout(function () {
            if (this.state.states !== "") {

                this.setState({
                    state_error_bool: "false",
                    state_error: ""
                })
            }
        }.bind(this), 1000)
    }
    render() {
        const {
            gender_error_bool,
            gender_error,
            year_error_bool,
            year_error,
            programme_error_bool,
            programme_error,
            organisation_error_bool,
            organisation_error,
            industry_error_bool,
            industry_error,
            about_esummit_error_bool,
            about_esummit_error,
            tshirt_error_bool,
            tshirt_error,
            state_error_bool,
            state_error,
            city_error_bool,
            city_error,
            country_error_bool,
            country_error,
            college_error_bool,
            college_error,
            enroll_error_bool,
            enroll_error,
            phone_error_bool,
            phone_error,
            phone_no,
            gender,
            enrollment_no,
            country,
            states,
            city,
            college,
            programme,
            year,
            about_esummit,
            tshirt_size,
            organisation_name,
            industry,
            profile_type } = this.state
        return (
            <div className="esummit-register-form-body-parent">
                <div className="esummit-register-form-body-parent-heading-first">
                    {this.state.profile_type === "iitr_student" ? "IITR STUDENT" :
                        this.state.profile_type === "non_iitr_student" ?
                            "NON IITR STUDENT" : this.state.profile_type === "ca" ? "CAMPUS AMBASSADOR" :
                                this.state.profile_type === "professional" ? "PROFESSIONAL" :
                                    this.state.profile_type === "professor" ? "PROFESSOR" : null}
                </div>
                <div className="esummit-register-form-body-parent-heading-second">
                    Please fill all the fields as mentioned below
                </div>
                <div className="esummit-register-form-input-specific">
                    <label htmlFor="inputPhone">PHONE NO</label>
                    <div className="esummit-register-form-input-specific-inner">
                        <input
                            id="inputPhone"
                            type="number"
                            placeholder="Enter your phone number"
                            name="phone_no"
                            autoCorrect="off"
                            autoComplete="off"
                            autoCapitalize="off"
                            value={phone_no}
                            onChange={event => {
                                this.onChange(event)
                                this.phonevalidate()
                            }}
                            spellCheck="false"
                            required
                        />
                        <span className="esummit-register-form-field-error-svg">
                            {phone_error_bool === "" ? null :
                                <img alt="correc/wrong" src={phone_error_bool === "true" ? wrong : phone_error_bool === "false" ? correct : null} />
                            }
                        </span>
                    </div>
                    <div className="esummit-register-form-field-error">{phone_error}</div>
                </div>
                <div className="esummit-register-form-input-specific">
                    <label htmlFor="inputGender">Gender</label>
                    <div className="esummit-register-form-input-specific-inner">
                        <Select
                            styles={custom_styles}
                            value={gender}
                            onChange={event => {
                                this.handleGenderChange(event)
                                this.gender_validate()
                            }}
                            options={this.getGender()}
                            placeholder="Gender" />
                        <span className="esummit-register-form-field-error-svg">
                            {gender_error_bool === "" ? null :
                                <img alt="correc/wrong" src={gender_error_bool === "true" ? wrong : gender_error_bool === "false" ? correct : null} />
                            }
                        </span>
                    </div>
                    <div className="esummit-register-form-field-error">{gender_error}</div>
                </div>
                {profile_type === "iitr_student" ?
                    <div className="esummit-register-form-input-specific">
                        <label htmlFor="inputEnrollment">ENROLLMENT NO</label>
                        <div className="esummit-register-form-input-specific-inner">
                            <input
                                id="inputEnrollment"
                                type="number"
                                placeholder="Enter your enrollment number"
                                name="enrollment_no"
                                autoCorrect="off"
                                autoComplete="off"
                                autoCapitalize="off"
                                value={enrollment_no}
                                onChange={event => {
                                    this.onChange(event)
                                    this.enrollvalidate()
                                }}
                                spellCheck="false"
                                required
                            />
                            <span className="esummit-register-form-field-error-svg">
                                {enroll_error_bool === "" ? null :
                                    <img alt="correc/wrong" src={enroll_error_bool === "true" ? wrong : enroll_error_bool === "false" ? correct : null} />
                                }
                            </span>
                        </div>
                        <div className="esummit-register-form-field-error">{enroll_error}</div>
                    </div>
                    : null}
                <div>
                    <div>
                        {profile_type === "non_iitr_student" || profile_type === "ca" || profile_type === "professor" || profile_type === "professional" ?
                            <div className="esummit-register-form-input-specific">
                                <label htmlFor="inputCountry">COUNTRY</label>
                                <div className="esummit-register-form-input-specific-inner">
                                    <Select
                                        styles={custom_styles}
                                        value={country}
                                        onChange={event => {
                                            this.handleCountryChange(event)
                                            this.country_validate()

                                        }}
                                        options={this.getCountries()}
                                        placeholder="Enter your country name" />
                                    <span className="esummit-register-form-field-error-svg">
                                        {country_error_bool === "" ? null :
                                            <img alt="correc/wrong" src={country_error_bool === "true" ? wrong : country_error_bool === "false" ? correct : null} />
                                        }
                                    </span>
                                </div>
                                <div className="esummit-register-form-field-error">{country_error}</div>
                            </div>
                            : null}
                        {profile_type !== "iitr_student" ?
                            this.state.country.value === "India"
                                ? <div>
                                    <div className="esummit-register-form-input-specific">
                                        <label htmlFor="inputState">STATE</label>
                                        <div className="esummit-register-form-input-specific-inner">
                                            <Select
                                                styles={custom_styles}
                                                value={states}
                                                onChange={event => {
                                                    this.handleStateChange(event)
                                                    this.state_validate()
                                                }}
                                                options={this.getStates()}
                                                placeholder="Enter your state name" />
                                            <span className="esummit-register-form-field-error-svg">
                                                {state_error_bool === "" ? null :
                                                    <img alt="correc/wrong" src={state_error_bool === "true" ? wrong : state_error_bool === "false" ? correct : null} />
                                                }
                                            </span>
                                        </div>
                                        <div className="esummit-register-form-field-error">{state_error}</div>
                                    </div>
                                    <div className="esummit-register-form-input-specific">
                                        <label htmlFor="inputCity">CITY</label>
                                        <div className="esummit-register-form-input-specific-inner">
                                            <CreatableSelect
                                                styles={custom_styles}
                                                placeholder="Enter your city"
                                                searchable={true}
                                                required={true}
                                                onChange={event => {
                                                    this.handleCityChange(event)
                                                    this.city_validate()
                                                }}
                                                options={states === ""
                                                    ? []
                                                    : this.getCities(states.value)}
                                                clearable={false}
                                                value={city} />
                                            <span className="esummit-register-form-field-error-svg">
                                                {city_error_bool === "" ? null :
                                                    <img alt="correc/wrong" src={city_error_bool === "true" ? wrong : city_error_bool === "false" ? correct : null} />
                                                }
                                            </span>
                                        </div>
                                        <div className="esummit-register-form-field-error">{city_error}</div>
                                    </div>
                                    {profile_type !== "professional" ?
                                        <div className="esummit-register-form-input-specific">
                                            <label htmlFor="inputCollege">COLLEGE</label>
                                            <div className="esummit-register-form-input-specific-inner">
                                                <CreatableSelect
                                                    styles={custom_styles}
                                                    placeholder="Enter your college name"
                                                    searchable={true}
                                                    required={true}
                                                    onChange={event => {
                                                        this.handleCollegeChange(event)
                                                        this.college_validate()
                                                    }}
                                                    options={colleges[states.value]}
                                                    clearable={false}
                                                    value={college} />
                                                <span className="esummit-register-form-field-error-svg">
                                                    {college_error_bool === "" ? null :
                                                        <img alt="correc/wrong" src={college_error_bool === "true" ? wrong : college_error_bool === "false" ? correct : null} />
                                                    }
                                                </span>
                                            </div>
                                            <div className="esummit-register-form-field-error">{college_error}</div>
                                        </div>
                                        : null}
                                </div>
                                :
                                profile_type !== "professional" ?
                                    < div className="esummit-register-form-input-specific">
                                        <label htmlFor="inputCollege">COLLEGE</label>
                                        <div className="esummit-register-form-input-specific-inner">
                                            <input
                                                id="inputCollege"
                                                type="text"
                                                placeholder="Enter your college"
                                                name="college"
                                                autoCorrect="off"
                                                autoComplete="off"
                                                autoCapitalize="off"
                                                value={college}
                                                onChange={event => {
                                                    this.onChange(event)
                                                    this.college_validate()
                                                }}
                                                spellCheck="false"
                                                required
                                            />
                                            <span className="esummit-register-form-field-error-svg">
                                                {college_error_bool === "" ? null :
                                                    <img alt="correc/wrong" src={college_error_bool === "true" ? wrong : college_error_bool === "false" ? correct : null} />
                                                }
                                            </span>
                                        </div>
                                        <div className="esummit-register-form-field-error">{college_error}</div>
                                    </div>
                                    : null
                            : null}

                        {profile_type === "non_iitr_student" || profile_type === "ca" ?
                            <div>
                                <div className="esummit-register-form-input-specific">
                                    <label htmlFor="inputProgramme">PROGRAMME</label>
                                    <div className="esummit-register-form-input-specific-inner">
                                        <Select
                                            styles={custom_styles}
                                            value={programme}
                                            onChange={event => {
                                                this.handleProgrammeChange(event)
                                                this.programme_validate()
                                            }}
                                            options={this.getProgrammes()}
                                            placeholder="Select your programme" />
                                        <span className="esummit-register-form-field-error-svg">
                                            {programme_error_bool === "" ? null :
                                                <img alt="correc/wrong" src={programme_error_bool === "true" ? wrong : programme_error_bool === "false" ? correct : null} />
                                            }
                                        </span>
                                    </div>
                                    <div className="esummit-register-form-field-error">{programme_error}</div>
                                </div>
                                <div className="esummit-register-form-input-specific">
                                    <label htmlFor="inputYear">YEAR</label>
                                    <div className="esummit-register-form-input-specific-inner">
                                        <Select
                                            styles={custom_styles}
                                            value={year}
                                            onChange={event => {
                                                this.handleYearChange(event)
                                                this.year_validate()
                                            }}
                                            options={this.getYear()}
                                            placeholder="Select your year" />
                                        <span className="esummit-register-form-field-error-svg">
                                            {year_error_bool === "" ? null :
                                                <img alt="correc/wrong" src={year_error_bool === "true" ? wrong : year_error_bool === "false" ? correct : null} />
                                            }
                                        </span>
                                    </div>
                                    <div className="esummit-register-form-field-error">{year_error}</div>
                                </div>
                            </div>
                            : null}
                        {profile_type === "professional" ?
                            <div>
                                <div className="esummit-register-form-input-specific">
                                    <label htmlFor="inputOrganisation">ORGANISATION NAME</label>
                                    <div className="esummit-register-form-input-specific-inner">
                                        <input
                                            id="inputOrganization"
                                            type="text"
                                            placeholder="Enter your organization name"
                                            name="organisation_name"
                                            autoCorrect="off"
                                            autoComplete="off"
                                            autoCapitalize="off"
                                            value={organisation_name}
                                            onChange={event => {
                                                this.handleOrganisationChange(event)
                                                this.organisation_validate()
                                            }
                                            }
                                            spellCheck="false"
                                            required
                                        />
                                        <span className="esummit-register-form-field-error-svg">
                                            {organisation_error_bool === "" ? null :
                                                <img alt="correc/wrong" src={organisation_error_bool === "true" ? wrong : organisation_error_bool === "false" ? correct : null} />
                                            }
                                        </span>
                                    </div>
                                    <div className="esummit-register-form-field-error">{organisation_error}</div>
                                </div>
                                <div className="esummit-register-form-input-specific">
                                    <label htmlFor="inputIndustry">INDUSTRY</label>
                                    <div className="esummit-register-form-input-specific-inner">
                                        <input
                                            id="inputIndustry"
                                            type="text"
                                            placeholder="Enter your industry"
                                            name="industry"
                                            autoCorrect="off"
                                            autoComplete="off"
                                            autoCapitalize="off"
                                            value={industry}
                                            onChange={event => {
                                                this.handleIndustryChange(event)
                                                this.industry_validate()
                                            }}
                                            spellCheck="false"
                                            required
                                        />
                                        <span className="esummit-register-form-field-error-svg">
                                            {industry_error_bool === "" ? null :
                                                <img alt="correct/wrong" src={industry_error_bool === "true" ? wrong : industry_error_bool === "false" ? correct : null} />
                                            }
                                        </span>
                                    </div>
                                    <div className="esummit-register-form-field-error">{industry_error}</div>
                                </div>
                            </div> : null}
                        {profile_type !== "iitr_student" ?
                            <div>
                                <div className="esummit-register-form-input-specific">
                                    <label htmlFor="inputAboutEsummit">HOW DO YOU KNOW ABOUT ESUMMIT?</label>
                                    <div className="esummit-register-form-input-specific-inner">
                                        <Select
                                            styles={custom_styles}
                                            value={about_esummit}
                                            onChange={event => {
                                                this.handleAboutEsummitChange(event)
                                                this.about_esummit_validate()
                                            }}
                                            options={this.getAbout()}
                                            placeholder="Select your programme" />
                                        <span className="esummit-register-form-field-error-svg">
                                            {about_esummit_error_bool === "" ? null :
                                                <img alt="correc/wrong" src={about_esummit_error_bool === "true" ? wrong : about_esummit_error_bool === "false" ? correct : null} />
                                            }
                                        </span>
                                    </div>
                                    <div className="esummit-register-form-field-error">{about_esummit_error}</div>
                                </div>
                                <div className="esummit-register-form-input-specific">
                                    <label htmlFor="inputTshirt">T SHIRT SIZE</label>
                                    <div className="esummit-register-form-input-specific-inner">
                                        <Select
                                            styles={custom_styles}
                                            value={tshirt_size}
                                            onChange={event => {
                                                this.handleTshirtChange(event)
                                                this.tshirt_validate()
                                            }}
                                            options={this.getTshirt()}
                                            placeholder="Select your t-shirt size" />
                                        <span className="esummit-register-form-field-error-svg">
                                            {tshirt_error_bool === "" ? null :
                                                <img alt="correc/wrong" src={tshirt_error_bool === "true" ? wrong : tshirt_error_bool === "false" ? correct : null} />
                                            }
                                        </span>
                                    </div>
                                    <div className="esummit-register-form-field-error">{tshirt_error}</div>
                                </div>
                            </div>
                            : null}

                    </div>
                </div>
                <div className="esummit-register-form-button">
                    <div className="esummit-register-form-button-back" onClick={this.handleBack}>
                        BACK
                    </div>
                    <div className="esummit-register-form-button-back" onClick={this.handleSubmit}>
                        SUBMIT
                    </div>
                </div>
            </div >
        );
    }
}

export default PersonalDetails;
