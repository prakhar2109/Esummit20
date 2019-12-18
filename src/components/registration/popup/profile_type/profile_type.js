/* eslint react/prop-types: 0 */
import React, { Component } from 'react'
import './profile_type.css'

import Button from '../button/register_button.js'
import Navbar from '../../navbar/navbar.js'

class Profiletype extends Component {
  constructor(props) {
    super(props)
    this.state = {
      profile_type: ''
    }
  }
  componentDidMount() {
    // const query=new URLSearchParams(this.props.location.search);
    // // console.log(query)
    // console.log(query.entries())
    // for(let param of query.entries())
    // {
    //   console.log(param[0],"wwwwww");
    //   console.log(param[1],"ddddddd");
    // }
  }
  onProfileChange = e => {
    this.setState({
      profile_type: e.target.value
    })
  }
  handle_show = e => {
    if (e.target.checked) {
      const x = document.getElementById('profile_ca_info')
      x.style.display = 'block'
    } else {
      const x = document.getElementById('profile_ca_info')
      x.style.display = 'none'
    }
  }
  handleNext = () => {
    const query = new URLSearchParams(this.props.location.search)
    // console.log(query)
    for (let param of query.entries()) {
      console.log(param[0])
      console.log(param[1])
    }

    if (this.state.profile_type === 'others') {
      return (window.location.href =
        'https://docs.google.com/forms/d/e/1FAIpQLSdaJH9lppWdVlgjXDiw60KvkT1kQeUcn-4s-UHDL_BirextvQ/viewform?usp=sf_link')
    } else if (this.state.profile_type === 'CA') {
      this.props.history.push({
        pathname: '/ca-registration',
        search: this.props.location.search
      })
    }
  }
  render() {
    return (
      <div className="profiletype_outer">
        {/* <Navbar
          style={{
            opacity: '0.5'
          }}
        /> */}
        <div className="profiletype_main" id="profiletype_main_opacity">
          <div className="profiletype_heading">Profile Type</div>
          <div className="profiletype_list_selection">
            <label className="profiletype_container">
              <input
                type="radio"
                name="radio"
                value="CA"
                checked={this.state.profile_type === 'CA' ? true : false}
                onChange={this.onProfileChange}
                onClick={e => {
                  this.handle_show(e)
                }}
              />
              <span className="profiletype_checkmark"></span>
              <span>Campus Ambassador</span>
              <br />
            </label>
            <span className="profiletype_extra_info" id="profile_ca_info">
              *CAs are required to register through Facebook{' '}
            </span>
            <label className="profiletype_container">
              <input
                type="radio"
                name="radio"
                value="others"
                checked={this.state.profile_type === 'others' ? true : false}
                onChange={this.onProfileChange}
              />
              <span className="profiletype_checkmark"></span>
              <span>Others</span>
            </label>

            <Button
              name="NEXT"
              className="profiletype_button"
              handleClick={this.handleNext}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Profiletype
