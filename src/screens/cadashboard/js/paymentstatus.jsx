import './../css/paymentstatus.css'
import PaymentStatusTable from './../../../components/js/paymentstatustable'
import React, { Component } from 'react'
import { BASE_URL } from './../../../utils/urls'
import axios from "axios";
export default class PaymentStatus extends Component{
    constructor(){
        super()
        this.state={
            viewListIsVisible:true,
            onOfMembers:null,
            membersList:null,
            membersPaymentDone:null,
        }
    }
    componentDidMount = () => {
        let token = localStorage.getItem('user_token')
        axios
            .get(BASE_URL + "/v1/api/user/invited-users/", {
                headers: {
                    Authorization: `Token ${token}`,
                },
            })
            .then(res => {
                // console.log(res.data)
                this.setState({
                    membersList:res.data,
                    noOfMembers:res.data.length
                },()=>{
                    let successList = this.state.membersList.filter(x=>x.status==='SUC')
                    this.setState({
                        membersPaymentDone:successList.length
                    })
                });
                
     
            })
            .catch(response => {
                alert(response);
            });
        

        
    };
    
    viewListHandler = ()=>{
        if(this.state.viewListIsVisible){
            this.setState({
                viewListIsVisible:false,
            },()=>{
                document.getElementById('cainvite-paymentstatus-viewlist').innerHTML = 'Hide List <svg width="28" height="17" viewBox="0 0 28 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26 15L14.0003 3L2 15" stroke="#F39423" stroke-width="3"/></svg>'
                document.getElementById('cainvite-paymentnametable').style.display='block'
                document.getElementById('cainvite-linkparentstatic-subparent').style.backgroundColor=' #FFFAF4'
            })
        }
        else{
            this.setState({
                viewListIsVisible:true,
            },()=>{
                document.getElementById('cainvite-paymentstatus-viewlist').innerHTML = 'View List<svg width="28" height="17" viewBox="0 0 28 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2L13.9997 14L26 2" stroke="#F39423" stroke-width="3"/></svg>'
                document.getElementById('cainvite-paymentnametable').style.display='none'
                document.getElementById('cainvite-linkparentstatic-subparent').style.backgroundColor='white'


            })
        }
    }
    render(){
        // let {totalMembers,membersPaymentDone,membersPaymentNotDone}= this.props
        let {noOfMembers,membersList,membersPaymentDone} = this.state
        let totalMembers = noOfMembers//comment this when using data from backend
        let membersPaymentNotDone = totalMembers - membersPaymentDone//comment this when using data from backend
        
        return(
            <div className='cainvite-linkparent-parent-parent'>
            
                <div id='cainvite-linkparentstatic-subparent'>
                <div className='cainvite-linkparent-heading'>
                Successfully Registered Members : {totalMembers}
                </div>
                <div className='cainvite-paymentstatus-text2'>  
                    <div className='cainvite-paymentstatus-text2-paymentdone'>
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.2484 8.8584L12.474 15.7559L9.00471 12.2702L7.13477 14.1402L12.6052 19.6024L21.3972 11.0728L19.2484 8.8584Z" fill="#70BF48"/>
                        <path d="M14 0C6.26596 0 0 6.26596 0 14C0 21.734 6.26596 28 14 28C21.734 28 28 21.734 28 14C27.9918 6.26596 21.7258 0 14 0ZM14 25.4575C7.66842 25.4575 2.53427 20.3234 2.53427 13.9918C2.53427 7.66022 7.66842 2.52607 14 2.52607C20.3316 2.53427 25.4575 7.66022 25.4657 13.9918C25.4575 20.3316 20.3316 25.4575 14 25.4575Z" fill="#70BF48"/>
                        </svg>
                        Payment completed : {membersPaymentDone}
                    </div>
                    <div className='cainvite-paymentstatus-text2-paymentnotdone'>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 2C8.3 2 2 8.3 2 16C2 23.7 8.3 30 16 30C23.7 30 30 23.7 30 16C30 8.3 23.7 2 16 2Z" stroke="#E2574C" stroke-width="3" stroke-miterlimit="10"/>
                        <path d="M17.3996 7.4248H14.5996V8.9998H17.3996V7.4248Z" fill="#E2574C"/>
                        <path d="M17.3996 20.2002H14.5996V23.0002H17.3996V20.2002Z" fill="#E2574C"/>
                        <path d="M17.3996 9H14.5996V17.4H17.3996V9Z" fill="#E2574C"/>
                        </svg>

                        Payment not completed : {membersPaymentNotDone}
                    </div> 
                    <div id='cainvite-paymentstatus-viewlist' className='cainvite-paymentstatus-viewlist' onClick={this.viewListHandler}>
                        View List
                        <svg width="28" height="17" viewBox="0 0 28 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 2L13.9997 14L26 2" stroke="#F39423" stroke-width="3"/>
                        </svg>
                        
                    </div>
                
                </div>
                </div>
                <div id='cainvite-paymentnametable' className='cainvite-paymentnametable capayment-status'>

                    <table>
                        <tr>
                            
                            <th>
                                NAME    
                            </th>
                            <th>
                                STATUS
                            </th>
                        </tr>
                        <PaymentStatusTable noOfMembers={noOfMembers} membersList={membersList} />
                    </table>
                </div>
                
            </div>
        )
    }
}