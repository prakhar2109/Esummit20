import React, { Component } from "react";
import { Element } from "react-scroll";
import { NavLink } from "react-router-dom";
import SingleFAQ from "../../components/singleFaq";
import Header from "../../components/header";

class FAQBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: 1,
    };
  }

  toggle = (e, id) => {
    const qid = `q${id}`;
    const iid = `i${id}`;
    if (this.state.show === 1) {
      document.getElementById(id).style.display = "block";
      document.getElementById(qid).style.background = "#F7F8F9";
      document.getElementById(iid).classList.add("fa-times-circle");
      this.setState({ show: 0 });
    } else {
      document.getElementById(id).style.display = "none";
      document.getElementById(qid).style.background = "white";
      document.getElementById(iid).classList.remove("fa-times-circle");
      this.setState({ show: 1 });
    }
  };

  render() {
    let { faqList, isHomePage } = this.props;
    if (isHomePage) {
      faqList = faqList.filter(update => update.faq_type.type_name === "Homepage");
    }
    return (
      <Element id="faq" name="faq">
        <section id="faq">
          <div className="land_faq">
            <Header title="FAQs" />
            <p className="esummit-landing-faq-land-para">Stuck somewhere ? We’ re here to help you! </p>

            {faqList.map(update => <SingleFAQ key={update.id} update={update} />)}
            {this.props.viewall === "false" ? null
              : (
                <center>
                  <NavLink to="/faq">
                    {' '}
                    <button className="view_all"> VIEW ALL </button>
                  </NavLink>
                </center>
              )
            }
          </div>
        </section>
      </Element>
    );
  }
}

export default FAQBoard;
