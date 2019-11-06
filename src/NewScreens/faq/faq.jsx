import React, { Component } from "react";
import Header from "../../components/header";
import { Tabs } from "antd";
import "./faq.scss";
import 'antd/dist/antd.css';
import Nav from "../nav/nav"
import Footer from "../IdeaStorm/footer/eventfooter";
import SingleFAQ from "./../../components/singleFaq";
import axios from "axios";
import { BASE_URL } from "../../utils/urls";
import MobileNav from "../mobile_nav/header";

const TabPane = Tabs.TabPane;


export default class FAQPage extends Component {
  state = {
    faq: [],
  };


  componentDidMount() {
    axios
      .get(BASE_URL + "/v1/api/faqs/")
      .then(res => {
        this.setState({
          faq: res.data,


        });

      })
  }



  render() {
    return (
      <React.Fragment>
        <Nav />
        <MobileNav />

        <div className="faq">
          <Header title="FAQs" />
          <p className="text">Stuck somewhere? We’re here to help you!</p>

          <Tabs defaultActiveKey="1">
            <TabPane tab="General" key="1" >
              {this.state.faq.map(update => {
                if (update.faq_type.type_name === "General") {
                  return <SingleFAQ key={update.id} update={update} />;
                }

                else {
                  return null;
                }
              })}
            </TabPane>
            <TabPane tab="Contingent" key="2">
              {this.state.faq.map(update => {
                if (update.faq_type.type_name === "Contingent") {
                  return <SingleFAQ key={update.id} update={update} />;
                }

                else {
                  return null;
                }
              })}
            </TabPane>
            <TabPane tab="Campus Ambassador" key="3">
              {this.state.faq.map(update => {
                if (update.faq_type.type_name === "Campus Ambassador") {
                  return <SingleFAQ key={update.id} update={update} />;
                }

                else {
                  return null;
                }
              })}
            </TabPane>
          </Tabs>
        </div>

        <div className="cannot_find">
          <p>Can’t find what you’re looking for ?</p>
          <p>
            E-Mail your query to esummit18@gmail.com or Get in touch with us
          </p>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
