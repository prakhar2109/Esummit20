/* eslint-disable react/prop-types */
import React from 'react'
import './partner.css'
export default function Partners(props) {
  return (
    <div className="partner-parent">
      <div className="partners-head">PARTNERS</div>
      <div className="partners-body">
        {props.partners.map(partner => (
          <div key={partner.id} className="each-partner">
            <div className="partner-logo-wrap">
              {' '}
              <img className="partner-logo" src={partner.logo} />
            </div>
            <div className="partner-name">{partner.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
