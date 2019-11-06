import React, { Component } from 'react'
import "../css/discountcriterias.css";

class DiscountCriteria extends Component{
    constructor(){
        super()
        this.state={
            
        }
    }
    render(){
        
        return(
            <React.Fragment>
                <p>&#8226;{this.props.discountStatement}</p>
            </React.Fragment>
        )
    }
}
export default class CriteriaMapping extends Component{
    constructor(){
        super()
        this.state={
            noOfCriterias:1,
            criteria:['10% off on the registration fee on each successful payment through invite link'],
        }
    }
    render() {
        return (
            <React.Fragment>
                {this.state.noOfCriterias ? this.state.criteria.map((criteria,i) => {
                    return   <DiscountCriteria discountStatement={criteria} key={i} ></DiscountCriteria>
                }) : null
                }
            </React.Fragment>
        ) 
    }
}