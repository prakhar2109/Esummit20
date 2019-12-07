import React, { Component } from 'react'
import './success.css'
import Button from '../button/register_button.js'
import Navbar from '../../navbar/navbar.js'
function Success() {
  return (
    <div className="registration_success">
      <Navbar />
      <div className="success_main">
        <div className="success_heading">Success !</div>
        <div className="success_close"></div>
        <div className="success_content">
          You have successfully registered. The link to the dashboard will be
          uploaded soon.
        </div>
        <Button
          name="CLOSE"
          style={{
            fontFamily: 'Poppins',
            width: '104px',
            letterSpacing: '2px',
            fontWeight: 'bold',
            fontSize: '16px',
            marginTop: '44px',
            marginLeft: '416px'
          }}
          handleClick={() => {
            window.location = '/'
          }}
        ></Button>
      </div>
    </div>
  )
}
export default Success
