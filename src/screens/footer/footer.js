import React, { Component } from 'react';
import "./css/footer.css";

export default class FooterWithoutContactUs extends Component {
  render() {
    return (
      <>
        {' '}
        <div className="footer">

          <div>
            <p>
For queries:
            </p>
            <p>
              <a href="mailto:esummit@iitr.ac.in">esummit@iitr.ac.in</a>
            </p>
          </div>

          <div>
            <p>Social Media</p>


            <div className="footer_social">
              <span>
                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/EDC_IITRoorkee">
                  <i className="fab fa-twitter" />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/ecelliitr/">
                  <i className="fab fa-facebook-f" />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/ecelliitr/">
                  <i className="fab fa-instagram" />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/esummit/">
                  <i className="fab fa-linkedin" />
                </a>
              </span>
            </div>


          </div>

          <div>
            <p>
                    Phone Number
            </p>
            <p>
              <a href="tel:7302200596">+91 7302200596</a>
            </p>
          </div>

          <div>
            <p>
                    For collaborations:
            </p>

            <p>
              <a href="mailto:ecell@iitr.ac.in">ecell@iitr.ac.in</a>
            </p>
          </div>
        </div>
        {' '}
        <div className="footer_mobile">
          {' '}
          <center>
            <span>
                For Sponsorship Opportunities contact
              <br />
              <a href="mailto:esummit@iitr.ac.in">esummit@iitr.ac.in</a>
            </span>

            <div className="footer_mobile_phone">
              <div>
                <p>
                        Phone Number
                </p>
                <p>
                  <a href="tel:7302200596">+91 7302200596</a>
                </p>
              </div>

              <div>
                <p>
                        E-Mail ID
                </p>

                <p>
                  <a href="mailto:ecell@iitr.ac.in">ecell@iitr.ac.in</a>
                </p>
              </div>

            </div>

            <span>
              <div className="footer_social">
                <span>
                  <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/EDC_IITRoorkee">
                    <i className="fab fa-twitter" />
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/ecelliitr/">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/ecelliitr/">
                    <i className="fab fa-instagram" />
                  </a>
                </span>
              </div>
            </span>
          </center>
          {' '}

        </div>

      </ >
    );
  }
}
