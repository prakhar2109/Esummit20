import React, { Component } from 'react'
import FacebookLogin from './account_setup/accountsetup.js'
import PropTypes from 'prop-types'
import FetchApi from '../../utils/fetchAPI'
/* eslint-disable react/prop-types */

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
    
    }
  }

//   handleFullSubmit = () => {
//     const query=new URLSearchParams(this.props.location.search);
//     let ref=null;
//     for(let param of query.entries())
//       ref=param[1];


//     let endpoint = ref === null ? "/v1/api/user/signup/" : `/v1/api/user/signup/?ref=${ref}`


//     FetchApi('POST', endpoint, this.state, null)
//       .then(res => {
//         if (res.data) {
//           this.setState({ success: true, active_step: 0 })
//         }
//       })
//       .catch(error => {
//         this.setState({
//           active_step: 0,
//           error: true,
//           error_bool:error
//         })
       
//       })
//   }
  responseFacebook = response => {
    this.setState({
      name: response.name,
      email: response.email,
      fb_access_token: response.accessToken,
      image_url: response.image_url,
      social_signup: response.social_signup,
    },()=>{
        console.log(this.state)
    })
  }
 
  render() {
   
    return (
      <React.Fragment>
        
          <FacebookLogin
            handleProfile={this.responseFacebook}
            profile_type={profile_type}
          />
        
       


     
      </React.Fragment>
    )
  }
}
export default Registration
Registration.propTypes = {
  history: PropTypes.func
}
/* eslint-disable react/prop-types */
