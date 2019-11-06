import React, { Component } from 'react'
import "../css/offers.css";

export default class Viewprofile extends Component {

    render() {
        return (
            <div className="caoffers-parent">
                <div className="ca-offers-parent-heading1 caoffersparent-font">
                    Earned Coupons
            </div>
	    <div className="caoffers-line1"></div>
                <div className="caoffers-earnedcoupons-rowparent1">
                    <div className="caoffers-earnedcoupons-child">
                        <div className="caoffers-earnedcoupons-child-heading caoffersheading-font">
                            50% Offer
                        </div>
                        <div className="caoffers-earnedcoupons-child-description caoffersdecription-font">
                            Invited 25 people succesfully.
                             Click the button below to redeem the offer.
                         </div>

                        <div className="caoffers-earnedcoupons-child-button">
                            <button>REDEEM</button>
                            <button id="caofferb01">INFO</button>
                        </div>
                    </div>

                    <div className="caoffers-earnedcoupons-child">

                    </div>
                    <div className="caoffers-earnedcoupons-child">

                    </div>
                </div>

                <div className="ca-offers-parent-heading2 caoffersparent-font">
                    Coupons Available
            </div>
	    <div className="caoffers-line1"></div>
                <div className="caoffers-earnedcoupons-rowparent1">
                    <div className="caoffers-earnedcoupons-child">
                        <div className="caoffers-earnedcoupons-child-heading caoffersheading-font">
                                50% Offer
                            </div>
                            <div className="caoffers-earnedcoupons-child-description caoffersdecription-font">
                                Invited 25 people succesfully to redeem the offer.
                            </div>

                            <div className="caoffers-earnedcoupons-invitelink">
                            Copy Invite Link
                            </div>

                            <div className="caoffers-earnedcoupons-child-button">
                                <button>5 invites</button>
                                <button id="caofferb01">INFO</button>
                            </div>
                        </div>

                    <div className="caoffers-earnedcoupons-child">
			   <div className="caoffers-earnedcoupons-child-heading caoffersheading-font">
                                50% Offer
                            </div>
                            <div className="caoffers-earnedcoupons-child-description-sucess caoffersdecription-font">
                              Invited 25 people succesfully.
				Click the button below to redeem the offer.The invited people must complete the payment to make a succesfull 					invitation
                            </div>

                           

                            <div className="caoffers-earnedcoupons-child-button">
                                <button>Back</button>
                            </div>
                       
                    </div>
                    <div className="caoffers-earnedcoupons-child">

                    </div>
                    <div className="caoffers-earnedcoupons-child">

                    </div>
                </div>
            </div>
        )
    }
}
