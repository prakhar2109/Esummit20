import React, { Component } from "react";
import "./faq_unit.scss";
import Plus from "./plus.svg";
import cross from "./cross.svg";

class SingleFAQ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: 1,
    };
  }
  toggle = (e, id) => {
    const qid = `q${id}`;
    const pid = `p${id}`;
    const cid = `c${id}`;
    if (this.state.show === 1) {
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
    let { update } = this.props;
    return (
      <div
        onClick={e => this.toggle(e, update.id)}
        key={update.id}
        className="faq_unit"
      >
        <div className="question" id={"q" + update.id}>
          <span className="esummit-landing-faq-update-question">
            {update.question}
          </span>
          <img alt="images" className="plus" src={Plus} id={"p" + update.id} />
          <img alt="images" className="crox" src={cross} id={"c" + update.id} />
        </div>
        <div className="answer" id={update.id}>
          {update.answer}
        </div>
      </div>
    );
  }
}

export default SingleFAQ;
