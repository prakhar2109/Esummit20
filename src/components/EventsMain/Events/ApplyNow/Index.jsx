import React, { Component } from "react";
export default class ApplyNowIdenx extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="register">
          <p className="register_now">Apply Now</p>

          <center>
            <a
              without
              rel="noopener noreferrer"
              href={this.props.data[0].registration_url}
              target="_blank"
            >
              <span style={{ textTransform: "uppercase" }}>
                APPLY FOR {this.props.name}
              </span>
            </a>
          </center>
        </div>

        <div className="register_mobile">
          <p className="register_now">Apply Now</p>
          {/* <p>{this.props.event_data.apply_now_description}</p> */}
          <center>
            <a
              without
              rel="noopener noreferrer"
              href={this.props.data[0].registration_url}
              target="_blank"
            >
              {" "}
              <span style={{ textTransform: "uppercase" }}>
                APPLY FOR {this.props.name}
              </span>
            </a>
          </center>
        </div>
      </React.Fragment>
    );
  }
}
