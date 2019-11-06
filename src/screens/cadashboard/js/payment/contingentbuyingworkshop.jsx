import React, { Component } from 'react'
import './../../css/payment/contingentbuyingworkshop.css'
import CriteriaMapping from './../discountcriterias';
import { Modal } from 'antd';
import Coupon from './../coupon'
import Payments from './workshops'
import UpArrowSVG from './../../svg/Vector.svg'

export default class Payment extends Component{
    constructor(){
        super()
        this.state={
            isPayed:false,//if payment is done, value will come from backend
            possibleCoupons:{"GFDS":"50"},//coupons which are to be entered
            registrationFee:800,//data if payment not done
            accomodationFee:1000,
            visibleAccomodationFee:1000,
            isDiscarded:false,
            isCouponValid:true,
            discountAvailedPercent:0,
            isApplied:false,
            couponDiscountPercent:0,
            couponDiscount:0,
            isBillingOpen:false,
            isModalVisible:false,
            couponcode:'',
            couponSelected:'',
            subTotal:100,
            totalAmount:0,
            

            //if payment is done isPayed will become true
            // values will come from backend
            registrationFeePayed:800,
            accomodationFeePayed:800,
            datePayed:'12/12/12',
            totAmtPayed:1860,
            visibleAccomodationFeePayed:800,
            discountAvailedPercentPayed:20,
            couponDiscountPercentPayed:50,


            //info for workshop payment
            registrationFeePayedW:0,
            accomodationFeePayedW:1000,
            datePayedW:'1/9/12',
            totAmtPayedW:160,
            visibleAccomodationFeePayedW:1000,
            discountAvailedPercentPayedW:20,
            couponDiscountPercentPayedW:0,
            isBillingOpenbw:false,
            noOfWorkshops:2,
            workshops:[
                {
                    'name':'workshop1',
                    'cost':500
                },
                {
                    'name':'workshop2',
                    'cost':500
                }
            ],


            noOfMembers:7,
            
        }
    }
    toggleAccomodation = (e) =>{
        if(this.state.isDiscarded){
            document.getElementById("capaymentwv-toggleaccomodation").style.borderColor="#E2574C";
            document.getElementById("capaymentwv-toggleaccomodation").innerHTML="DISCARD";
            this.setState({
                isDiscarded:false,
                visibleAccomodationFee:this.state.accomodationFee,
            },()=>{
            }
            )
        }
        else{
            document.getElementById("capaymentwv-toggleaccomodation").style.borderColor="#F39423";
            document.getElementById("capaymentwv-toggleaccomodation").innerHTML="Add";
            this.setState({
                isDiscarded:true,
                visibleAccomodationFee:0,
            },()=>{
            })
        }
    }
    toggleCoupon = (e)=>{
        e.preventDefault()
        
            
            
            if(this.state.couponDiscountPercent===0){
                document.getElementById("capaymentwv-couponapply").innerHTML="REMOVE";
                this.setState({
                    isApplied:true,
                    isModalVisible:true, 
                     
                
                },()=>{
                }
            )
            }
                
            
            else{
                document.getElementById("capaymentwv-couponapply").innerHTML="APPLY";
                this.setState({
                    isApplied:false,
                    isModalVisible:false,   
                    couponDiscountPercent:0, 
                },()=>{
                }
                )
            }
            
    }
    onPay = e =>{

    }
    viewBillingDetails = ()=>{
        if(!this.state.isBillingOpen){
        document.getElementById("capaymentwv-paymentinfodoneu").style.display="none";
        document.getElementById("capaymentwv-paymentinfodonee").style.display="block";
        document.getElementById('capaymentwv-paymentstatusdone').style.backgroundColor = '#FFFAF4'

        this.setState({
            isBillingOpen:!this.state.isBillingOpen,
        })
        }
        else{
        document.getElementById("capaymentwv-paymentinfodonee").style.display="none";
        document.getElementById("capaymentwv-paymentinfodoneu").style.display="block";
        document.getElementById('capaymentwv-paymentstatusdone').style.backgroundColor = 'white'

        this.setState({
            isBillingOpen:!this.state.isBillingOpen,
        })
    }
    }
    viewBillingDetailsbw = ()=>{
        if(!this.state.isBillingOpenbw){
        document.getElementById("capaymentwvbw-paymentinfodoneu").style.display="none";
        document.getElementById("capaymentwvbw-paymentinfodonee").style.display="block";
        document.getElementById('capaymentwvbw-paymentstatusdone').style.backgroundColor = '#FFFAF4'

        this.setState({
            isBillingOpenbw:!this.state.isBillingOpenbw,
        })
        }
        else{
        document.getElementById("capaymentwvbw-paymentinfodonee").style.display="none";
        document.getElementById("capaymentwvbw-paymentinfodoneu").style.display="block";
        document.getElementById('capaymentwvbw-paymentstatusdone').style.backgroundColor = 'white'

        this.setState({
            isBillingOpenbw:!this.state.isBillingOpenbw,
        })
    }
    }

    handleCancel = () =>{
        document.getElementById("capaymentwv-couponapply").innerHTML="APPLY";
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
            alert()
        }
        if(index!==''&&nval===0){
            this.setState({
                couponDiscountPercent:possibleCoupons[index],
                isModalVisible:false,
                isApplied:true,
            },()=>{})
        }
        else if(index===''&&nval!==0){
            // console.log(nval)
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
    render(){
        let {isCouponValid,isPayed,workshops,noOfWorkshops,couponDiscount,noOfMembers,registrationFee,visibleAccomodationFee,totAmtPayedW,datePayedW,discountAvailedPercent,couponDiscountPercent,subTotal,totalAmount} = this.state
        // let discountAvailed = (visibleAccomodationFee+registrationFee)*discountAvailedPercent/100//formula has to be changed
        couponDiscount = registrationFee*couponDiscountPercent/100
        // let totalamt = registrationFee+visibleAccomodationFee-discountAvailed-couponDiscount
        totalAmount = noOfWorkshops*500
           
        let {registrationFeePayed,visibleAccomodationFeePayed,discountAvailedPercentPayed,couponDiscountPercentPayed,datePayed,totAmtPayed} = this.state
        let discountAvailedPayed = (visibleAccomodationFeePayed+registrationFeePayed)*discountAvailedPercentPayed/100//formula has to be changed
        let couponDiscountPayed = registrationFeePayed*couponDiscountPercentPayed/100
        let totalamtPayed = registrationFeePayed+visibleAccomodationFeePayed-discountAvailedPayed-couponDiscountPayed
        if(!isPayed){
            return(
        <div className="capaymentwv-parent">
             <div className="capaymentwv-headerrow">
                 <div className="capaymentwv-header">Payment Information</div>
                 <div className="capaymentwv-line1"></div>
             </div>
             <div className="capaymentwv-paymentinfo">
                {/* <div class="coming_soon">COMING SOON</div> */}
                 <div className="capaymentwv-paymentstatus">
                 <svg width="30" height="30" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.6771 2C11.3047 2 2 11.3083 2 22.6852C2 34.062 11.3047 43.3704 22.6771 43.3704C34.0495 43.3704 43.3542 34.062 43.3542 22.6852C43.3542 11.3083 34.0495 2 22.6771 2Z" stroke="#E2574C" stroke-width="3.5" stroke-miterlimit="10"/>
                <path d="M24.7438 10.0156H20.6084V12.3427H24.7438V10.0156Z" fill="#E2574C"/>
                <path d="M24.7438 28.8916H20.6084V33.0286H24.7438V28.8916Z" fill="#E2574C"/>
                <path d="M24.7438 12.3428H20.6084V24.7539H24.7438V12.3428Z" fill="#E2574C"/>
                </svg>
                <span className="capaymentwv-span">Payment Status</span> : Pending
                 </div>
                 
                 
                    <div className='capaymentwv-workshop-parent'>
                        <div className='capaymentwv-workshop-header'>
                            Workshops
                        </div>
                        <Payments workshops={workshops} noOfWorkshops={noOfWorkshops}/>
                    </div>          
                    <div className="capaymentwv-horizontalline"></div>    
                    <div className='capaymentwv-totlamt'>
                        <div className="capaymentwv-spaceaboutcolon-total">Total Amount</div> :<div className="capaymentwv-space"></div>Rs&nbsp;{totalAmount}
                    </div>                                            
             </div>
                
             <div className="capaymentwv-middlerow">
             <div className="capaymentwv-tnc">
                &#x26B9; The criteria for discounts availed in fees have been discussed in the discount criterion below<br/>
                &#x26B9; Only one coupon applicable for discounts
            </div> 
            <button onClick={e=>{this.onPay(e)}} className="capaymentwv-paymentbtn">
                PAY NOW
            </button> 

            </div>



            <div className='capaymentwv-bottomrow'>
                <div className='capaymentwv-discountcriterion'>Billing Details</div>
                <div className='capaymentwv-line2'></div>

            </div>
            <div className="capaymentwv-paymentinfodoneu" id="capaymentwv-paymentinfodoneu">
                 <div className="capaymentwv-paymentstatusdone">
                 <div className='capaymentwv-paymentstatusdone12'>

                 <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.9224 12.6543L18.2446 22.5078L13.2885 17.5283L10.6172 20.1997L18.4321 28.0029L30.9921 15.8177L27.9224 12.6543Z" fill="#70BF48"/>
<path d="M20.4258 0C9.37716 0 0.425781 8.95138 0.425781 20C0.425781 31.0486 9.37716 40 20.4258 40C31.4744 40 40.4258 31.0486 40.4258 20C40.4141 8.95138 31.4627 0 20.4258 0ZM20.4258 36.3679C11.3807 36.3679 4.04617 29.0334 4.04617 19.9883C4.04617 10.9432 11.3807 3.60867 20.4258 3.60867C29.4709 3.62039 36.7937 10.9432 36.8054 19.9883C36.7937 29.0451 29.4709 36.3679 20.4258 36.3679Z" fill="#70BF48"/>
</svg>

                <span className="capaymentwv-span">Payment Status</span> : Done
                </div>

                
                </div>
                <div className='capaymentwv-billingdetails-secondrow'>
                        <div className='capaymentwv-billingdetails-date'>
                            DATE
                            <div className='capaymentwv-billingdetails-date-value'>
                                {datePayed}
                            </div>
                        </div>
                        <div className='capaymentwv-billingdetails-amount'>
                            AMOUNT
                            <div className='capaymentwv-billingdetails-amount-value'>
                                Rs {totAmtPayed}
                            </div>
                        </div>
                        <div className='capaymentwv-billingdetails-type'>
                            TYPE
                            <div className='capaymentwv-billingdetails-type-value'>
                                Contingent Registration, Workshops
                            </div>
                        </div>
                        <div className="capaymentwv-viewbillingdetails" onClick={this.viewBillingDetails}>
                            View Billing Details
                            <svg width="15" height="9.44" viewBox="0 0 27 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.42578 2L13.4255 14L25.4258 2" stroke="#F39423" stroke-width="3"/>
                            </svg>

                            </div>
                        </div>
                 
  
             </div>


            <div className="capaymentwv-paymentinfodonee" id="capaymentwv-paymentinfodonee">
                 <div className="capaymentwv-paymentstatusdone" id='capaymentwv-paymentstatusdone'>
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
                                Contingent Registration, Workshops
                            </div>
                        </div>
                    <div className="capaymentwv-viewbillingdetails" onClick={this.viewBillingDetails}>
                    Hide Billing Details
                    <svg className='capayment-upArrowSVg' width="27" height="16" viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.1602 14.6533L13.1604 2.65332L1.16016 14.6533" stroke="#F39423" stroke-width="3"/>
                    </svg>
                    </div>

                    </div>
                </div>
                 </div>
                 
                 
  <div className="capaymentwv-registrationfee">
                     <div className="capaymentwv-spaceaboutcolon">Registration Fee</div> :<div className="capaymentwv-space"></div>Rs&nbsp;{registrationFeePayed}<div className='capayment-noOfMembers'>x{noOfMembers}</div><div className='capaymentwv-earlybirddiscount'>(Early Bird Discount)</div>
                 </div>
                 <div className="capaymentwv-accomodationfee">
                 <div className="capaymentwv-spaceaboutcolon">Accomodation Fee  </div> :<div className="capaymentwv-space"></div>Rs&nbsp;{visibleAccomodationFeePayed}<div className='capayment-noOfMembers'>x{noOfMembers}</div>
                 </div>
                 
                 <div className="capaymentwv-discountcoupon">
                 <div className="capaymentwv-spaceaboutcolon">Coupon Discount </div> :<div className="capaymentwv-space"></div>Rs&nbsp;{couponDiscountPayed}<div className='capayment-noOfMembers'>x{noOfMembers}</div><div className='capayment-earlybirddiscount'>(Contingent Discount)</div>
                 </div>
                 {/* <div className="capaymentwv-horizontalline"></div> */}
                 <div className="capaymentwv-totalamt">
                 <div className="capaymentwv-spaceaboutcolon12">Sub Total Amount</div>:<div className="capaymentwv-space"></div>Rs&nbsp;{totalamtPayed}
                 
                 </div>  
                 <div className='capaymentwv-hortizontalline21'></div>
                 <div className='capaymentwv-workshop-parent'>
                        <div className='capaymentwv-workshop-header'>
                            Workshops
                        </div>
                        <Payments />
                    </div>
                    <div className="capaymentwv-horizontalline"></div>    
                    <div className='capaymentwv-totlamt'>
                        <div className="capaymentwv-spaceaboutcolon-total">Total Amount</div> :<div className="capaymentwv-space"></div>Rs&nbsp;{totalAmount}
                    </div>    
             </div> 
            <div className="capaymentwv-bottomrow">
                <div className="capaymentwv-discountcriterion"> Discount Criterion</div>
                <div className="capaymentwv-line2"></div>
            </div>
            <div className="capaymentwv-criterialistparent">
                <div className="capaymentwv-criterialistheader">
                Criterias used for discounts
                </div>
                <div className="capaymentwv-criterialistminorheader">
                The following criteria were used to decide the waiver in the fees for all the participants.
                </div>
                <div className="capaymentwv-criterialist">
                    <CriteriaMapping/>
                </div>
            </div>
        </div>
    )
            }
            else{
                return(
                    <div className="capaymentwv-parent">
                    <div className="capaymentwv-headerrow">
                 <div className="capaymentwv-header">Billing Details</div>
                 <div className='capaymentwv-line3'></div>
             </div>
             {/* <div className='capaymentwv-bottomrow'>
                <div className='capaymentwv-discountcriterion'>Billing Details</div>
                <div className='capaymentwv-line2'></div>

            </div> */}
            <div className="capaymentwv-paymentinfodoneu" id="capaymentwvbw-paymentinfodoneu">
                 <div className="capaymentwv-paymentstatusdone" id='capaymentwvbw-paymentstatusdone'>
                 <div className='capaymentwv-paymentstatusdone12'>

                 <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.9224 12.6543L18.2446 22.5078L13.2885 17.5283L10.6172 20.1997L18.4321 28.0029L30.9921 15.8177L27.9224 12.6543Z" fill="#70BF48"/>
<path d="M20.4258 0C9.37716 0 0.425781 8.95138 0.425781 20C0.425781 31.0486 9.37716 40 20.4258 40C31.4744 40 40.4258 31.0486 40.4258 20C40.4141 8.95138 31.4627 0 20.4258 0ZM20.4258 36.3679C11.3807 36.3679 4.04617 29.0334 4.04617 19.9883C4.04617 10.9432 11.3807 3.60867 20.4258 3.60867C29.4709 3.62039 36.7937 10.9432 36.8054 19.9883C36.7937 29.0451 29.4709 36.3679 20.4258 36.3679Z" fill="#70BF48"/>
</svg>

                <span className="capaymentwv-span">Payment Status</span> : Done
                </div>

                
                </div>
                <div className='capaymentwv-billingdetails-secondrow'>
                        <div className='capaymentwv-billingdetails-date'>
                            DATE
                            <div className='capaymentwv-billingdetails-date-value'>
                                {datePayedW}
                            </div>
                        </div>
                        <div className='capaymentwv-billingdetails-amount'>
                            AMOUNT
                            <div className='capaymentwv-billingdetails-amount-value'>
                                Rs {totAmtPayedW}
                            </div>
                        </div>
                        <div className='capaymentwv-billingdetails-type'>
                            TYPE
                            <div className='capaymentwv-billingdetails-type-value'>
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


            <div className="capaymentwv-paymentinfodonee" id="capaymentwvbw-paymentinfodonee">
                 <div className="capaymentwv-paymentstatusdone" id='capaymentwvbw-paymentstatusdone'>
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
                        <Payments />
                    </div>
                    <div className="capaymentwv-horizontalline"></div>    
                    <div className='capaymentwv-totlamt'>
                        <div className="capaymentwv-spaceaboutcolon-total">Total Amount</div> :<div className="capaymentwv-space"></div>Rs&nbsp;{totAmtPayedW}
                    </div>    
             </div>


             {/* nbksc */}

                <div className="capaymentwv-paymentinfodoneu" id="capaymentwv-paymentinfodoneu">
                 <div className="capaymentwv-paymentstatusdone" id='capaymentwv-paymentstatusdone'>
                 <div className='capaymentwv-paymentstatusdone12'>

                 <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.9224 12.6543L18.2446 22.5078L13.2885 17.5283L10.6172 20.1997L18.4321 28.0029L30.9921 15.8177L27.9224 12.6543Z" fill="#70BF48"/>
<path d="M20.4258 0C9.37716 0 0.425781 8.95138 0.425781 20C0.425781 31.0486 9.37716 40 20.4258 40C31.4744 40 40.4258 31.0486 40.4258 20C40.4141 8.95138 31.4627 0 20.4258 0ZM20.4258 36.3679C11.3807 36.3679 4.04617 29.0334 4.04617 19.9883C4.04617 10.9432 11.3807 3.60867 20.4258 3.60867C29.4709 3.62039 36.7937 10.9432 36.8054 19.9883C36.7937 29.0451 29.4709 36.3679 20.4258 36.3679Z" fill="#70BF48"/>
</svg>

                <span className="capaymentwv-span">Payment Status</span> : Done
                </div>

                
                </div>
                <div className='capaymentwv-billingdetails-secondrow'>
                        <div className='capaymentwv-billingdetails-date'>
                            DATE
                            <div className='capaymentwv-billingdetails-date-value'>
                                {datePayed}
                            </div>
                        </div>
                        <div className='capaymentwv-billingdetails-amount'>
                            AMOUNT
                            <div className='capaymentwv-billingdetails-amount-value'>
                                Rs {totAmtPayed}
                            </div>
                        </div>
                        <div className='capaymentwv-billingdetails-type'>
                            TYPE
                            <div className='capaymentwv-billingdetails-type-value'>
                                Contingent Registration, Workshops
                            </div>
                        </div>
                        <div className="capaymentwv-viewbillingdetails" onClick={this.viewBillingDetails}>
                            View Billing Details
                            <svg width="15" height="9.44" viewBox="0 0 27 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.42578 2L13.4255 14L25.4258 2" stroke="#F39423" stroke-width="3"/>
                            </svg>

                            </div>
                        </div>
                 
  
             </div>

             {/* kak */}

             <div className="capaymentwv-paymentinfodonee" id="capaymentwv-paymentinfodonee">
                 <div className="capaymentwv-paymentstatusdone" id='capaymentwv-paymentstatusdone'>
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
                                Contingent Registration, Workshops
                            </div>
                        </div>
                    <div className="capaymentwv-viewbillingdetails" onClick={this.viewBillingDetails}>
                    Hide Billing Details
                    <svg className='capayment-upArrowSVg' width="27" height="16" viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.1602 14.6533L13.1604 2.65332L1.16016 14.6533" stroke="#F39423" stroke-width="3"/>
                    </svg>
                    </div>

                    </div>
                </div>
                 </div>
                 
                 
  <div className="capaymentwv-registrationfee">
                     <div className="capaymentwv-spaceaboutcolon">Registration Fee</div> :<div className="capaymentwv-space"></div>Rs&nbsp;{registrationFeePayed}<div className='capayment-noOfMembers'>x{noOfMembers}</div><div className='capaymentwv-earlybirddiscount'>(Early Bird Discount)</div>
                 </div>
                 <div className="capaymentwv-accomodationfee">
                 <div className="capaymentwv-spaceaboutcolon">Accomodation Fee  </div> :<div className="capaymentwv-space"></div>Rs&nbsp;{visibleAccomodationFeePayed}<div className='capayment-noOfMembers'>x{noOfMembers}</div>
                 </div>
                 
                 <div className="capaymentwv-discountcoupon">
                 <div className="capaymentwv-spaceaboutcolon">Coupon Discount </div> :<div className="capaymentwv-space"></div>Rs&nbsp;{couponDiscountPayed}<div className='capayment-noOfMembers'>x{noOfMembers}</div><div className='capayment-earlybirddiscount'>(Contingent Discount)</div>
                 </div>
                 {/* <div className="capaymentwv-horizontalline"></div> */}
                 <div className="capaymentwv-totalamt">
                 <div className="capaymentwv-spaceaboutcolon12">Sub Total Amount</div>:<div className="capaymentwv-space"></div>Rs&nbsp;{totalamtPayed}
                 
                 </div>  
                 <div className='capaymentwv-hortizontalline21'></div>
                 <div className='capaymentwv-workshop-parent'>
                        <div className='capaymentwv-workshop-header'>
                            Workshops
                        </div>
                        <Payments />
                    </div>
                    <div className="capaymentwv-horizontalline"></div>    
                    <div className='capaymentwv-totlamt'>
                        <div className="capaymentwv-spaceaboutcolon-total">Total Amount</div> :<div className="capaymentwv-space"></div>Rs&nbsp;{totalAmount}
                    </div>    
             </div>


                {/* kns                 */}
             <div className="capaymentwv-bottomrow">
                <div className="capaymentwv-discountcriterion"> Discount Criterion</div>
                <div className="capaymentwv-line2"></div>
            </div>
            <div className="capaymentwv-criterialistparentdone">
                <div className="capaymentwv-criterialistheader">
                Criterias used for discounts
                </div>
                <div className="capaymentwv-criterialistminorheader">
                The following criteria were used to decide the waiver in the fees for all the participants.
                </div>
                <div className="capaymentwv-criterialist">
                    <CriteriaMapping/>
                </div>
            </div>
        </div>
    )
}
}
}
