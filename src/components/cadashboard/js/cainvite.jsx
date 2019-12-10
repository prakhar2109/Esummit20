import React, { Component } from 'react'
import "../css/cainvite.css";
import PaymentStatus from './paymentstatus'
import InviteBenefits from './invitebenefits'
import { BASE_URL } from "../../../utils/urls";
import axios from "axios";



export default class Cainvite extends Component {
    state = {
        loading: false,
        visible: false,
        invite_link : ""
      }      
    viewMore() {
        document.getElementById("viewmore").style.display = "none";
        document.getElementById("viewless").style.display = "block";
        document.getElementById("show").style.display = "block";
        document.getElementById("show1").style.marginBottom = "0";
        document.getElementById("show1").style.background = "#FFFAF4";




    }

    viewLess() {
        document.getElementById("viewmore").style.display = "block";
        document.getElementById("viewless").style.display = "none";
        document.getElementById("show").style.display = "none";
        document.getElementById("show1").style.background = "#FFF"
    }

    copyLink() {
        var copyText = document.getElementById("camyinput");
        copyText.select();
        document.execCommand("copy");

    }

    componentDidMount = () => {
        let token = localStorage.getItem("user_token");
    
        if (token !== undefined) {
          axios
            .get(BASE_URL + "/v1/api/user/profile", {
              headers: {
                Authorization: `Token ${token}`,
              },
            })
            .then(res => {
              this.setState({ invite_link : res.data.invite_url });
    
            })
            .catch(response => {
            //   window.location.href = "/login";
            });
        }
      };
  
    render() {
        let status="Done";
        let stat="Notdone";
        
        return (
            <div className="cainvite-parent">

                <div className="cainviteparent-heading">
                    Invites here
                </div>
                <div className="cainvite-line1"></div>
                <div className="cainvite-linkparent">

                    <div className="cainvite-linkparent-heading">
                        Invite link
                    </div>

                    <div className="cainvite-linkparent-input">
                        <input value = {this.state.invite_link} type="text" id="camyinput"></input>
                        <button id="camyinputbutton" onClick={this.copyLink}>Copy link</button>
                    </div>
                </div>
{/*

                <div id="show1" className="cainvite-register-parent">

                    <div className="cainvite-register-parent-heading">
                        Successfully registered members : 10
                    </div>


                    <div className="cainvite-register-parent-child">
                        <div id="cainviteca1">
                        <svg width="25" height="25" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.9224 12.6543L18.2446 22.5078L13.2885 17.5283L10.6172 20.1997L18.4321 28.0029L30.9921 15.8177L27.9224 12.6543Z" fill="#70BF48"/>
                        <path d="M20.4258 0C9.37716 0 0.425781 8.95138 0.425781 20C0.425781 31.0486 9.37716 40 20.4258 40C31.4744 40 40.4258 31.0486 40.4258 20C40.4141 8.95138 31.4627 0 20.4258 0ZM20.4258 36.3679C11.3807 36.3679 4.04617 29.0334 4.04617 19.9883C4.04617 10.9432 11.3807 3.60867 20.4258 3.60867C29.4709 3.62039 36.7937 10.9432 36.8054 19.9883C36.7937 29.0451 29.4709 36.3679 20.4258 36.3679Z" fill="#70BF48"/>
                        </svg>
                                Payment Completed:6
                        </div>
                        <div id="cainviteca2">
                        <svg width="25" height="25" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.6771 2C11.3047 2 2 11.3083 2 22.6852C2 34.062 11.3047 43.3704 22.6771 43.3704C34.0495 43.3704 43.3542 34.062 43.3542 22.6852C43.3542 11.3083 34.0495 2 22.6771 2Z" stroke="#E2574C" stroke-width="3.5" stroke-miterlimit="10"/>
                        <path d="M24.7438 10.0156H20.6084V12.3427H24.7438V10.0156Z" fill="#E2574C"/>
                        <path d="M24.7438 28.8916H20.6084V33.0286H24.7438V28.8916Z" fill="#E2574C"/>
                        <path d="M24.7438 12.3428H20.6084V24.7539H24.7438V12.3428Z" fill="#E2574C"/>
                        </svg>
                                Payment not Completed:4
                        </div>
                        <div id="viewmore" className="ca-Viewoption" onClick={this.viewMore}>View List</div>
                        <div id="viewless" className="ca-Viewoption" onClick={this.viewLess}>Hide List</div>


                    </div>

                </div>
                <div id="show" className="cainvite-register-parent-child2" >
                <table id="cainvite01">
		<tbody>
                        <tr>
                            <th id="cainvitename">NAME</th>

                            <th id="cainvitestatus">STATUS</th>
                        </tr>
                        <tr>
                            <td id="cainvitename-child">Prakhar Agarwal</td>
                                    
                            <td id="cainvitestatus">{status} {status==="Done"? <svg width="25" height="25" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27.9224 12.6543L18.2446 22.5078L13.2885 17.5283L10.6172 20.1997L18.4321 28.0029L30.9921 15.8177L27.9224 12.6543Z" fill="#70BF48"/>
                                <path d="M20.4258 0C9.37716 0 0.425781 8.95138 0.425781 20C0.425781 31.0486 9.37716 40 20.4258 40C31.4744 40 40.4258 31.0486 40.4258 20C40.4141 8.95138 31.4627 0 20.4258 0ZM20.4258 36.3679C11.3807 36.3679 4.04617 29.0334 4.04617 19.9883C4.04617 10.9432 11.3807 3.60867 20.4258 3.60867C29.4709 3.62039 36.7937 10.9432 36.8054 19.9883C36.7937 29.0451 29.4709 36.3679 20.4258 36.3679Z" fill="#70BF48"/>
                                </svg>:  <svg width="25" height="25" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.6771 2C11.3047 2 2 11.3083 2 22.6852C2 34.062 11.3047 43.3704 22.6771 43.3704C34.0495 43.3704 43.3542 34.062 43.3542 22.6852C43.3542 11.3083 34.0495 2 22.6771 2Z" stroke="#E2574C" stroke-width="3.5" stroke-miterlimit="10"/>
                                <path d="M24.7438 10.0156H20.6084V12.3427H24.7438V10.0156Z" fill="#E2574C"/>
                                <path d="M24.7438 28.8916H20.6084V33.0286H24.7438V28.8916Z" fill="#E2574C"/>
                                <path d="M24.7438 12.3428H20.6084V24.7539H24.7438V12.3428Z" fill="#E2574C"/>
                                </svg>} 
                            </td>
                        </tr>
                        <tr>
                            <td id="cainvitename-child">Prakhar Agarwal</td>
                            <td id="cainvitestatus">{stat}{stat==="Done"? <svg width="25" height="25" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27.9224 12.6543L18.2446 22.5078L13.2885 17.5283L10.6172 20.1997L18.4321 28.0029L30.9921 15.8177L27.9224 12.6543Z" fill="#70BF48"/>
                                <path d="M20.4258 0C9.37716 0 0.425781 8.95138 0.425781 20C0.425781 31.0486 9.37716 40 20.4258 40C31.4744 40 40.4258 31.0486 40.4258 20C40.4141 8.95138 31.4627 0 20.4258 0ZM20.4258 36.3679C11.3807 36.3679 4.04617 29.0334 4.04617 19.9883C4.04617 10.9432 11.3807 3.60867 20.4258 3.60867C29.4709 3.62039 36.7937 10.9432 36.8054 19.9883C36.7937 29.0451 29.4709 36.3679 20.4258 36.3679Z" fill="#70BF48"/>
                                </svg>:  <svg width="25" height="25" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.6771 2C11.3047 2 2 11.3083 2 22.6852C2 34.062 11.3047 43.3704 22.6771 43.3704C34.0495 43.3704 43.3542 34.062 43.3542 22.6852C43.3542 11.3083 34.0495 2 22.6771 2Z" stroke="#E2574C" stroke-width="3.5" stroke-miterlimit="10"/>
                                <path d="M24.7438 10.0156H20.6084V12.3427H24.7438V10.0156Z" fill="#E2574C"/>
                                <path d="M24.7438 28.8916H20.6084V33.0286H24.7438V28.8916Z" fill="#E2574C"/>
                                <path d="M24.7438 12.3428H20.6084V24.7539H24.7438V12.3428Z" fill="#E2574C"/>
                                </svg>}</td>
                        </tr>
                        <tr>
                            <td id="cainvitename-child">Prakhar Agarwal</td>
                            <td>Done</td>
                        </tr>
                     </tbody>
                    </table>
                </div>



               
*/}         
            <PaymentStatus />

             <div className="cainviteparent-heading">
                    Perks
                </div>
                <div className="cainvite-line2"></div>
                <div className="cainviteparent-perks">
                    <div className="cainviteparent-perks-heading">
                    Benefits of sending invites
                    </div>
                    <div className="cainviteparent-perks-childparent">
                    The following criteria were used to decide the waiver in fees for all the participants.
                    
                    </div>

                    <div className="cainviteparent-perks-child">
                        10% off on the registration fee on each successful payment done through invite link

                    </div> 
                   
                </div>
                
            </div>

        )
    }
}
