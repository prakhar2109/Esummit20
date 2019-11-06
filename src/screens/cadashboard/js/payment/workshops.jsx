import React, { Component } from "react";
import "./../../css/payment/workshops.css";
import { BASE_URL } from "./../../../../utils/urls";
import axios from "axios";

class Workshop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isWorkshopDiscarded: true,
      actualFee:0,

      // workshopsAppNotPayed:props.workshopsAppNotPayed,
    };
  }
  componentDidMount(){
    if(this.props.workshopsAppNotPayed.length>0){
      this.props.workshopsAppNotPayed.map((workshopApp, i) => {
              if (workshopApp.event === this.props.id) {
                document.getElementById(
                  `capayment-toggleaccomodation-workshops-${this.props.id}`
                ).innerHTML = "DISCARD";
                this.setState({
                  actualFee:this.props.workshopFee,
                  isWorkshopDiscarded:false,
                })
              } else {
                
              }
            })
          
          }
  }
  toggleWorkshop = e => {
    let token = localStorage.getItem("user_token");
    // console.log(this.state.isWorkshopDiscarded,'state')
    if (!this.state.isWorkshopDiscarded) {
      document.getElementById(
        `capayment-toggleaccomodation-workshops-${this.props.id}`
      ).innerHTML = "ADD";
      
      axios
        .get(BASE_URL + `/v1/api/event/${this.props.id}/unregister`, {
          headers: {
            Authorization: `Token ${token}`,
          },
        })
        .then(res => {
          //   console.log(res.data,'dfnam')
          // console.log(this.state.workshopsAppNotPayed,'workshops')
          this.setState({
            workshopsNotPayed: res.data,
            noOfWorkshopsNotPayed: res.data.length,
            isWorkshopDiscarded: true,
            actualFee:0
          },()=>{
            this.props.letMeknowIfDiscardClicked();
          });
        })
        .catch(response => {
          alert("could not connect to the server");
        });
      // this.props.letMeknowIfDiscardClicked();
    } else {
      document.getElementById(
        `capayment-toggleaccomodation-workshops-${this.props.id}`
      ).innerHTML = "DISCARD";
      

      axios
        .get(BASE_URL + `/v1/api/event/${this.props.id}/apply`, {
          headers: {
            Authorization: `Token ${token}`,
          },
        })
        .then(res => {
          console.log(res.data, "dfnam");
          this.setState({
            workshopsNotPayed: res.data,
            noOfWorkshopsNotPayed: res.data.length,
            isWorkshopDiscarded: false,
            actualFee:this.props.workshopFee
          },()=>{
            this.props.letMeknowIfDiscardClicked();
          });
        })
        .catch(response => {
          alert("could not connect to the server");
        });
      
    }
  };
  render() {
    let { workshopName, workshopFee, id, isPayed ,workshopsAppNotPayed} = this.props;
    // let workshopName = 'workshop 1'
    // let workshopFee  = 500

    return (
      <div className="capaymentwv-workshopmappingelement">
        <div className="capayment-workshops-registrationfee-parent">
          <div className="capaymentwv-workshop-spaceaboutcolon">
            {workshopName}&nbsp;(Rs {workshopFee})
          </div>
          <div className="capayment-toggleaccomodation-div">
            {!isPayed && (
              <button
                id={`capayment-toggleaccomodation-workshops-${id}`}
                className="capayment-toggleaccomodation-workshops"
                onClick={e => this.toggleWorkshop(e)}
              >
                ADD
              </button>
            )}
          </div>{" "}
        </div>
        :<div className="capaymentwv-space" /><span id=''>Rs {this.state.actualFee}</span>
      </div>
    );
  }
}
export default class Workshops extends Component {
  constructor() {
    super();
    this.state={
    }
  }
  
  render() {
    let {
      workshops,
      noOfWorkshops,
      isPayed,
      letMeknowIfDiscardClicked,
      workshopsAppNotPayed

    } = this.props;
    
    return (
      <React.Fragment>
        {noOfWorkshops
          ? workshops.map((workshop, i) => {
              if (workshop.event_type === "WRK") {
                return (
                  <Workshop
                    workshopName={workshop.title}
                    workshopFee={workshop.fee > 0 ? workshop.fee : 0}
                    id={workshop.id}
                    key={i}
                    isPayed={isPayed}
                    letMeknowIfDiscardClicked={letMeknowIfDiscardClicked}
                    workshopsAppNotPayed={workshopsAppNotPayed}
                  />
                );
              } else {
                return null;
              }
            })
          : null}
      </React.Fragment>
    );
  }
}
