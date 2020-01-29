import React, { Component } from 'react'
import cardImage from '../../../../assets/speakers/harsh-hande.jpeg'
import TeamCard from './card'
import { BASE_URL } from '../../../../utils/urls'
import axios from 'axios'
import './teams.css'
import Loader from '../../../loader/loader'

export default class Team extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    document.getElementById('loader').style.display = 'grid'

    axios.get(BASE_URL + '/v1/api/team/')
    .then(res => {
      document.getElementById('loader').style.display = 'none'

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
          <Loader/>
          <div className="team-card-container">
            {
              this.state.data.map((image, id) => (
                <TeamCard
                  name={image.name}
                  key={id}
                  image={image.image}
                  linkd={image.linkedin}
                  position={image.position}
                  phone={image.phone}
                />
              ))}
          </div>
        </div>
      </div>
    )
  }
}
