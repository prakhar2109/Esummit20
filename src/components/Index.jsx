import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import "./css/task.css";
// import image from "./favicon.ico"
// import FontAwesome from "react-fontawesome"

export default class SocialIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  responseFacebook = response => {
    // console.log(response, "dhagsjjagd");
  };
  responseGoogle = response => {
    // console.log(response, "dhagsjjagd");
  };
  componentDidMount() {
    // FB.api(
    //     '/me',
    //     'GET',
    //     { "fields": "id,name,email,gender" },
    //     function (response) {
    //         console.log(response)
    //     }
    // );
  }
  render() {
    return (
      <div>
        <FacebookLogin
          appId="1397396677058151"
          size="medium"
          autoLoad={true}
          textButton="Signin with Facebook"
          fields="name,email,picture"
          cssClass="kep-login-facebook"
          icon="fa-facebook"
          callback={this.responseFacebook}
        />

        <GoogleLogin
          clientId="210798785897-bj54gjooglbsl1rrln9sdoplulbglt0d.apps.googleusercontent.com"
          buttonText="Signin with Google"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          className="tushar"
          theme="dark"
        />
      </div>
    );
  }
}
