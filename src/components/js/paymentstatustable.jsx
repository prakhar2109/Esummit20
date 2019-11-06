import React, { Component } from 'react'
import "../css/paymentstatustable.css";
import { BASE_URL } from './../../utils/urls'
import axios from "axios";


class PaymentStatusRow extends Component{
    
    render(){
        let {id,name,status} = this.props
        return(
            <React.Fragment>
                <tr className='cainvite-table-row'>
                    <td>{id}. {name}</td>
                    <td>{status} {
                     status==='Success'?(
                        <svg className='cainvite-table-svg' width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.2484 8.8584L12.474 15.7559L9.00471 12.2702L7.13477 14.1402L12.6052 19.6024L21.3972 11.0728L19.2484 8.8584Z" fill="#70BF48"/>
                        <path d="M14 0C6.26596 0 0 6.26596 0 14C0 21.734 6.26596 28 14 28C21.734 28 28 21.734 28 14C27.9918 6.26596 21.7258 0 14 0ZM14 25.4575C7.66842 25.4575 2.53427 20.3234 2.53427 13.9918C2.53427 7.66022 7.66842 2.52607 14 2.52607C20.3316 2.53427 25.4575 7.66022 25.4657 13.9918C25.4575 20.3316 20.3316 25.4575 14 25.4575Z" fill="#70BF48"/>
                    </svg>   
                     )
                     :(
                        <svg className='cainvite-table-svg' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 2C8.3 2 2 8.3 2 16C2 23.7 8.3 30 16 30C23.7 30 30 23.7 30 16C30 8.3 23.7 2 16 2Z" stroke="#E2574C" stroke-width="3" stroke-miterlimit="10"/>
                        <path d="M17.3996 7.4248H14.5996V8.9998H17.3996V7.4248Z" fill="#E2574C"/>
                        <path d="M17.3996 20.2002H14.5996V23.0002H17.3996V20.2002Z" fill="#E2574C"/>
                        <path d="M17.3996 9H14.5996V17.4H17.3996V9Z" fill="#E2574C"/>
                        </svg>
                     )
                    }
                        </td>
                </tr>
            </React.Fragment>
        )
    }
}
export default class PaymentStatusTable extends Component{
    constructor(){
        super()
        this.state={
            noOfMembers:0,
            membersList:[
                
            ]  
             
        }
    }
    
    render() {
        let {noOfMembers, membersList} = this.props
        let i=0
        let PEN = 'Pending'
        let SUC = 'Success'
        return (
            <React.Fragment>
                {noOfMembers ? membersList.map((member,i) => {
                    i++
                    if(member.status==='PEN'){
                        return <PaymentStatusRow id={i} name={member.name} status={PEN} key={i} ></PaymentStatusRow>
                    }
                    else if(member.status==='SUC'){
                        return <PaymentStatusRow id={i} name={member.name} status={SUC} key={i} ></PaymentStatusRow>
                    }
                    
                }) : null
                }
            </React.Fragment>
        ) 
    }
}
