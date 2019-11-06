import React, { Component } from 'react'
import "../../css/payment/memberallpaid.css";
import CriteriaMapping from './../discountcriterias';
import { Modal } from 'antd';
import Coupon from './../coupon'

import Payments from './workshops'

export default class Payment extends Component{
    constructor(){
        super()
        this.state={
            isPayed:true,//if payment is done, value will come from backend
            possibleCoupons:{"GFDS":"50"},//coupons which are to be entered
            registrationFee:800,//data if payment not done
            accomodationFee:1000,
            totalFee:1999,
            noOfMembers:7,
            visibleAccomodationFee:800,
            isDiscarded:false,
            isCouponValid:true,
            discountAvailedPercent:0,
            isApplied:false,
            couponDiscountPercent:50,
            isBillingOpen:false,
            isModalVisible:false,
            couponcode:'',
            couponSelected:'',
            

            //if payment is done isPayed will become true
            // values will come from backend
            registrationFeePayed:0,
            // accomodationFeePayed:1000,
            visibleAccomodationFeePayed:800,
            discountAvailedPercentPayed:20,
            couponDiscountPayed:0,
            couponDiscountPercentPayed:0,
            totAmtPayed:1860,
            datePayed:'12/12/12',

            //data for workshop
            datePayedW:'23/1/19',
            totAmtPayedW:800,
            isBillingOpenbw:false,
            noOfWorkshops:7,
            workshops:[
                {
                    'name':'workshop1',
                    'cost':550
                },
                {
                    'name':'workshop2',
                    'cost':500
                }
            ],
            
        }
    }
    
    toggleAccomodation = (e) =>{
        // e.preventDefault()
        if(this.state.isDiscarded){
            let {noOfMembers} = this.state
            document.getElementById("capayment-toggleaccomodation").style.borderColor="#E2574C";
            document.getElementById("capayment-toggleaccomodation").innerHTML="DISCARD";
            // document.getElementById('capayment-accomodationfee-toggle').innerHTML=`Rs ${visibleAccomodationFee}`;
            document.getElementById('capayment-noOfMembers').innerHTML=`x${noOfMembers}`;
            this.setState({
                isDiscarded:false,
                visibleAccomodationFee:this.state.accomodationFee,
            },()=>{
                document.getElementById('capayment-accomodationfee-toggle').innerHTML=`Rs ${this.state.visibleAccomodationFee}`;
            }
            )
        }
        else{
            document.getElementById("capayment-toggleaccomodation").style.borderColor="#F39423";
            document.getElementById("capayment-toggleaccomodation").innerHTML="ADD";
            document.getElementById('capayment-accomodationfee-toggle').innerHTML='';
            document.getElementById('capayment-noOfMembers').innerHTML='';
            
            this.setState({
                isDiscarded:true,
                visibleAccomodationFee:0,
            },()=>{
                // console.log(this.state.isDiscarded)
            })
        }
    }
    toggleCoupon = (e)=>{
        e.preventDefault()
        
            
            // document.getElementById("capayment-couponapply").style.borderColor="#E2574C";
            
            if(this.state.couponDiscountPercent===0){
                document.getElementById("capayment-couponapply").innerHTML="REMOVE";
                this.setState({
                    isApplied:true,
                    isModalVisible:true, 
                     
                
                    // visibleAccomodationFee:this.state.accomodationFee,
                },()=>{
                    // console.log(this.state.isModalVisible)
                }
            )
            }
                
            
            else{
                document.getElementById("capayment-couponapply").innerHTML="APPLY";
                this.setState({
                    isApplied:false,
                    isModalVisible:false,   
                    couponDiscountPercent:0, 
                    // visibleAccomodationFee:this.state.accomodationFee,
                },()=>{
                    // console.log(this.state.isModalVisible)
                }
                )
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
    }
    onPay = e =>{

    }
    viewBillingDetails = ()=>{
        // console.log("ksf")
        if(!this.state.isBillingOpen){
        document.getElementById("capayment-paymentinfodoneu").style.display="none";
        document.getElementById("capayment-paymentinfodonee").style.display="block";
        document.getElementById('capayment-paymentstatusdone').style.backgroundColor = '#FFFAF4'
        this.setState({
            isBillingOpen:!this.state.isBillingOpen,
        })
        }
        else{
        document.getElementById("capayment-paymentinfodonee").style.display="none";
        document.getElementById("capayment-paymentinfodoneu").style.display="block";
        document.getElementById('capayment-paymentstatusdone').style.backgroundColor = 'white'

        this.setState({
            isBillingOpen:!this.state.isBillingOpen,
        })
    }
    }
    viewBillingDetailsbw = ()=>{
        // console.log("ksf")
        if(!this.state.isBillingOpenbw){
        document.getElementById("capaymentbw-paymentinfodoneu").style.display="none";
        document.getElementById("capaymentbw-paymentinfodonee").style.display="block";
        document.getElementById('capaymentbw-paymentstatusdone').style.backgroundColor = '#FFFAF4'
        this.setState({
            isBillingOpenbw:!this.state.isBillingOpenbw,
        })
        }
        else{
        document.getElementById("capaymentbw-paymentinfodonee").style.display="none";
        document.getElementById("capaymentbw-paymentinfodoneu").style.display="block";
        document.getElementById('capaymentbw-paymentstatusdone').style.backgroundColor = 'white'

        this.setState({
            isBillingOpenbw:!this.state.isBillingOpenbw,
        })
    }
    }
    handleCancel = () =>{
        document.getElementById("capayment-couponapply").innerHTML="APPLY";
        this.setState({
            isModalVisible:false,
            couponDiscountPercent:0,
            isApplied:false
        })
    }
    handleOk = ()=>{
        //checking if entered value exists in keys
        let {couponcode,possibleCoupons} = this.state
        let index=''
        // console.log(possibleCoupons["GFDS"])
        
        let sval=''
        let nval=0
        try{
            try{
                sval = document.querySelector('input[name="coupon"]:checked').value;
                nval = parseInt(sval)
            }
            catch(err){
                sval=''
                nval=0  
            }
         
         
                // console.log(this.state.couponcode in this.state.possibleCoupons)
         if((this.state.couponcode in this.state.possibleCoupons)){
            index = couponcode
            // console.log(index)    
        }
            else if(nval===0){
                alert('Coupon code invalid')
            }
        }
        catch(err){
            alert("hi")   
        }
        if(index!==''&&nval===0){
            this.setState({
                couponDiscountPercent:possibleCoupons[index],
                isModalVisible:false,
                isApplied:true,
            },()=>{})
        }
        else if(index===''&&nval!==0){
        this.setState({
            couponDiscountPercent:nval,
            isModalVisible:false,
            isApplied:true,
        },()=>{})
    }
    else{
        alert("Please select the coupon either way")
        // document.querySelector('input:radio[name="coupon"]:checked').prop('checked', false).checkboxradio("refresh");
        this.setState({
            couponDiscountPercent:0,
            isModalVisible:true,
            couponcode:0,

        },()=>{})
    }
        
    }
    render()
    {   
        let {isCouponValid,datePayedW,totAmtPayedW,isPayed,registrationFee,visibleAccomodationFee,noOfMembers,totalFee,discountAvailedPercent,couponDiscountPercent,totAmtPayed,datePayed} = this.state
        let discountAvailed = (visibleAccomodationFee+registrationFee)*discountAvailedPercent/100//formula has to be changed
        let couponDiscount = registrationFee*couponDiscountPercent/100
        let totalamt = registrationFee+visibleAccomodationFee-discountAvailed-couponDiscount
        
           
        let {registrationFeePayed,noOfWorkshops,workshops,visibleAccomodationFeePayed,discountAvailedPercentPayed,couponDiscountPayed,couponDiscountPercentPayed} = this.state
        // let discountAvailedPayed = (visibleAccomodationFeePayed+registrationFeePayed)*discountAvailedPercentPayed/100//formula has to be changed
        // let couponDiscountPayed = registrationFeePayed*couponDiscountPercentPayed/100
        // let totalamtPayed = registrationFeePayed+visibleAccomodationFeePayed-discountAvailedPayed-couponDiscountPayed
            

            if(!isPayed){
                return(
            <div className="capayment-parent">
                 <div className="capayment-headerrow">
                     <div className="capayment-header">Payment Information</div>
                     <div className="capayment-line1"></div>
                 </div>
                 <div className="capayment-paymentinfo">
                    {/* <div class="coming_soon">COMING SOON</div> */}
                     <div className="capayment-paymentstatus">
                     <svg width="30" height="30" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.6771 2C11.3047 2 2 11.3083 2 22.6852C2 34.062 11.3047 43.3704 22.6771 43.3704C34.0495 43.3704 43.3542 34.062 43.3542 22.6852C43.3542 11.3083 34.0495 2 22.6771 2Z" stroke="#E2574C" stroke-width="3.5" stroke-miterlimit="10"/>
                    <path d="M24.7438 10.0156H20.6084V12.3427H24.7438V10.0156Z" fill="#E2574C"/>
                    <path d="M24.7438 28.8916H20.6084V33.0286H24.7438V28.8916Z" fill="#E2574C"/>
                    <path d="M24.7438 12.3428H20.6084V24.7539H24.7438V12.3428Z" fill="#E2574C"/>
                    </svg>
                    <span  className="capayment-span">Payment Status</span> : Pending
                     </div>
                     <div className='capayment-feesleader-only'>
                         Fees to be payed by contingent leader only
                     </div>
                     <div className = 'capaymentwv-registration-header'>
                    Contingent Registration
                 </div>
                     <div className="capayment-registrationfee">
                         <div className="capayment-spaceaboutcolon">Registration Fee</div> :<div className="capayment-space"></div>Rs {registrationFee}<div className='capayment-noOfMembers'>x{noOfMembers}</div><div className='capayment-earlybirddiscount'>(Early Bird Discount)</div>
                     </div>
                     <div className="capayment-accomodationfee">
                     <div className="capayment-spaceaboutcolon">Accomodation Fee   </div> :<div className="capayment-space"></div><div id='capayment-accomodationfee-toggle'>Rs {visibleAccomodationFee}</div><div className='capayment-noOfMembers' id='capayment-noOfMembers'>x{noOfMembers}</div>
                     </div>
                     {/* <div className="capayment-discountavailed">
                         <div className="capayment-spaceaboutcolon">{discountAvailedPercent}% Discount availed* </div>:<div className="capayment-space"></div>Rs&nbsp;{discountAvailed}
                     </div> */}
                     <div className="capayment-discountcoupon">
                     
                     <div className="capayment-spaceaboutcolon">Coupon Discount </div> :<div className="capayment-space"></div><div className='capayment-viewbillingdetails-coupondiscount'>- Rs {couponDiscount}</div><div className='capayment-noOfMembers'>x{noOfMembers}</div><div className='capayment-earlybirddiscount'>({couponDiscountPercent} % Off)</div>
                     {isCouponValid?(
                         
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
                         <input className="capayment-modalinputcode" value={this.state.couponcode} onChange={e=>{
                             this.setState({
                                 couponcode:e.target.value,
                             })
                         }} type="text"/>
                         <div className="capayment-modalmiddlerow">
                             <hr className="capayment-modalline" /> OR <hr className="capayment-modalline" />
                         </div>
                         <div className="capayment-modallastrow">
                             <div className="capayment-modallastrowheader">Choose a valid coupon</div>
                             <div className="capayment-modalcouponlist1">
                                 <Coupon />
                             </div>
                         </div>
                         </div>
                     </Modal>
                     ):(
                        <Modal
                        className="capayment-couponmodal"
                        title="APPLY COUPON"
                        visible={this.state.isModalVisible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                        >
			            <div className="capayment-modalparent">
                            
                            <div className="capayment-modallastrow">
                                <div className="capayment-modallastrowheader1">Coupons not Valid on this payment</div>
                                <div className="capayment-modalcouponlist">
                                    <Coupon />
                                </div>
                            </div>
                        </div>
                    </Modal>
                     )}
                     
                     </div>
                        <div className="capayment-horizontalline"></div>
                        <div className="capayment-totalamt">
                        <div className="capayment-spaceaboutcolon">Total Amount</div>:<div className="capayment-space"></div>Rs {totalFee}
                        </div>                                                            
                 </div>
                 <div className="capayment-middlerow">
                  
                

                </div>
                <div className="capayment-bottomrow">
                    <div className="capayment-discountcriterion"> Discount Criterion</div>
                    <div className="capayment-line2"></div>
                </div>
                <div className="capayment-criterialistparent">
                    <div className="capayment-criterialistheader">
                    Criterias used for discounts
                    </div>
                    <div className="capayment-criterialistminorheader">
                    The following criteria were used to decide the waiver in the fees for all the participants.
                    </div>
                    <div className="capayment-criterialist">
                        <CriteriaMapping/>
                    </div>
                </div>
            </div>
        )
                }
                else{
                    return(
                        <div className="capayment-parent">
                        <div className="capayment-headerrow">
                     <div className="capayment-header">Payment Information</div>
                     <div className="capayment-line1"></div>
                 </div>
                 <div className="capayment-paymentinfodoneu" id="capayment-paymentinfodoneu">
                     <div className="capayment-paymentstatusdone">
                     <div className='capayment-paymentstatusdone12'>

                     <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.9224 12.6543L18.2446 22.5078L13.2885 17.5283L10.6172 20.1997L18.4321 28.0029L30.9921 15.8177L27.9224 12.6543Z" fill="#70BF48"/>
<path d="M20.4258 0C9.37716 0 0.425781 8.95138 0.425781 20C0.425781 31.0486 9.37716 40 20.4258 40C31.4744 40 40.4258 31.0486 40.4258 20C40.4141 8.95138 31.4627 0 20.4258 0ZM20.4258 36.3679C11.3807 36.3679 4.04617 29.0334 4.04617 19.9883C4.04617 10.9432 11.3807 3.60867 20.4258 3.60867C29.4709 3.62039 36.7937 10.9432 36.8054 19.9883C36.7937 29.0451 29.4709 36.3679 20.4258 36.3679Z" fill="#70BF48"/>
</svg>

                    <span className="capayment-span">Payment Status</span> : Done
                    
                    </div>
                     </div>
                        <div className='capayment-billingdetails-secondrow'>
                        <div className='capayment-billingdetails-date'>
                            DATE
                            <div className='capayment-billingdetails-date-value'>
                                {datePayed}
                            </div>
                        </div>
                        <div className='capayment-billingdetails-amount'>
                            AMOUNT
                            <div className='capayment-billingdetails-amount-value'>
                                Rs {totAmtPayed}
                            </div>
                        </div>
                        <div className='capayment-billingdetails-type'>
                            TYPE
                            <div className='capayment-billingdetails-type-value'>
                                Contingent Registration
                            </div>
                        </div>
                        <div className="capayment-viewbillingdetails" onClick={this.viewBillingDetails}>
                            View Billing Details
                            <svg width="15" height="9.44" viewBox="0 0 27 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.42578 2L13.4255 14L25.4258 2" stroke="#F39423" stroke-width="3"/>
                            </svg>

                            </div>
                        </div>
                     
      
                 </div>


                <div className="capayment-paymentinfodonee" id="capayment-paymentinfodonee">
                     <div className="capayment-paymentstatusdone" id='capayment-paymentstatusdone'>
                     <div className='capayment-paymentstatusdone12'>

                     <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.9224 12.6543L18.2446 22.5078L13.2885 17.5283L10.6172 20.1997L18.4321 28.0029L30.9921 15.8177L27.9224 12.6543Z" fill="#70BF48"/>
<path d="M20.4258 0C9.37716 0 0.425781 8.95138 0.425781 20C0.425781 31.0486 9.37716 40 20.4258 40C31.4744 40 40.4258 31.0486 40.4258 20C40.4141 8.95138 31.4627 0 20.4258 0ZM20.4258 36.3679C11.3807 36.3679 4.04617 29.0334 4.04617 19.9883C4.04617 10.9432 11.3807 3.60867 20.4258 3.60867C29.4709 3.62039 36.7937 10.9432 36.8054 19.9883C36.7937 29.0451 29.4709 36.3679 20.4258 36.3679Z" fill="#70BF48"/>
</svg>

                    <span className="capayment-span">Payment Status</span> : Done
                    <div className='capayment-billingdetails-secondrow'>
                        <div className='capayment-billingdetails-date'>
                            DATE
                            <div className='capayment-billingdetails-date-value'>
                                {datePayed} 
                            </div>
                        </div>
                        <div className='capayment-billingdetails-amount'>
                            AMOUNT
                            <div className='capayment-billingdetails-amount-value'>
                                Rs {totAmtPayed} 
                            </div>
                        </div>
                        <div className='capayment-billingdetails-type'>
                            TYPE
                            <div className='capayment-billingdetails-type-value'>
                                Contingent Registration
                            </div>
                        </div>
                    <div className="capayment-viewbillingdetails" onClick={this.viewBillingDetails}>
                    Hide Billing Details
                    <svg className='capayment-upArrowSVg' width="27" height="16" viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.1602 14.6533L13.1604 2.65332L1.16016 14.6533" stroke="#F39423" stroke-width="3"/>
                    </svg>
                    </div>

                    </div>
                    </div>
                     </div>
                     
                     <div className='capayment-viewbillingdetails-registration'>
                        Contingent Registration
                    </div> 
      <div className="capayment-registrationfee">
                        
                     <div className="capayment-spaceaboutcolon">Registration Fee</div> :<div className="capayment-space"></div>Rs {registrationFeePayed}<div className='capayment-noOfMembers'>x{noOfMembers}</div><div className='capayment-earlybirddiscount'>(Early Bird Discount)</div>
                     </div>
                     <div className="capayment-accomodationfee">
                     <div className="capayment-spaceaboutcolon">Accomodation Fee  </div> :<div className="capayment-space"></div>Rs {visibleAccomodationFeePayed}<div className='capayment-noOfMembers'>x{noOfMembers}</div>
                     </div>
                     {/* <div className="capayment-discountavailed">
                         <div className="capayment-spaceaboutcolon">{discountAvailedPercent}% Discount availed* </div>:<div className="capayment-space"></div>Rs&nbsp;{discountAvailedPayed}
                     </div> */}
                     <div className="capayment-discountcoupon">
                     <div className="capayment-spaceaboutcolon">Coupon Discount </div> :<div className="capayment-space"></div><div className='capayment-viewbillingdetails-coupondiscount'>- Rs {couponDiscountPayed}</div><div className='capayment-noOfMembers'>x{noOfMembers}</div><div className='capayment-earlybirddiscount'>({couponDiscountPercentPayed} % Off)</div>
                     </div>
                     <div className="capayment-horizontalline"></div>
                     <div className="capayment-totalamt">
                     <div className="capayment-spaceaboutcolon">Total Amount</div>:<div className="capayment-space"></div>Rs {totAmtPayed}
                     </div>  
                 </div>
                 <div className="capaymentwv-paymentinfodoneu" id="capaymentbw-paymentinfodoneu">
                 <div className="capaymentwv-paymentstatusdone" id='capaymentwvbw-paymentstatusdone'>
                 <div className='capaymentwv-paymentstatusdone12'>

                 <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.9224 12.6543L18.2446 22.5078L13.2885 17.5283L10.6172 20.1997L18.4321 28.0029L30.9921 15.8177L27.9224 12.6543Z" fill="#70BF48"/>
<path d="M20.4258 0C9.37716 0 0.425781 8.95138 0.425781 20C0.425781 31.0486 9.37716 40 20.4258 40C31.4744 40 40.4258 31.0486 40.4258 20C40.4141 8.95138 31.4627 0 20.4258 0ZM20.4258 36.3679C11.3807 36.3679 4.04617 29.0334 4.04617 19.9883C4.04617 10.9432 11.3807 3.60867 20.4258 3.60867C29.4709 3.62039 36.7937 10.9432 36.8054 19.9883C36.7937 29.0451 29.4709 36.3679 20.4258 36.3679Z" fill="#70BF48"/>
</svg>

                <span className="capaymentwv-span">Payment Status</span> : Done
                </div>

                
                </div>
                <div className='capayment-billingdetails-secondrow'>
                        <div className='capayment-billingdetails-date'>
                            DATE
                            <div className='capayment-billingdetails-date-value'>
                                {datePayedW}
                            </div>
                        </div>
                        <div className='capayment-billingdetails-amount'>
                            AMOUNT
                            <div className='capayment-billingdetails-amount-value'>
                                Rs {totAmtPayedW}
                            </div>
                        </div>
                        <div className='capayment-billingdetails-type'>
                            TYPE
                            <div className='capayment-billingdetails-type-value'>
                                Workshops
                            </div>
                        </div>
                        <div className="capaymentwv-viewbillingdetailsbw" onClick={this.viewBillingDetailsbw}>
                            View Billing Details
                            <svg width="15" height="9.44" viewBox="0 0 27 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.42578 2L13.4255 14L25.4258 2" stroke="#F39423" stroke-width="3"/>
                            </svg>

                            </div>
                        </div>
                 
  
             </div>


            <div className="capaymentwv-paymentinfodonee" id="capaymentbw-paymentinfodonee">
                 <div className="capaymentwv-paymentstatusdone" id='capaymentbw-paymentstatusdone'>
                 <div className='capaymentwv-paymentstatusdone12'>

                 <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.9224 12.6543L18.2446 22.5078L13.2885 17.5283L10.6172 20.1997L18.4321 28.0029L30.9921 15.8177L27.9224 12.6543Z" fill="#70BF48"/>
<path d="M20.4258 0C9.37716 0 0.425781 8.95138 0.425781 20C0.425781 31.0486 9.37716 40 20.4258 40C31.4744 40 40.4258 31.0486 40.4258 20C40.4141 8.95138 31.4627 0 20.4258 0ZM20.4258 36.3679C11.3807 36.3679 4.04617 29.0334 4.04617 19.9883C4.04617 10.9432 11.3807 3.60867 20.4258 3.60867C29.4709 3.62039 36.7937 10.9432 36.8054 19.9883C36.7937 29.0451 29.4709 36.3679 20.4258 36.3679Z" fill="#70BF48"/>
</svg>

                <span className="capaymentwv-span">Payment Status</span> : Done
                <div className='capayment-billingdetails-secondrow'>
                        <div className='capayment-billingdetails-date'>
                            DATE
                            <div className='capayment-billingdetails-date-value'>
                                {datePayedW}
                            </div>
                        </div>
                        <div className='capayment-billingdetails-amount'>
                            AMOUNT
                            <div className='capayment-billingdetails-amount-value'>
                                Rs {totAmtPayedW} 
                            </div>
                        </div>
                        <div className='capayment-billingdetails-type'>
                            TYPE
                            <div className='capayment-billingdetails-type-value'>
                                Workshops
                            </div>
                        </div>
                    <div className="capaymentwv-viewbillingdetailsbw" onClick={this.viewBillingDetailsbw}>
                    Hide Billing Details
                    <svg className='capayment-upArrowSVg' width="27" height="16" viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.1602 14.6533L13.1604 2.65332L1.16016 14.6533" stroke="#F39423" stroke-width="3"/>
                    </svg>
                    </div>

                    </div>
                </div>
                 </div>
                 

                 {/* <div className='capaymentwv-hortizontalline21'></div> */}
                 <div className='capaymentwv-workshop-parent'>
                        <div className='capaymentwv-workshop-header'>
                            Workshops
                        </div>
                        <Payments noOfWorkshops={noOfWorkshops} workshops={workshops}/>
                    </div>
                    <div className="capaymentwv-horizontalline"></div>    
                    <div className='capaymentwv-totlamt'>
                        <div className="capaymentwv-spaceaboutcolon-total">Total Amount</div> :<div className="capaymentwv-space"></div>Rs&nbsp;{totAmtPayedW}
                    </div>    
             </div>


                 <div className="capayment-bottomrow">
                    <div className="capayment-discountcriterion"> Discount Criterion</div>
                    <div className="capayment-line2"></div>
                </div>
                <div className="capayment-criterialistparentdone">
                    <div className="capayment-criterialistheader">
                    Criterias used for discounts
                    </div>
                    <div className="capayment-criterialistminorheader">
                    The following criteria were used to decide the waiver in the fees for all the participants.
                    </div>
                    <div className="capayment-criterialist">
                        <CriteriaMapping/>
                    </div>
                </div>
                        </div>
                    )
                }
    }
}
