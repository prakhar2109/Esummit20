import React, { Component } from "react";
import "../../css/payment/paymentwithoutworkshop.css";
import CriteriaMapping from "./../discountcriterias";
import { Modal } from "antd";
import Coupon from "./../coupon";
import { BASE_URL } from "./../../../../utils/urls";
import axios from "axios";
import Payments from "./workshops";
import PaymentsPayed from "./workshopsPayed";

export default class Payment extends Component {
  constructor() {
    super();
    this.state = {
      //payment data
      dataPayment: null,
      convenienceFeeDiscount: 2.36,
      convenienceFee: 0,

      isPayed: null, //if payment is done, value will come from backend
      possibleCoupons: null, //{"GFDS":"50}coupons which are to be entered
      registrationFee: null, //da   if payment not done
      accomodationFee: null,
      totalFee: null,
      // visibleAccomodationFee:1000,
      isDiscarded: true,
      isCouponValid: true,
      discountAvailedPercent: 0,
      isApplied: false,
      couponDiscountPercent: 0,
      couponDiscount: 0,
      isBillingOpen: false,
      isModalVisible: false,
      couponcode: "",
      couponSelected: "",
      //workshops
      workshopsNotPayed: [],
      noOfWorkshopsNotPayed: 0,
      workshopsAppNotPayed:[],
      workshopsPayed: [],
      noOfWorkshopsPayed: 0,
      isIIT: false,

      //if payment is done isPayed will become true
      // values will come from backend
      registrationFeePayed: null,
      accomodationFeePayed: null,
      visibleAccomodationFeePayed: null,
      discountAvailedPercentPayed: null,
      couponDiscountPayed: 0,
      couponDiscountPercentPayed: 0,
      totAmtPayed: null,
      datePayed: "12/12/18",
    };
  }

  letMeknowIfDiscardClicked = () => {
    let token = localStorage.getItem("user_token");
    axios
      .get(BASE_URL + "/v1/api/user/profile", {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then(res => {
        console.log(res.data, "AAA");

        if (res.data.payment.payment_status === "PEN") {
          this.setState({
            isPayed: false,
            registrationFee: res.data.payment.payment_details.payble_reg_fees,
            visibleAccomodationFee:
              res.data.payment.payment_details.payble_acco_fees,
            accomodationFee: res.data.payment.payment_details.payble_acco_fees,
            totalFee: res.data.payment.payment_details.total_payble,
            isIIT: res.data.user_type,
            workshopsAppNotPayed:res.data.applications
          });
        } else if (res.data.payment.payment_status === "SUC") {
          this.setState({
            isPayed: true,
            registrationFeePayed:
              res.data.payment.payment_details.payble_reg_fees,
            visibleAccomodationFeePayed:
              res.data.payment.payment_details.payble_acco_fees,
            accomodationFee: res.data.payment.payble_acco_fees,
            totAmtPayed: res.data.payment.payment_details.amount_paid,
            isIIT: res.data.user_type,
          });
        } else {
          this.setState({
            isPayed: false,
            registrationFee: res.data.payment.registration_fee,
            visibleAccomodationFee: res.data.payment.accommodation_fee,
            accomodationFee: res.data.payment.accommodation_fee,
            isIIT: res.data.user_type,
          });
        }
        //   console.log(res.data)
      })
      .catch(response => {
        // console.log("could not connect to the server");
        alert("could not connect to the server");
      });
    axios
      .get(BASE_URL + "/v1/api/events/", {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then(res => {
        console.log(res.data, "dfnam");
        this.setState({
          workshopsNotPayed: res.data,
          noOfWorkshopsNotPayed: res.data.length,
        });
      })
      .catch(response => {
        alert("could not connect to the server");
      });
  };
  componentDidMount = () => {
    let token = localStorage.getItem("user_token");
    // let URL = '10.42.0.1:8000'
    if (token !== undefined) {
      axios
        .get(BASE_URL + "/v1/api/user/profile", {
          headers: {
            Authorization: `Token ${token}`,
          },
        })
        .then(res => {
          console.log(res.data, "sfs");

          if (res.data.payment.payment_status === "PEN") {
            this.setState({
              isPayed: false,
              registrationFee: res.data.payment.payment_details.payble_reg_fees,
              visibleAccomodationFee:
                res.data.payment.payment_details.payble_acco_fees,
              accomodationFee:
                res.data.payment.payment_details.payble_acco_fees,
              totalFee: res.data.payment.payment_details.total_payble,
              isIIT: res.data.user_type,
              workshopsAppNotPayed:res.data.applications

            });
          } else if (res.data.payment.payment_status === "SUC") {
            this.setState({
              isPayed: true,
              registrationFeePayed:
                res.data.payment.payment_details.payble_reg_fees,
              visibleAccomodationFeePayed:
                res.data.payment.payment_details.payble_acco_fees,
              accomodationFee: res.data.payment.payble_acco_fees,
              totAmtPayed: res.data.payment.payment_details.amount_paid,
              workshopsPayed: res.data.payment.applications.filter(
                workshop => workshop.status == "REG"
              ),
              noOfWorkshopsPayed: res.data.payment.applications.filter(
                workshop => workshop.status == "REG"
              ).length,
              isIIT: res.data.user_type,
            });
          } else {
            this.setState({
              isPayed: false,
              registrationFee: res.data.payment.registration_fee,
              visibleAccomodationFee: res.data.payment.accommodation_fee,
              accomodationFee: res.data.payment.accommodation_fee,
              isIIT: res.data.user_type,
            });
          }
          //   console.log(res.data)
        })
        .catch(response => {
          // console.log("could not connect to the server");
          alert("could not connect to the server");
        });

      axios
        .get(BASE_URL + "/v1/api/events/", {
          headers: {
            Authorization: `Token ${token}`,
          },
        })
        .then(res => {
          console.log(res.data, "dfnam");
          this.setState({
            workshopsNotPayed: res.data,
            noOfWorkshopsNotPayed: res.data.length,
          });
        })
        .catch(response => {
          alert("could not connect to the server");
        });
      let ta = this.props.location.search;
      // console.log(ta,'sad')
      if (ta.length !== 0) {
        axios
          .get(BASE_URL + "/v1/pay/complete/" + ta, {
            headers: {
              Authorization: `Token ${token}`,
            },
          })
          .then(res => {
            window.location.href = "/dashboard/payment";
            // console.log(res.data, "data");

            let datePayed = res.data.date_created.substr(0, 10);
            let totAmtPayed = res.data.amount_paid;
            datePayed = datePayed.split("-");
            let year = datePayed[0];
            let month = datePayed[1];
            let date = datePayed[2];
            // console(res.data,'data')
            // console.log("totalAMT", totAmtPayed);
            this.setState({
              datePayed: date + "/" + month + "/" + year,
              totAmtPayed: totAmtPayed,
            });
          })
          .catch(response => {
            alert("could not connect to the server");
          });
      }
    }
  };

  toggleAccomodation = e => {
    // e.preventDefault()
    let token = localStorage.getItem("user_token");
    let data = null;
    axios
      .post(BASE_URL + "/v1/api/user/acco/toogle/", data, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then(res => {
        // console.log(res.data,'ddfssf')
        this.setState(
          {
            isDiscarded: res.data.is_accommodation,
            visibleAccomodationFee: res.data.payment_details.payble_acco_fees,
            totalFee: res.data.payment_details.total_payble,
          },
          () => {
            // console.log(this.state.isDiscarded,'outside')

            if (this.state.isDiscarded === true) {
              // console.log(this.state.isDiscarded,'inside discard')
              document.getElementById(
                "capayment-toggleaccomodation"
              ).style.borderColor = "#E2574C";
              document.getElementById(
                "capayment-toggleaccomodation"
              ).innerHTML = "DISCARD";
              this.setState(
                {
                  // isDiscarded: false,
                  // visibleAccomodationFee: this.state.accomodationFee,
                },
                () => {
                  // console.log(this.state.isDiscarded)
                }
              );
            } else {
              // console.log(this.state.isDiscarded,'inside add')
              document.getElementById(
                "capayment-toggleaccomodation"
              ).style.borderColor = "#F39423";
              document.getElementById(
                "capayment-toggleaccomodation"
              ).innerHTML = "ADD";
              this.setState(
                {
                  // isDiscarded: true,
                  // visibleAccomodationFee: 0,
                },
                () => {
                  // console.log(this.state.isDiscarded)
                }
              );
            }
          }
        );
      });
  };
  toggleCoupon = e => {
    e.preventDefault();

    // document.getElementById("capayment-couponapply").style.borderColor="#E2574C";

    if (this.state.couponDiscountPercent === 0) {
      document.getElementById("capayment-couponapply").innerHTML = "REMOVE";
      this.setState(
        {
          isApplied: true,
          isModalVisible: true,

          // visibleAccomodationFee:this.state.accomodationFee,
        },
        () => {
          // console.log(this.state.isModalVisible)
        }
      );
    } else {
      document.getElementById("capayment-couponapply").innerHTML = "APPLY";
      this.setState(
        {
          isApplied: false,
          isModalVisible: false,
          couponDiscountPercent: 0,
          // visibleAccomodationFee:this.state.accomodationFee,
        },
        () => {
          // console.log(this.state.isModalVisible)
        }
      );
    }
    // $("#myModal").modal();

    // this.setState({
    //     isApplied:false,
    //     isModalVisible:false,

    //     // visibleAccomodationFee:this.state.accomodationFee,
    // },()=>{
    //     // console.log(this.state.isModalVisible)
    // }
    // )

    //     if(!this.state.isApplied){

    //     document.getElementById("capayment-couponapply").style.borderColor="#F39423";
    //     document.getElementById("capayment-couponapply").innerHTML="Apply2";

    //     this.setState({

    //         isModalVisible:true,

    //         // visibleAccomodationFee:0,
    //     },()=>{
    //         // console.log(this.state.isDiscarded)
    //     })
    // }
  };
  onPay = e => {
    // e.preventDefault()
    let token = localStorage.getItem("user_token");
    if (token !== undefined) {
      // let URL = '10.42.0.1:8000'
      // console.log("sdsd", "ss");
      window.location.assign(BASE_URL + `/v1/pay/now?order=${token}`);
      // console.log("sdsd", "ss");
      let ta = window.location.search;
      // console.log(ta);
    }
  };
  viewBillingDetails = () => {
    // console.log("ksf")
    if (!this.state.isBillingOpen) {
      document.getElementById("capayment-paymentinfodoneu").style.display =
        "none";
      document.getElementById("capayment-paymentinfodonee").style.display =
        "block";
      document.getElementById(
        "capayment-paymentstatusdone"
      ).style.backgroundColor = "#FFFAF4";
      this.setState({
        isBillingOpen: !this.state.isBillingOpen,
      });
    } else {
      document.getElementById("capayment-paymentinfodonee").style.display =
        "none";
      document.getElementById("capayment-paymentinfodoneu").style.display =
        "block";
      document.getElementById(
        "capayment-paymentstatusdone"
      ).style.backgroundColor = "white";

      this.setState({
        isBillingOpen: !this.state.isBillingOpen,
      });
    }
  };
  handleCancel = () => {
    document.getElementById("capayment-couponapply").innerHTML = "APPLY";
    this.setState({
      isModalVisible: false,
      couponDiscountPercent: 0,
      isApplied: false,
    });
  };
  handleOk = () => {
    //checking if entered value exists in keys
    let { couponcode, possibleCoupons } = this.state;
    let index = "";
    // console.log(possibleCoupons["GFDS"])

    let sval = "";
    let nval = 0;
    try {
      try {
        sval = document.querySelector('input[name="coupon"]:checked').value;
        nval = parseInt(sval);
      } catch (err) {
        sval = "";
        nval = 0;
      }

      // console.log(this.state.couponcode in this.state.possibleCoupons)
      if (this.state.couponcode in this.state.possibleCoupons) {
        index = couponcode;
        // console.log(index)
      } else if (nval === 0) {
        alert("Coupon code invalid");
      }
    } catch (err) {
      alert("hi");
    }
    if (index !== "" && nval === 0) {
      this.setState(
        {
          couponDiscountPercent: possibleCoupons[index],
          isModalVisible: false,
          isApplied: true,
        },
        () => {}
      );
    } else if (index === "" && nval !== 0) {
      this.setState(
        {
          couponDiscountPercent: nval,
          isModalVisible: false,
          isApplied: true,
        },
        () => {}
      );
    } else {
      alert("Please select the coupon either way");
      // document.querySelector('input:radio[name="coupon"]:checked').prop('checked', false).checkboxradio("refresh");
      this.setState(
        {
          couponDiscountPercent: 0,
          isModalVisible: true,
          couponcode: 0,
        },
        () => {}
      );
    }
  };
  render() {
    let {
      isCouponValid,
      isPayed,
      couponDiscount,
      registrationFee,
      visibleAccomodationFee,
      totalFee,
      discountAvailedPercent,
      couponDiscountPercent,
      totAmtPayed,
      datePayed,
      isIIT,
      convenienceFee,
      workshopsNotPayed,
      workshopsPayed,
      noOfWorkshopsNotPayed,
      convenienceFeeDiscount,
      noOfWorkshopsPayed,
      registrationFeePayed,
      couponDiscountPayed,
      visibleAccomodationFeePayed,
      discountAvailedPercentPayed,
      couponDiscountPercentPayed,
    } = this.state;
    console.log("this.state", this.state);
    // let discountAvailed = (visibleAccomodationFee+registrationFee)*discountAvailedPercent/100//formula has to be changed
    // let convenienceFee2 = (convenienceFeeDiscount * totAmtPayed) / 100;
    let convenienceFee1 = (convenienceFeeDiscount * totalFee) / 100;
    // console.log(totalFee,'conv')
    // totalFee = totalFee + convenienceFeeDiscount*totalFee/100
    // totAmtPayed = totAmtPayed + convenienceFeeDiscount*totAmtPayed/100
    let actualFee = totalFee / 1.0236;
    let convenienceFee2 = totalFee - actualFee;
    couponDiscount = (registrationFee * couponDiscountPercent) / 100;
    totalFee = Number(totalFee).toFixed(2);
    totAmtPayed = Number(totAmtPayed).toFixed(2);
    convenienceFee1 = Number(convenienceFee1).toFixed(2);
    convenienceFee2 = Number(convenienceFee2).toFixed(2);
    // convenienceFee = Number.toFixed(2)
    // totalFee = Number(totalFee).toFixed(2)
    // let totalamt = registrationFee+visibleAccomodationFee-discountAvailed-couponDiscount
    // totalFee = registrationFee + visibleAccomodationFee - couponDiscount
    // console.log(totAmtPayed, "in render");

    // let discountAvailedPayed = (visibleAccomodationFeePayed+registrationFeePayed)*discountAvailedPercentPayed/100//formula has to be changed
    // let couponDiscountPayed = registrationFeePayed*couponDiscountPercentPayed/100
    // let totalamtPayed = registrationFeePayed+visibleAccomodationFeePayed-discountAvailedPayed-couponDiscountPayed

    if (!isPayed) {
      return (
        <div className="capayment-parent">
          <div className="capayment-headerrow">
            <div className="capayment-header">Payment Information</div>
            <div className="capayment-line1" />
          </div>
          <div className="capayment-paymentinfo">
            {/* <div class="coming_soon">COMING SOON</div> */}
            <div className="capayment-paymentstatus">
              <svg
                width="30"
                height="30"
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.6771 2C11.3047 2 2 11.3083 2 22.6852C2 34.062 11.3047 43.3704 22.6771 43.3704C34.0495 43.3704 43.3542 34.062 43.3542 22.6852C43.3542 11.3083 34.0495 2 22.6771 2Z"
                  stroke="#E2574C"
                  stroke-width="3.5"
                  stroke-miterlimit="10"
                />
                <path
                  d="M24.7438 10.0156H20.6084V12.3427H24.7438V10.0156Z"
                  fill="#E2574C"
                />
                <path
                  d="M24.7438 28.8916H20.6084V33.0286H24.7438V28.8916Z"
                  fill="#E2574C"
                />
                <path
                  d="M24.7438 12.3428H20.6084V24.7539H24.7438V12.3428Z"
                  fill="#E2574C"
                />
              </svg>
              <span className="capayment-span">Payment Status</span> : Pending
            </div>
            {isIIT !== "IIT" && (
              <React.Fragment>
                {/* {console.log(!isIIT,'idhar')} */}
                <div className="capayment-registration1-header">
                  Registration
                </div>
                <div className="capayment-registrationfee">
                  <div className="capayment-spaceaboutcolon">
                    Registration Fee
                  </div>{" "}
                  :<div className="capayment-space" />
                  <div className="capayment-registrationfee-innerdiv">
                    Rs {registrationFee}&nbsp; 
                    <strike>Rs 800</strike>
                    <div className="capayment-earlybirddiscount">
                      (Republic Week Discount)
                    </div>
                  </div>
                </div>
                <div className="capayment-accomodationfee">
                  <div className="capayment-spaceaboutcolon">
                    Accomodation Fee{" "}
                    <div
                      id="capayment-toggleaccomodation"
                      className="capayment-toggleaccomodation"
                      onClick={e => this.toggleAccomodation(e)}
                    >
                      DISCARD
                    </div>{" "}
                  </div>{" "}
                  :<div className="capayment-space" />
                  Rs {visibleAccomodationFee}
                </div>
                {/* <div className="capayment-discountavailed">
           <div className="capayment-spaceaboutcolon">{discountAvailedPercent}% Discount availed* </div>:<div className="capayment-space"></div>Rs&nbsp;{discountAvailed}
       </div> */}
                <div className="capayment-discountcoupon">
                  <div className="capayment-spaceaboutcolon">
                    Coupon Discount{" "}
                  </div>{" "}
                  :<div className="capayment-space" />
                  <div className="capayment-viewbillingdetails-coupondiscount">
                    - Rs {couponDiscount}
                  </div>
                  <div className="capayment-earlybirddiscount">
                    ({couponDiscountPercent} % Off)
                  </div>
                  {/* use this when coupons come from back-end */}
                  {/* <div className="capayment-spaceaboutcolon">Coupon Discount<button id="capayment-couponapply" className="capayment-couponapply" onClick={e=>{this.toggleCoupon(e)}}>APPLY</button> </div> :<div className="capayment-space"></div><div className='capayment-viewbillingdetails-coupondiscount'>- Rs {couponDiscount}</div><div className='capayment-earlybirddiscount'>({couponDiscountPercent} % Off)</div> */}
                  {isCouponValid ? (
                    <Modal
                      className="capayment-couponmodal"
                      title="APPLY COUPON"
                      visible={this.state.isModalVisible}
                      onOk={this.handleOk}
                      onCancel={this.handleCancel}
                    >
                      <div className="capayment-modalparent">
                        <div className="capayment-modalheader">
                          Enter Coupon Code
                        </div>
                        <input
                          className="capayment-modalinputcode"
                          value={this.state.couponcode}
                          onChange={e => {
                            this.setState({
                              couponcode: e.target.value,
                            });
                          }}
                          type="text"
                        />
                        <div className="capayment-modalmiddlerow">
                          <hr className="capayment-modalline" /> OR{" "}
                          <hr className="capayment-modalline" />
                        </div>
                        <div className="capayment-modallastrow">
                          <div className="capayment-modallastrowheader">
                            Choose a valid coupon
                          </div>
                          <div className="capayment-modalcouponlist1">
                            <Coupon />
                          </div>
                        </div>
                      </div>
                    </Modal>
                  ) : (
                    <Modal
                      className="capayment-couponmodal"
                      title="APPLY COUPON"
                      visible={this.state.isModalVisible}
                      onOk={this.handleOk}
                      onCancel={this.handleCancel}
                    >
                      <div className="capayment-modalparent">
                        <div className="capayment-modallastrow">
                          <div className="capayment-modallastrowheader1">
                            Coupons not Valid on this payment
                          </div>
                          <div className="capayment-modalcouponlist">
                            <Coupon />
                          </div>
                        </div>
                      </div>
                    </Modal>
                  )}
                </div>

                <div className="capayment-hortizontalline2" />
              </React.Fragment>
            )}

            <div className="capaymentwv-workshop-parent">
              <div className="capaymentwv-workshop-header">Workshops</div>
              <Payments
                workshops={workshopsNotPayed}
                noOfWorkshops={noOfWorkshopsNotPayed}
                isPayed={false}
                letMeknowIfDiscardClicked={this.letMeknowIfDiscardClicked}
                workshopsAppNotPayed={this.state.workshopsAppNotPayed}
              />
              
            </div>
            <div className="capayment-discountcoupon">
              <div className="capayment-spaceaboutcolon">Convenience Fee </div>{" "}
              :<div className="capayment-space" />
              <div className="capayment-registrationfee-innerdiv">
                Rs {convenienceFee2}
              </div>
              <div className="capayment-earlybirddiscount">
                ({convenienceFeeDiscount} %)
              </div>
              {/* use this when coupons come from back-end */}
              {/* <div className="capayment-spaceaboutcolon">Coupon Discount<button id="capayment-couponapply" className="capayment-couponapply" onClick={e=>{this.toggleCoupon(e)}}>APPLY</button> </div> :<div className="capayment-space"></div><div className='capayment-viewbillingdetails-coupondiscount'>- Rs {couponDiscount}</div><div className='capayment-earlybirddiscount'>({couponDiscountPercent} % Off)</div> */}
              {isCouponValid ? (
                <Modal
                  className="capayment-couponmodal"
                  title="APPLY COUPON"
                  visible={this.state.isModalVisible}
                  onOk={this.handleOk}
                  onCancel={this.handleCancel}
                >
                  <div className="capayment-modalparent">
                    <div className="capayment-modalheader">
                      Enter Coupon Code
                    </div>
                    <input
                      className="capayment-modalinputcode"
                      value={this.state.couponcode}
                      onChange={e => {
                        this.setState({
                          couponcode: e.target.value,
                        });
                      }}
                      type="text"
                    />
                    <div className="capayment-modalmiddlerow">
                      <hr className="capayment-modalline" /> OR{" "}
                      <hr className="capayment-modalline" />
                    </div>
                    <div className="capayment-modallastrow">
                      <div className="capayment-modallastrowheader">
                        Choose a valid coupon
                      </div>
                      <div className="capayment-modalcouponlist1">
                        <Coupon />
                      </div>
                    </div>
                  </div>
                </Modal>
              ) : (
                <Modal
                  className="capayment-couponmodal"
                  title="APPLY COUPON"
                  visible={this.state.isModalVisible}
                  onOk={this.handleOk}
                  onCancel={this.handleCancel}
                >
                  <div className="capayment-modalparent">
                    <div className="capayment-modallastrow">
                      <div className="capayment-modallastrowheader1">
                        Coupons not Valid on this payment
                      </div>
                      <div className="capayment-modalcouponlist">
                        <Coupon />
                      </div>
                    </div>
                  </div>
                </Modal>
              )}
            </div>

            {/* <div className="capaymentwv-horizontalline"></div>     */}
            <div className="capayment-horizontalline" />
            <div className="capayment-totalamt">
              <div className="capayment-spaceaboutcolon">Total Amount</div>:
              <div className="capayment-space" />
              Rs {totalFee}
            </div>
          </div>
          <div className="capayment-middlerow">
            <div className="capayment-tnc">
              &#x26B9; The criteria for discounts availed in fees have been
              discussed in the discount criterion below
              <br />
              &#x26B9; Only one coupon applicable for discounts
            </div>
            <button
              onClick={e => {
                this.onPay(e);
              }}
              className="capayment-paymentbtn"
            >
              PAY NOW
            </button>
          </div>
          <div className="capayment-bottomrow">
            <div className="capayment-discountcriterion">
              {" "}
              Discount Criterion
            </div>
            <div className="capayment-line2" />
          </div>
          <div className="capayment-criterialistparent">
            <div className="capayment-criterialistheader">
              Criterias used for discounts
            </div>
            <div className="capayment-criterialistminorheader">
              The following criteria were used to decide the waiver in the fees
              for all the participants.
            </div>
            <div className="capayment-criterialist">
              <CriteriaMapping />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="capayment-parent">
          <div className="capayment-headerrow">
            <div className="capayment-header">Payment Information</div>
            <div className="capayment-line1" />
          </div>
          <div
            className="capayment-paymentinfodoneu"
            id="capayment-paymentinfodoneu"
          >
            <div className="capayment-paymentstatusdone">
              <div className="capayment-paymentstatusdone12">
                <svg
                  width="41"
                  height="40"
                  viewBox="0 0 41 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.9224 12.6543L18.2446 22.5078L13.2885 17.5283L10.6172 20.1997L18.4321 28.0029L30.9921 15.8177L27.9224 12.6543Z"
                    fill="#70BF48"
                  />
                  <path
                    d="M20.4258 0C9.37716 0 0.425781 8.95138 0.425781 20C0.425781 31.0486 9.37716 40 20.4258 40C31.4744 40 40.4258 31.0486 40.4258 20C40.4141 8.95138 31.4627 0 20.4258 0ZM20.4258 36.3679C11.3807 36.3679 4.04617 29.0334 4.04617 19.9883C4.04617 10.9432 11.3807 3.60867 20.4258 3.60867C29.4709 3.62039 36.7937 10.9432 36.8054 19.9883C36.7937 29.0451 29.4709 36.3679 20.4258 36.3679Z"
                    fill="#70BF48"
                  />
                </svg>
                <span className="capayment-span">Payment Status</span> : Done
                {/* </div> */}
                {/* </div> */}
                <div className="capayment-billingdetails-secondrow">
                  {/* <div className="capayment-billingdetails-date">
                DATE
                <div className="capayment-billingdetails-date-value">
                  {datePayed}
                </div>
              </div> */}
                  <div className="capayment-billingdetails-amount">
                    AMOUNT
                    <div className="capayment-billingdetails-amount-value">
                      Rs {totAmtPayed}
                    </div>
                  </div>
                  <div className="capayment-billingdetails-type">
                    TYPE
                    <div className="capayment-billingdetails-type-value">
                      Registration
                    </div>
                  </div>
                  <div
                    className="capayment-viewbillingdetails"
                    onClick={this.viewBillingDetails}
                  >
                    View Billing Details
                    <svg
                      className="capayment-viewbillingdetails-svg"
                      width="15"
                      height="9.44"
                      viewBox="0 0 27 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.42578 2L13.4255 14L25.4258 2"
                        stroke="#F39423"
                        stroke-width="3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="capayment-paymentinfodonee"
            id="capayment-paymentinfodonee"
          >
            <div
              className="capayment-paymentstatusdone"
              id="capayment-paymentstatusdone"
            >
              <div className="capayment-paymentstatusdone12">
                <svg
                  width="41"
                  height="40"
                  viewBox="0 0 41 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.9224 12.6543L18.2446 22.5078L13.2885 17.5283L10.6172 20.1997L18.4321 28.0029L30.9921 15.8177L27.9224 12.6543Z"
                    fill="#70BF48"
                  />
                  <path
                    d="M20.4258 0C9.37716 0 0.425781 8.95138 0.425781 20C0.425781 31.0486 9.37716 40 20.4258 40C31.4744 40 40.4258 31.0486 40.4258 20C40.4141 8.95138 31.4627 0 20.4258 0ZM20.4258 36.3679C11.3807 36.3679 4.04617 29.0334 4.04617 19.9883C4.04617 10.9432 11.3807 3.60867 20.4258 3.60867C29.4709 3.62039 36.7937 10.9432 36.8054 19.9883C36.7937 29.0451 29.4709 36.3679 20.4258 36.3679Z"
                    fill="#70BF48"
                  />
                </svg>
                <span className="capayment-span">Payment Status</span> : Done
                <div className="capayment-billingdetails-secondrow">
                  {/* <div className="capayment-billingdetails-date">
                    DATE
                    <div className="capayment-billingdetails-date-value">
                      {datePayed}
                    </div>
                  </div> */}
                  <div className="capayment-billingdetails-amount">
                    AMOUNT
                    <div className="capayment-billingdetails-amount-value">
                      Rs {totAmtPayed}
                    </div>
                  </div>
                  <div className="capayment-billingdetails-type">
                    TYPE
                    <div className="capayment-billingdetails-type-value">
                      Registration
                    </div>
                  </div>
                  <div
                    className="capayment-viewbillingdetails"
                    onClick={this.viewBillingDetails}
                  >
                    Hide Billing Details
                    <svg
                      className="capayment-upArrowSVg"
                      width="27"
                      height="16"
                      viewBox="0 0 27 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M25.1602 14.6533L13.1604 2.65332L1.16016 14.6533"
                        stroke="#F39423"
                        stroke-width="3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {isIIT !== "IIT" && (
              <React.Fragment>
                <div className="capayment-viewbillingdetails-registration">
                  Registration
                </div>
                <div className="capayment-registrationfee">
                  <div className="capayment-spaceaboutcolon">
                    Registration Fee
                  </div>{" "}
                  :<div className="capayment-space" />
                  Rs {registrationFeePayed}
                  <div className="capayment-earlybirddiscount">
                    (Early Bird Discount)
                  </div>
                </div>
                <div className="capayment-accomodationfee">
                  <div className="capayment-spaceaboutcolon">
                    Accomodation Fee{" "}
                  </div>{" "}
                  :<div className="capayment-space" />
                  Rs {visibleAccomodationFeePayed}
                </div>
                {/* <div className="capayment-discountavailed">
                         <div className="capayment-spaceaboutcolon">{discountAvailedPercent}% Discount availed* </div>:<div className="capayment-space"></div>Rs&nbsp;{discountAvailedPayed}
                     </div> */}
                <div className="capayment-discountcoupon">
                  <div className="capayment-spaceaboutcolon">
                    Coupon Discount{" "}
                  </div>{" "}
                  :<div className="capayment-space" />
                  <div className="capayment-viewbillingdetails-coupondiscount">
                    - Rs {couponDiscountPayed}
                  </div>
                  <div className="capayment-earlybirddiscount">
                    ({couponDiscountPercentPayed} % Off)
                  </div>
                </div>
              </React.Fragment>
            )}

            {/* <div className='capaymentwv-hortizontalline21'></div>
                 <div className='capaymentwv-workshop-parent'>
                        <div className='capaymentwv-workshop-header'>
                            Workshops
                        </div>
                        <Payments workshops={workshopsPayed} noOfWorkshops={noOfWorkshopsPayed} />
                    </div> */}

            {noOfWorkshopsPayed > 0 ? (
              <React.Fragment>
                <div className="capayment-hortizontalline2" />
                <div className="capaymentwv-workshop-parent">
                  <div className="capaymentwv-workshop-header">Workshops</div>
                  <PaymentsPayed
                    workshops={workshopsPayed}
                    noOfWorkshops={noOfWorkshopsPayed}
                    isPayed={true}
                  />
                </div>
              </React.Fragment>
            ) : null}
            <div className="capayment-discountcoupon">
              <div className="capayment-spaceaboutcolon">Convenience Fee</div> :
              <div className="capayment-space" />
              <div className="capayment-viewbillingdetails1s-coupondiscount">
                Rs {convenienceFee2}
              </div>
              <div className="capayment-earlybirddiscount">
                ({convenienceFeeDiscount} %)
              </div>
            </div>
            <div className="capayment-horizontalline" />
            <div className="capayment-totalamt">
              <div className="capayment-spaceaboutcolon">Total Amount</div>:
              <div className="capayment-space" />
              Rs {totAmtPayed}
            </div>
          </div>
          <div className="capayment-bottomrow">
            <div className="capayment-discountcriterion">
              Discount Criterion
            </div>
            <div className="capayment-line2" />
          </div>
          <div className="capayment-criterialistparentdone">
            <div className="capayment-criterialistheader">
              Criterias used for discounts
            </div>
            <div className="capayment-criterialistminorheader">
              The following criteria were used to decide the waiver in the fees
              for all the participants.
            </div>
            <div className="capayment-criterialist">
              <CriteriaMapping />
            </div>
          </div>
        </div>
      );
    }
  }
}
