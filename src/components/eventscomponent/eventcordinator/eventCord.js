/* eslint-disable react/prop-types */
import React from 'react'
import './eventCord.css'
export default function EventCoordinator(props) {
  return (
    <div className="coordinator-parent">
      <div className="coordinator-head">EVENT CO-ORDINATOR </div>
      <p className="coordinator-body">
        {props.coordinatorInfo.map(eachInfo => (
          <div key={eachInfo.id} className="coordinator-info">
            {eachInfo.name}
            <br />
            {eachInfo.email}
            <br />
            {eachInfo.phone}
          </div>
        ))}
      </p>
    </div>
  )
}
