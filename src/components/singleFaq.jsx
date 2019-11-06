import React, { Component } from "react";
import "./css/faq_unit.scss";
import Plus from "./static/plus.svg";
import cross from "./static/cross.svg";

class SingleFAQ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: 1,
    };
  }

  toggle = (e, id) => {
    const { show } = this.state;
    const qid = `q${id}`;
    const pid = `p${id}`;
    const cid = `c${id}`;
    if (show === 1) {
      document.getElementById(id).style.display = "block";
      document.getElementById(qid).style.background = "#F7F8F9";
      document.getElementById(pid).style.display = "none";
      document.getElementById(cid).style.display = "inline-block";
      this.setState({ show: 0 });
    } else {
      document.getElementById(id).style.display = "none";
      document.getElementById(qid).style.background = "white";
      document.getElementById(pid).style.display = "inline-block";
      document.getElementById(cid).style.display = "none";

      this.setState({ show: 1 });
    }
  };

  render() {
    const { update } = this.props;
    return (
      <div
        onClick={e => this.toggle(e, update.id)}
        key={update.id}
        className="faq_unit"
      >
        <div className="question" id={`q${update.id}`}>
          <span className="esummit-landing-faq-update-question">
            {update.question}
          </span>
          <img alt="images" className="plus" src={Plus} id={`p${update.id}`} />
          <img alt="images" className="crox" src={cross} id={`c${update.id}`} />
        </div>
        <div className="answer" id={update.id}>
          {update.answer}
        </div>
      </div>
    );
  }
}

export default SingleFAQ;
