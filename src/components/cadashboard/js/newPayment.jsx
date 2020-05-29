/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import '../css/newPayment.css'
import { BASE_URL } from '../../../utils/urls'
import axios from 'axios'

class Payment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      registrationPayment: '',
      accomodationPayment: '',
      workshopPayment: ''
    }
  }
  componentDidMount = () => {
    let token = localStorage.getItem('user_token')
    // console.log(token)
    axios
      .get(BASE_URL + '/v1/api/user/payment-status', {
        headers: {
          Authorization: `Token ${token}`
        }
      })
      .then(res => {
        console.log(res.data)
        this.setState({
          registrationPayment: res.data.is_reg_paid ? 'Paid' : 'Pending',
          accomodationPayment: res.data.is_acco_paid ? 'Paid' : 'Pending',
          workshopPayment: res.data.is_workshop_paid ? 'Paid' : 'Pending'
        })
      })
  }
  handleClick = e => {
    if (e.className === 'new-payment-status-pay') {
      window.open(
        'https://www.thecollegefever.com/events/e-summit-2020-iit-roorkee'
      )
    }
  }
  render() {
    return (
      <div className="payment-container">
        <div className="new-payment">
          <div className="new-payment-header">
            <span>E-Summit Registration :</span>
            <span>&nbsp; &nbsp;{this.state.registrationPayment}</span>
          </div>
          <div className="new-payment-status">
            <div
              className={
                this.state.registrationPayment === 'Pending'
                  ? 'new-payment-status-pay'
                  : 'new-payment-status-paid'
              }
              onClick={e => {
                this.handleClick(e.target)
              }}
            >
              {this.state.registrationPayment === 'Pending' ? 'PAY' : 'PAID'}
            </div>
          </div>
        </div>
        <div className="new-payment">
          <div className="new-payment-header">
            <span>Accomodation Status :</span>
            <span> &nbsp; {this.state.accomodationPayment}</span>
          </div>
          <div className="new-payment-status">
            <div
              className={
                this.state.accomodationPayment === 'Pending'
                  ? 'new-payment-status-pay'
                  : 'new-payment-status-paid'
              }
              onClick={e => {
                this.handleClick(e.target)
              }}
            >
              {this.state.accomodationPayment === 'Pending' ? 'PAY' : 'PAID'}
            </div>
          </div>
        </div>
        <div className="new-payment">
          <div className="new-payment-header">
            <span>Workshop Status :</span>
            <span>&nbsp;&nbsp; {this.state.workshopPayment}</span>
          </div>
          <div className="new-payment-status">
            <div
              className={
                this.state.workshopPayment === 'Pending'
                  ? 'new-payment-status-pay'
                  : 'new-payment-status-paid'
              }
              onClick={e => {
                this.handleClick(e.target)
              }}
            >
              {this.state.workshopPayment === 'Pending' ? 'PAY' : 'PAID'}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Payment
