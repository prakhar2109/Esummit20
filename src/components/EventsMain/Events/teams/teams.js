import React, { Component } from 'react'
import cardImage from '../../../../assets/speakers/harsh-hande.jpeg'
import TeamCard from './card'
import { BASE_URL } from '../../../../utils/urls'
import axios from 'axios'
import './teams.css'

export default class Team extends Component {
  constructor(props)
  {
    super(props)
    this.state={
      data:[]
    }
  }
  componentDidMount() {
    
    axios.get(BASE_URL + '/v1/api/team/')
    .then(res => {

      res.data.forEach(data => {
        if(data.image)
        data.image = data.image.substring(10, data.image.length)
      })
      this.setState({data:res.data})


      // let result=res.data.filter(image =>
      //   image.image&&image.image.substring(6, image.image.length));

      //   this.setState({data:result})
      

      // let newimage=res.data.map((image,id)=>{

      //   return (
      //     image.image&&image.image.substring(6, image.image.length)
      //   )
      // })
      
      // let newarray
      // newarray.push(...res.data);
      // this.setState({
      //   data:[
      //     res.data.image=newimage,
      //     ...this.state
      //   ]
      // })

      console.log(this.state.data, 'events')
    })
  }


  render() {
   


    return (

      <div>
      <div className="team-container">
        <div className="team-card-container">
        {this.state.data&&this.state.data.map((image,id)=>
        <TeamCard name={image.name} key={id} image={image.image} linkd={image.linkedin} position={image.position} phone={image.phone}/>
      )}

         
        </div>
      </div>
      </div>
)
}
}
