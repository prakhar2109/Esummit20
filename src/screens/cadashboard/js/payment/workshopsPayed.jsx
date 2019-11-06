import React, { Component } from 'react'
import './../../css/payment/workshops.css'
import { BASE_URL } from "./../../../../utils/urls";
import axios from "axios";


class Workshop extends Component{
    constructor(props){
        super(props)
        this.state={
            isWorkshopDiscarded:true
        }
    }
    toggleWorkshop = e =>{
        let token = localStorage.getItem("user_token");
        // console.log(this.state.isWorkshopDiscarded,'state')
        if(this.state.isWorkshopDiscarded){
        document.getElementById(`capayment-toggleaccomodation-workshops-${this.props.id}`).innerHTML = 'ADD'
        axios
        .get(BASE_URL + `/v1/api/event/${this.props.id}/apply` , {
          headers: {
            Authorization: `Token ${token}`,
          },
        })
        .then(res => {
        //   console.log(res.data,'dfnam')
          this.setState({
            workshopsNotPayed:res.data,
            noOfWorkshopsNotPayed:res.data.length,
            isWorkshopDiscarded:false,
          })
        })
        .catch(response => {
          alert("could not connect to the server");
        });
        this.props.letMeknowIfDiscardClicked()
        
    }
        else{
            document.getElementById(`capayment-toggleaccomodation-workshops-${this.props.id}`).innerHTML = 'DISCARD'

            axios
            .get(BASE_URL + `/v1/api/event/${this.props.id}/unregister` , {
              headers: {
                Authorization: `Token ${token}`,
              },
            })
            .then(res => {
              console.log(res.data,'dfnam')
              this.setState({
                workshopsNotPayed:res.data,
                noOfWorkshopsNotPayed:res.data.length,
                isWorkshopDiscarded:true,
              })
            })
            .catch(response => {
              alert("could not connect to the server");
            });   
            this.props.letMeknowIfDiscardClicked()
        }



    }
    render(){
        let {workshopName,workshopFee,id,isPayed} = this.props
        // let workshopName = 'workshop 1'
        // let workshopFee  = 500
        

        return(
            <div className='capaymentwv-workshopmappingelement'>
                <div className='capayment-workshops-registrationfee-parent'>
                <div className="capaymentwv-workshop-spaceaboutcolon">{workshopName}
                
                </div>
                <div className='capayment-toggleaccomodation-div'>
                {!isPayed && <button 
                  id= {`capayment-toggleaccomodation-workshops-${id}`}
                  className="capayment-toggleaccomodation-workshops"
                  onClick={e => this.toggleWorkshop(e)}>DISCARD</button>
                 }
                

                
                </div> </div>:<div className="capaymentwv-space"></div>Rs {workshopFee}
                 
            </div>
        )
    }
}
export default class Workshops extends Component{
    constructor(){
        super()
        
    }
    render() {
        let {workshops,noOfWorkshops,isPayed,letMeknowIfDiscardClicked} = this.props
        return (
            
            <React.Fragment>
                
                {noOfWorkshops ? workshops.map((workshop,i) => {
                    // if(workshop.fee>0){
                        
                        return   <Workshop workshopName={workshop.event_title} workshopFee={workshop.event_fee} id={workshop.id} key={i} isPayed={isPayed} letMeknowIfDiscardClicked={letMeknowIfDiscardClicked}></Workshop>
                    // }
                    // else{
                    //     return   <Workshop workshopName={workshop.event_title} workshopFee={0} id={workshop.id} key={i} isPayed={isPayed} letMeknowIfDiscardClicked={letMeknowIfDiscardClicked}></Workshop>
                    // }
                }) : null
                }
                
            </React.Fragment>
        ) 
    }
}