import React, { Component } from 'react';

class GetInTouch extends Component {
  render() {
    return (
      <section id="contact">
        <h2>GET IN TOUCH</h2>
        <div className="contact_grid">
          <form>

            <input type="text" placeholder="Name" />

            <input type="tel" placeholder="Mobile Number" />

            <input type="text" placeholder="Email ID" />

            <textarea placeholder="Message" rows="8" />

            <button type="submit">
                            Submit

            </button>

          </form>
          <div>
            <p className="title">Phone no.</p>
            <p className="value">
+ 91 73022 00596
            </p>

            <p className="title">E-Mail ID</p>
            <p className="value">
esummit18@gmail.com
            </p>
            <p className="title">
                            For Sponsorship opportunities, contact
            </p>
            <p className="value">
esummit18@gmail.com
            </p>
            <p className="title">Our Address</p>
            <p className="value">
                            E - Cell Office, SAC Building, IIT
              <br />
                            Roorkee, Roorkee, Uttarakhand,
              <br />
                            India 247667
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default GetInTouch;
