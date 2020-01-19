import React, { Component } from 'react'
import SmallEvent from './smallevent'
import amity from '../../../../assets/amity.svg'
/* eslint-disable react/prop-types */

export default class  ContentIndex extends Component {
  render() {
    console.log(this.props.data, 'again')
    return (
      <React.Fragment>
        {console.log(this.props.data, 'tushar')}
        {this.props.data &&
          this.props.data.map((body, index) => {
            return body.sub_event_name === this.props.active ? (
              <div key={index}>
                {body.apply_now_description !== '100' ? (
                  <div className="suignite-parent-child2-applyparent">
                    <div className="suexpo-city-image">
                      <img src={amity} alt="" />
                    </div>
                    <div className="suignite-parent-child2-applyparent-heading">
                      {/* {body.apply_now_description} */}
                      <div className="content-child1">{body.university_name}</div>
                      <div className="content-child2">
                        <span>
                          {body.address}
                        </span>
                        <span>{body.date} </span>
                        <span>{body.time}</span>
                      </div>
                    </div>
                    <a href={body.sub_event_reg_url} target="_blank">
                      <button id="suignite-parent-child2-applyparent-button">
                        APPLY
                      </button>
                    </a>
                  </div>
                ) : null}

                {this.props.data &&
                  this.props.data.map(
                    (e, index) =>
                      e.sub_event_name === this.props.active && (
                        <SmallEvent key={index} data={e.detail} />
                      )
                  )}
              </div>
            ) : null
          })}
      </React.Fragment>
    )
  }
}

/* eslint-disable react/prop-types */
