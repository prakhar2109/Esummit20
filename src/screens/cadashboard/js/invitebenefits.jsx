import React, { Component } from 'react'
import "../css/invitebenefits.css";

class InviteBenefits extends Component{
   
    render(){
        
        return(
            <React.Fragment>
                <p>&#8226; {this.props.discountStatement}</p>
            </React.Fragment>
        )
    }
}
export default class CriteriaMapping extends Component{
    constructor(){
        super()
        this.state={
            noOfCriterias:0,
            criteria:[],
        }
    }
    render() {
        return (
            <React.Fragment>
                {this.state.noOfCriterias ? this.state.criteria.map((criteria,i) => {
                    return   <InviteBenefits discountStatement={criteria} key={i} ></InviteBenefits>
                }) : null
                }
            </React.Fragment>
        ) 
    }
}
