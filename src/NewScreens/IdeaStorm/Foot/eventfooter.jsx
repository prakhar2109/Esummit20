import React, { Component } from "react";
import "./eventfooter.scss";
import Back from "../static/top.png";
import jump from "jump.js";
import $ from "jquery";
import "form-serializer";
import Ecell from "../static/ecelllogo.svg";

export default class Lfooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      footername: "",
      footerPhoneno: "",
      footerEmailid: "",
      footermessage: "",
    };
  }
  top = () => {
    jump("#body");
  };
  validate = () => {
    let isError = false;

    if (
      this.state.footername === "" ||
      this.state.footerPhoneno === "" ||
      this.state.footerEmailid === "" ||
      this.state.footerEmailid === ""
    )
      isError = true;
    return isError;
  };
  handleClick = e => {
    e.preventDefault();
    const err = this.validate();
    let {
      footername,
      footerPhoneno,
      footerEmailid,
      footermessage,
    } = this.state;

    if (!err) {
      // clear form
      this.setState({
        footername: "",
        footerPhoneno: "",
        footerEmailid: "",
        footermessage: "",
      });

      // console.log(this.state.footername);
      // console.log(this.state.footerPhoneno);

      // console.log(this.state.footerEmailid);
      // console.log(this.state.footermessage);

      let $form = $("form");
      let url =
        "https://script.google.com/macros/s/AKfycbxVolaDHR32PbqBc7X9aqCea34fWUaKObrBEv9F2LmfJNMWlVI/exec";
      $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        data: $form.serializeObject(),
        success: function () {
          document.getElementById("footerinfo").innerHTML =
            "Form successfully Submitted";
        }.bind(this),
        error: function () {
          document.getElementById("footerinfo").innerHTML =
            "Form Not Submitted";
        }.bind(this),
      });
    } else {
      document.getElementById("footerinfo").innerHTML =
        "Either Name or Phone Number or Email or Message is Empty";
    }
  };
  render() {
    return (
      <div className="footer_all">
        <div className="fparent">
          <div className="pagefooter">
            <div className="fparent">
              <div className="fcontact">
                <div>
                  <div className="flogo">
                    <img src={Ecell} alt="Ecell logo" />
                  </div>
                  <div className="landing-footer-inspiring">
                    #inspiringinnovation
                  </div>

                  <div className="landing-footer-icons">
                    <a
                      href="https://www.facebook.com/ecelliitr/"
                      target="_blank"
                    >
                      <i class="fab fa-facebook" />
                    </a>
                    <a
                      href="https://www.instagram.com/ecelliitr/"
                      target="_blank"
                    >
                      <i class="fab fa-instagram" />
                    </a>
                    <a
                      href="https://www.youtube.com/channel/UCf1py66Ov1easJAswwjxQZw"
                      target="_blank"
                    >
                      <i class="fab fa-youtube" target="_blank" />
                    </a>
                    <a
                      href="https://twitter.com/EDC_IITRoorkee"
                      target="_blank"
                    >
                      <i class="fab fa-twitter" />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/esummit/"
                      target="_blank"
                    >
                      <i class="fab fa-linkedin" />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="landing-footer-heading">Phone no.</div>

                  <div className="landing-footer-details">+91 9992929203</div>
                </div>

                <div>
                  <div className="landing-footer-heading">E-Mail ID</div>

                  <div className="landing-footer-details">
                    esummit@iitr.ac.in
                  </div>
                </div>

                <div />
                <div className="Address">
                  <div className="landing-footer-heading">Our Address</div>

                  <div className="landing-footer-details landing-footer-adddetails">
                    E-Cell Office, SAC Building, IIT Roorkee, Roorkee,
                    Uttarakhand,
                    <br /> India 247667
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
