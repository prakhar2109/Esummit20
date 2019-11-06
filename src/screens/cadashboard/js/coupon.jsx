import React,{ Component } from 'react'
import './../css/coupon.css'

export default class Coupon extends Component {
    constructor(){
        super()
        this.state={
            noOfCoupons:2,
            coupons:{"Abcd":"50","amsm":"40"},//assuming that value of discount and codes are coming as strings,change if necessary
            
        }
    }
    render(){
        let {coupons} = this.state
        let couponsKey = Object.keys(coupons)
        let couponsValue = Object.values(coupons)
        return(
            <React.Fragment>
                {this.state.noOfCoupons ? couponsKey.map((coupon,i) => {
                    return <SingleCoupon cashback={couponsValue[i]} couponId={couponsKey[i]} ></SingleCoupon>
                }) : null
                }
            </React.Fragment>
        )
    }
}
class SingleCoupon extends Component{
    constructor(){
        super()
        this.state={

        }
    }

    render(){
        return(
            <div className="cacoupon-parent">
                <div className="cacoupon-toprow">
                    <input value={this.props.cashback} id="cacoupon-radiobtn" name="coupon" className="cacoupon-radiobtn" type="radio"></input>
                    <div className="cacoupon-couponcodewrapper">
                        {this.props.couponId}
                    </div>

                </div>
                <div className="coupon-cashback">
                    {this.props.cashback}% Cashback
                </div>
                <div className="cacoupon-validtill">
                    Valid till 2nd December 2018
                </div>

            </div>
        )
    }
}